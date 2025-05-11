import { useState } from "react";
import { FaApple } from "react-icons/fa";
import { FiSearch, FiShoppingBag, FiMenu, FiX } from "react-icons/fi";

function Navbar() {
  const navItems = ["Store", "Mac", "iPad", "iPhone", "Watch", "AirPods", "TV & Home", "Entertainment", "Accessories", "Support"];
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
      {/* Top nav row */}
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <a href="#"><FaApple className="text-black text-xl" /></a>

        <ul className="hidden md:flex space-x-6 text-sm font-medium text-gray-800">
          {navItems.map((item, index) => (
            <li key={index} className="hover:text-black cursor-pointer">
              {item}
            </li>
          ))}
        </ul>

        <div className="flex items-center space-x-4">
          <FiSearch className="text-xl text-gray-700 cursor-pointer" />
          <FiShoppingBag className="text-xl text-gray-700 cursor-pointer" />
          <button className="md:hidden" onClick={() => setMenuOpen(true)}>
            <FiMenu className="text-2xl" />
          </button>
        </div>
      </div>

      {/* Paragraph Below Nav */}
      <div className="text-center text-xs md:text-sm text-gray-600 px-4 pb-3">
        Get up to 12 months of No Cost EMI<sup>®</sup> plus up to ₹8000.00 instant cashback on selected products with eligible cards. <span className="text-blue-600 cursor-pointer hover:underline">Shop ›</span>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden fixed top-0 left-0 w-full h-full bg-white z-50 px-6 py-8">
          <div className="flex justify-between items-center mb-8">
            <FaApple className="text-black text-xl" />
            <button onClick={() => setMenuOpen(false)}>
              <FiX className="text-2xl" />
            </button>
          </div>
          <ul className="space-y-6 text-lg text-gray-800">
            {navItems.map((item, index) => (
              <li key={index} className="hover:text-black cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
