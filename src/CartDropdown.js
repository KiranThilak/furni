import React, { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

const CartDropdown = ({ cart }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleToggleDropdown = () => {
    setDropdownOpen((prevDropdownOpen) => !prevDropdownOpen);
  };

  return (
    <div>
      <div>
        <AiOutlineShoppingCart
          src="image1.png"
          alt="user icon"
          className="w-7 h-7 cursor-pointer pr-2 "
          onClick={handleToggleDropdown}
        />

        {dropdownOpen && (
          <div
            onClick={handleToggleDropdown}
            className="fixed inset-0 h-full w-full"
          ></div>
        )}

        {dropdownOpen && (
          <div
            className="absolute right-0 mt-2 bg-white rounded-md shadow-lg overflow-hidden mr-4 "
            style={{ width: "20rem" }}
          >
            <div className="py-2 ">
              {cart.map((item) => (
                <a
                  key={item.id}
                  href="#"
                  className="flex items-center px-4 py-3 border-b hover:bg-gray-100 -mx-2"
                >
                  <img
                    className="h-8 w-8 rounded-full object-cover mx-1"
                    src={item.imageSrc}
                    alt="avatar"
                  />
                  <p className="text-gray-600 text-sm mx-2">
                    <span className="font-bold">{item.title}</span> added to
                    cart. Quantity: {item.quantity}
                  </p>
                </a>
              ))}
            </div>
            <a href="#" className="block bg-black text-white text-center py-2">
              Go To Cart
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDropdown;
