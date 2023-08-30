import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FC, Fragment } from "react";
import { Outlet } from "react-router-dom";
import { DashboardPage, LandingPage, LoginPage, TimeRecordPage } from "@/pages";
import { Layout } from "@/components";
import { getUserLocalStorage } from "@/context/AuthContext";
import { PrivateRoute } from "./PrivateRoute";

export const Router: FC = () => {
  const user = getUserLocalStorage()?.user;

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Fragment>
              <Outlet />
            </Fragment>
          }
        >
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />

          <Route path="/" element={<Layout />}>
            <Route path="/" element={<PrivateRoute role={["admin"]} userType={user?.role?.name} />}>
              <Route path="/dashboard" element={<DashboardPage />} />
            </Route>
            <Route path="/" element={<PrivateRoute role={["user"]} userType={user?.role?.name} />}>
              <Route path="/meus-registros" element={<TimeRecordPage />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
