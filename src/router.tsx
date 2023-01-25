import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AuthProvider } from "./context/auth";
import { Biography } from "./pages/Biography";
import { Blogs } from "./pages/Blogs";
import { Blog } from "./pages/Blogs/Blog";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Tricks } from "./pages/Tricks";
import ScrollToTop from "./utils/scrollToTop";

const Router = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AuthProvider>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/biografia" element={<Biography />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dicas" element={<Tricks />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/blog/:id" element={<Blog />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default Router;
