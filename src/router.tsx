import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import { AuthProvider } from "./context/auth";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";

const Router = () => {
  return (
    <HashRouter>
      <AuthProvider>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </AuthProvider>
    </HashRouter>
  );
};

export default Router;
