import React from "react";
import AddProductForm from "../components/AddProductForm";
import AddAdminForm from "../components/AddAdminForm";

export default function Admin() {
  return (
    <div className="container">
      <h1 className="text-3xl font-bold mb-6">Admin Panel</h1>
      <div className="grid md:grid-cols-2 gap-6">
        <AddProductForm />
        <AddAdminForm />
      </div>
    </div>
  );
}
