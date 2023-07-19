import React from "react";
import { FaUser } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";

const CartCounter = ({ cartItems }) => {
  return (
    <div className="flex pr-10 pl-10">
      <FaUser
        src="image2.png"
        alt="cart icon"
        className="w-6 h-6 cursor-pointer pr-2"
      />
      <AiOutlineShoppingCart
        src="image1.png"
        alt="user icon"
        className="w-6 h-6 cursor-pointer"
      />
      <span className="ml-1 text-white font-medium">{cartItems}</span>
    </div>
  );
};

export default CartCounter;
