import React from "react";

const Navbar = () => (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-2xl font-bold">Zakia Boutique</a>
        <div className="space-x-4">
          <a href="#home" className="hover:text-gray-400">Home</a>
          <a href="#about" className="hover:text-gray-400">About</a>
          <a href="#gallery" className="hover:text-gray-400">Gallery</a>
          <a href="#contact" className="hover:text-gray-400">Contact</a>
        </div>
      </div>
    </nav>
  );
  
  export default Navbar;
  