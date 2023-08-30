import { createContext, useEffect, useState, useContext } from "react";

export type UserTypes = "user" | "admin";

export interface IUserRole {
  id: string;
  name: UserTypes;
}

export interface IUser {
  id: string;
  role: IUserRole;
}

export interface ILogUser {
  jwt: string;
  user: IUser;
}

interface IAuthContextProps {
  authenticate: (data: ILogUser) => void;
  logout: () => void;
  user: ILogUser;
}

const AuthContext = createContext({} as IAuthContextProps);

export const setUserLocalStorage = (user: ILogUser) => {
  localStorage.setItem("pontoGo.user", JSON.stringify(user));
};

export const getUserLocalStorage = () => {
  const json = localStorage.getItem("pontoGo.user");

  if (!json) return null;

  const user: ILogUser = JSON.parse(json);
  return user ?? null;
};

type AuthProviderProps = {
  children: React.ReactNode;
};

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState({} as ILogUser);

  useEffect(() => {
    const data = getUserLocalStorage();
    if (data) setUser(data);
  }, []);

  const authenticate = async (data: ILogUser) => {
    setUser(data);
    setUserLocalStorage(data);
  };

  const logout = async () => {
    setUser({} as ILogUser);
    setUserLocalStorage({} as ILogUser);
  };

  return (
    <AuthContext.Provider value={{ user, authenticate, logout }}>{children}</AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };

export default function useAuth() {
  return useContext(AuthContext);
}
