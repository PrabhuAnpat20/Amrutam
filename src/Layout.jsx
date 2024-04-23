import React from "react";
import Navbar from "./Components/Navbar";
import { Outlet } from "react-router-dom";
import App from "./App";

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default Layout;
