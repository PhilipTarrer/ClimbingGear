import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-screen-lg mx-auto px-4">
        {/* Contact */}
        <div className="w-full text-center">
          <h3 className="text-lg font-bold mb-3">Contact Us</h3>
          <p className="text-sm">Email: info@example.com</p>
          <p className="text-sm">Phone: (123) 456-7890</p>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-6 pt-4">
        <p className="text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Your Website Name. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
