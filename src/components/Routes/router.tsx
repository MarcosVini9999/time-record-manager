import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { LandingPage } from "@/pages";

export const Router: React.FC = () => {
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
          <Route path="/hello" element={<h1>hello world</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
