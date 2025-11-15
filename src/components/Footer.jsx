import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-8 py-6">
      <div className="container text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} MyStore. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
