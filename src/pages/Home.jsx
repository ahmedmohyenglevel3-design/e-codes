import React from "react";
import ProductList from "../components/ProductList";

export default function Home() {
  return (
    <div className="container">
      <h1 className="text-3xl font-bold mb-4">Latest Products</h1>
      <ProductList />
    </div>
  );
}
