import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="bg-black  text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">RecipeBook</h1>
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-gray-300">
            Home
          </Link>
          {/* <Link to="/recipedetails/:id" className="hover:text-gray-300">
            Recipe Details
          </Link> */}
        </div>
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="space-y-2">
            <div className="w-6 h-0.5 bg-white"></div>
            <div className="w-6 h-0.5 bg-white"></div>
            <div className="w-6 h-0.5 bg-white"></div>
          </div>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden mt-4 space-y-4 p-4">
          <Link
            to="/"
            className="block hover:text-gray-300"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          {/* <Link
            to="/recipedetails/:id"
            className="block hover:text-gray-300"
            onClick={() => setMenuOpen(false)}
          >
            Recipe Details
          </Link> */}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
