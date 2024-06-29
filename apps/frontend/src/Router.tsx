// src/Router.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Unused from "./pages/Unused";
import Broken from "./pages/Broken";
import Buy from "./pages/Buy";
import App from "./App"; // Your main app component
import BottomNavbar from "./components/BottomNavbar";
import SellPage from "./pages/Sell";

const AppRouter = () => (
  <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sell" element={<SellPage />} />
      <Route path="/unused" element={<Unused />} />
      <Route path="/broken" element={<Broken />} />
      <Route path="/buy" element={<Buy />} />
    </Routes>
    <BottomNavbar />
  </>
);

export default AppRouter;
