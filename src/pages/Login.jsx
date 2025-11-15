import React from "react";

export default function Login() {
  return (
    <div className="container max-w-md mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-6">Admin Login</h1>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Username"
          className="border p-2 rounded-lg"
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-2 rounded-lg"
        />
        <button className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
          Login
        </button>
      </form>
    </div>
  );
}
