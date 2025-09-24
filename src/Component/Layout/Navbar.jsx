import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { BookOpen, Search, ShoppingCart, User, Menu, X } from "lucide-react";

const Navbar = ({ isAuthenticated, openLoginModal, openSignupModal }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cartCount = 2;
  const navigate = useNavigate();

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-yellow-400 border-b-2 border-yellow-400"
      : "text-gray-300 hover:text-white";

  const handleUserIconClick = () => {
    if (!isAuthenticated) {
      openLoginModal();
    } else {
      navigate("/");
    }
  };
  const handleCartIconClick = () => {
    if (!isAuthenticated) {
      openLoginModal();
    } else {
      navigate("/cart");
    }
  };

  return (
    <nav className="bg-[#0B1F3A] text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <NavLink to="/" className="text-3xl font-semibold">
            Zenity
          </NavLink>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>
          <NavLink to="/about" className={navLinkClass}>
            About
          </NavLink>
          <NavLink to="/products" className={navLinkClass}>
            Products
          </NavLink>

          <NavLink to="/contact" className={navLinkClass}>
            Contact
          </NavLink>
        </div>

        {/* Actions (Search, Cart, User) */}
        <div className="hidden md:flex items-center gap-4">
          {/* Search */}
          <div className="relative text-gray-400">
            <Search className="absolute left-3 top-2.5 w-4 h-4" />
            <input
              type="text"
              placeholder="Search books..."
              className="bg-[#1e3557] text-white placeholder-gray-400 pl-10 pr-4 py-2 rounded-md focus:outline-none"
            />
          </div>

          <button
            onClick={handleCartIconClick}
            className="relative hover:text-yellow-400"
          >
            <ShoppingCart className="w-6 h-6" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs font-bold px-1.5 py-0.5 rounded-full">
                {cartCount}
              </span>
            )}
          </button>

          <button
            onClick={handleUserIconClick}
            className="hover:text-yellow-400"
          >
            <User className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-2">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>
          <NavLink to="/about" className={navLinkClass}>
            About
          </NavLink>
          <NavLink to="/products" className={navLinkClass}>
            Products
          </NavLink>

          <NavLink to="/contact" className={navLinkClass}>
            Contact
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
