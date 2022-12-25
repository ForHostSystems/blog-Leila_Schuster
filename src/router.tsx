import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AuthProvider } from "./context/auth";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";

const Router = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default Router;
