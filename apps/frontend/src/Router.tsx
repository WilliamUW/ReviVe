// src/Router.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Unused from "./pages/Unused";
import BottomNavbar from "./components/BottomNavbar";
import SellPage from "./pages/Sell";
import BuyPage from "./pages/Buy";
import BrokenElectronic from "./pages/Broken";
import About from "./pages/About";

const AppRouter = () => (
  <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sell" element={<SellPage />} />
      <Route path="/unused" element={<Unused />} />
      <Route path="/broken" element={<BrokenElectronic />} />
      <Route path="/buy" element={<BuyPage />} />
      <Route path="/about" element={<About />} />
    </Routes>
    <BottomNavbar />
  </>
);

export default AppRouter;
