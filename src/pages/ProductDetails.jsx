import React from "react";
import { useParams } from "react-router-dom";
import products from "../data/products";

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <p>Product not found!</p>;

  return (
    <div className="container">
      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={product.img}
          alt={product.name}
          className="w-full md:w-1/2 h-auto rounded-lg"
        />
        <div className="flex-1">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-gray-700 mt-3">{product.description}</p>
          <p className="text-xl font-semibold mt-3">${product.price}</p>
          <button className="mt-5 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
