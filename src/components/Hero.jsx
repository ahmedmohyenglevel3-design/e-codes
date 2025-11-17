import React from "react";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-primary/10 via-white to-indigo-50 py-16">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Build a modern store — faster with AI
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Elegant product pages, AI-assisted descriptions, and beautiful components.
          </p>

          <div className="mt-6 flex gap-3">
            <input
              aria-label="Search products"
              className="flex-1 rounded-lg border border-gray-200 px-4 py-3 shadow-sm focus:ring-2 focus:ring-primary/50 focus:outline-none"
              placeholder="Search products, e.g. wireless headphones"
            />
            <button className="rounded-lg bg-primary text-white px-6 py-3 font-medium hover:opacity-95 whitespace-nowrap">Explore</button>
          </div>

          <div className="mt-4 text-sm text-gray-500">Trusted by designers & creators.</div>
        </div>

        <div>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white rounded-xl shadow-md p-2 flex items-center justify-center">
              <div className="w-full h-40 bg-gray-100 rounded-md flex items-center justify-center text-gray-400">Product image</div>
            </div>
            <div className="bg-white rounded-xl shadow-md p-2 flex items-center justify-center">
              <div className="w-full h-40 bg-gray-100 rounded-md flex items-center justify-center text-gray-400">Product image</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
