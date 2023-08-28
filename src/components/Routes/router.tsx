import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FC, Fragment } from "react";
import { Outlet } from "react-router-dom";
import { DashboardPage, LandingPage, LoginPage, TimeRecordPage } from "@/pages";

export const Router: FC = () => {
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
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/meus-registros" element={<TimeRecordPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
