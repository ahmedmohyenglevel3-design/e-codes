import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white/60 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="container flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-3">
          <div className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primary to-indigo-600">
            MyStore
          </div>
          <span className="text-sm text-gray-500">AI Commerce</span>
        </Link>

        <div className="hidden md:flex items-center gap-4 flex-1 mx-8">
          <div className="flex items-center flex-1">
            <input
              aria-label="Search"
              className="w-full rounded-lg border border-gray-200 px-4 py-2 focus:ring-2 focus:ring-primary/50 outline-none"
              placeholder="Search products, e.g. sneakers"
            />
          </div>

          <div className="flex items-center gap-6">
            <Link to="/about" className="text-gray-600 hover:text-gray-900 transition">About</Link>
            <Link to="/contact" className="text-gray-600 hover:text-gray-900 transition">Contact</Link>
            <Link to="/cart" className="relative group">
              <span className="text-gray-600 hover:text-gray-900 transition">Cart</span>
              <span className="absolute -top-2 -right-3 bg-primary text-white text-xs rounded-full px-2 py-1">3</span>
            </Link>
            <Link to="/login" className="px-4 py-2 rounded-lg border border-primary text-primary hover:bg-primary/5 transition">
              Sign In
            </Link>
          </div>
        </div>

        <div className="md:hidden">
          <button aria-label="Open menu" className="p-2 rounded-md border border-gray-200 hover:bg-gray-50">
            ☰
          </button>
        </div>
      </div>
    </nav>
  );
}
