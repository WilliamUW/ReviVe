// src/Router.jsx
import {  Route, Routes } from "react-router-dom";
import BottomNavbar from "./components/BottomNavbar";
import SellPage from "./pages/Sell";
import BuyPage from "./pages/Buy";
import BrokenElectronic from "./pages/Broken";
import About from "./pages/About";
import Unused from "./pages/Unused";
import Home from "./pages/Home";

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
