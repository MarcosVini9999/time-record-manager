import { UserTypes } from "@/context/AuthContext";
import { ITimes } from "@/components/Layout/Layout";
import { Navigate, Outlet, useOutletContext } from "react-router-dom";

interface IPrivateRoutes {
  role: Array<UserTypes>;
  userType: UserTypes;
}

export const PrivateRoute = ({ role, userType }: IPrivateRoutes) => {
  const registeredTimes: ITimes[] = useOutletContext();

  return role.includes(userType) ? <Outlet context={registeredTimes} /> : <Navigate to="/login" />;
};
