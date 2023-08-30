import { Navigate, Outlet } from "react-router-dom";

type UserTypes = "user" | "admin";

interface IPrivateRoutes {
  role: Array<UserTypes>;
  userType: UserTypes;
}

export const PrivateRoute = ({ role, userType }: IPrivateRoutes) => {
  console.log(role.includes(userType));
  console.log(role);
  console.log(userType);

  return role.includes(userType) ? <Outlet /> : <Navigate to="/login" />;
};
