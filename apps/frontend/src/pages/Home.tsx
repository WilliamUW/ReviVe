import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
  <div className="space-y-4">
    <Link
      to="/sell"
      className="block w-64 p-4 text-center bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
    >
      I have electronics
    </Link>
    <Link
      to="/buy"
      className="block w-64 p-4 text-center bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
    >
      I want electronics
    </Link>
  </div>
);

export default Home;
