import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 hover:shadow-xl transition">
      <img
        src={product.img}
        alt={product.name}
        className="w-full h-48 object-cover rounded-lg"
      />
      <h2 className="text-xl font-semibold mt-3">{product.name}</h2>
      <p className="text-gray-700 mt-1">${product.price}</p>

      <Link
        to={`/product/${product.id}`}
        className="block text-center bg-blue-600 text-white mt-4 py-2 rounded-lg hover:bg-blue-700"
      >
        View Details
      </Link>
    </div>
  );
}
