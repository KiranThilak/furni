import React from "react";
import CartDropdown from "./CartDropdown";
import { FaUser } from "react-icons/fa";

const Navbar = ({ cartQuantity, cart }) => {
  return (
    <nav className="flex justify-between items-center p-4 bg-[#35736E]">
      <h1 className="text-xl font-bold text-white pl-10">Furni</h1>
      <ul className="flex items-center text-white space-x-4">
        <li className="cursor-pointer">Home</li>
        <li className="cursor-pointer">About us</li>
        <li className="cursor-pointer">Services</li>
        <li className="cursor-pointer">Blog</li>
        <li className="cursor-pointer">Contact us</li>
        <div className="flex pr-10 pl-10">
          <FaUser
            src="image2.png"
            alt="cart icon"
            className="w-6 h-6 cursor-pointer pr-2 "
          />
          <CartDropdown cart={cart} />
          <span className="ml-1 text-white font-medium">{cartQuantity}</span>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
