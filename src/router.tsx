import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AuthProvider } from "./context/auth";
import { Biography } from "./pages/Biography";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Tricks } from "./pages/Tricks";

const Router = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/biografia" element={<Biography />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dicas" element={<Tricks />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default Router;
