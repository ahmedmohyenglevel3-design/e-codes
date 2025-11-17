import React from "react";
import Hero from "../components/Hero";
import ProductList from "../components/ProductList";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="container mt-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold">Latest Products</h1>
          <div className="text-sm text-gray-500">Showing 12 products</div>
        </div>

        <ProductList />
      </div>
    </>
  );
}
