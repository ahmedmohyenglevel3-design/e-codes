import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4 sticky top-0 z-50">
      <div className="container flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          MyStore
        </Link>

        <div className="flex gap-6 text-lg">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <Link to="/about" className="hover:text-blue-600">About</Link>
          <Link to="/contact" className="hover:text-blue-600">Contact</Link>
          <Link to="/cart" className="hover:text-blue-600">Cart</Link>
        </div>
      </div>
    </nav>
  );
}
