import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-[#0B1F3A] text-white mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        <div>
          <h3 className="text-3xl font-semibold mb-2">Zenity</h3>
          <p className="text-gray-400 text-sm">
            Your favorite place to find the next great read.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="text-gray-300 hover:text-yellow-400 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/products" className="text-gray-300 hover:text-yellow-400 transition">
                Products
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-gray-300 hover:text-yellow-400 transition">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-gray-300 hover:text-yellow-400 transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-3">Contact Us</h4>
          <p className="text-gray-400 text-sm">Email: zenity@gmail.com</p>
          <p className="text-gray-400 text-sm mt-1">Phone: +977-9800000000</p>
        </div>
      </div>

      <div className="border-t border-gray-700 text-center py-4 text-sm text-gray-500">
        © {new Date().getFullYear()} Zenity. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
