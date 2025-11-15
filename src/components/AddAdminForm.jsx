import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";

export default function AddAdminForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // إنشاء مستخدم جديد في Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // إضافة بيانات إضافية في Firestore (مثلاً role: admin)
      await setDoc(doc(db, "admins", user.uid), {
        email: user.email,
        role: "admin",
        createdAt: new Date(),
      });

      alert(`Admin added: ${email}`);
      setEmail(""); setPassword("");
    } catch (err) {
      console.error("Error adding admin:", err);
      alert("Failed to add admin: " + err.message);
    }
  };

  return (
    <form className="bg-white p-6 rounded-lg shadow-md" onSubmit={handleSubmit}>
      <h2 className="text-xl font-bold mb-4">Add Admin</h2>
      <input
        type="email"
        placeholder="Email"
        className="border p-2 rounded mb-3 w-full"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="border p-2 rounded mb-3 w-full"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Add Admin
      </button>
    </form>
  );
}
