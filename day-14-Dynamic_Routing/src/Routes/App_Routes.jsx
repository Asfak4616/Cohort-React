import React from "react";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Products from "../Pages/Products";
import { Routes, Route } from "react-router";
import ProductDetail from "../Pages/ProductDetail";
import ProtectedRoute from "./ProtectedRoute";

const App_Routes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<ProtectedRoute>
          <About/>
        </ProtectedRoute>} />
        <Route path="/products" element={<Products />} />
        <Route path="/detail/:id" element={<ProductDetail />} />
      </Routes>
    </div>
  );
};

export default App_Routes;
