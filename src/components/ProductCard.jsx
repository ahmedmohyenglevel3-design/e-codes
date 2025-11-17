import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  const hasDiscount = product?.originalPrice && product.originalPrice > product.price;
  const discountPercent = hasDiscount ? Math.round((1 - product.price / product.originalPrice) * 100) : null;

  return (
    <div className="bg-white rounded-2xl shadow-md p-4 hover:shadow-xl transform hover:-translate-y-1 transition duration-300">
      <div className="relative">
        <img
          src={product.img}
          alt={product.name}
          className="w-full h-48 object-cover rounded-lg"
        />
        {hasDiscount && (
          <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-md">
            -{discountPercent}%
          </div>
        )}
      </div>

      <h2 className="text-lg font-semibold mt-3 text-gray-900 line-clamp-2">{product.name}</h2>

      <div className="mt-2 flex items-baseline gap-3">
        <div className="text-xl font-bold text-gray-900">${product.price}</div>
        {hasDiscount && (
          <div className="text-sm text-gray-400 line-through">${product.originalPrice}</div>
        )}
      </div>

      <div className="mt-4 flex gap-2">
        <Link
          to={`/product/${product.id}`}
          className="flex-1 text-center bg-primary text-white py-2 rounded-lg font-medium hover:opacity-95 transition"
        >
          View
        </Link>
        <button className="w-12 h-10 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 transition font-medium">
          +
        </button>
      </div>
    </div>
  );
}
