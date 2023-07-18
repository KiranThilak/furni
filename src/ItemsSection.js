import React from "react";
import Nordic from "./img/Ergonomic chair.png";
import Kruzo from "./img/Kruzo Chair.png";
import Ergonomic from "./img/Nordic chair.png";

const ItemsSection = () => {
  const products = [
    {
      id: 3,
      imageSrc: Ergonomic,
      imageAlt: "Ergonomic Chair",
      title: "Ergonomic Chair",

      price: "43.0",
    },

    {
      id: 2,
      imageSrc: Kruzo,
      imageAlt: "Kruzo Aero Chair",
      title: "Kruzo Aero Chair",

      price: "78.0",
    },
    {
      id: 1,
      imageSrc: Nordic,
      imageAlt: "Nordic CHAIR",
      title: "Nordic CHAIR",

      price: "50.0",
    },
  ];

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          <div>
            <div className="text-black p-4 rounded-t-lg">
              <h3 className="text-3xl font-bold pb-4">
                Crafted with excellent material.
              </h3>
              <p className="whitespace-pre-wrap">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                volutpat lectus non fringilla efficitur. Sed eu lobortis nisi.
                Fusce maximus euismod ultr
              </p>
              <div className="mt-4 pt-6">
                <button className="bg-black text-white px-4 py-2  rounded-full">
                  Explore
                </button>
              </div>
            </div>
          </div>
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative hover:bg-gray-200 rounded-md"
            >
              <div className="overflow-hidden rounded-md">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-auto w-full object-contain sm:h-60 lg:h-80"
                />
              </div>
              <div className="mt-4  text-center p-4">
                <div>
                  <h3 className="text-medium   text-gray-900 text-center font-bold">
                    <a href="/">{product.title}</a>
                  </h3>
                  <p className="text-sm font-medium text-black-700">
                    ${product.price}
                  </p>
                </div>
              </div>
              <div className="absolute bottom--1 left-0 right-0 flex items-end justify-center opacity-0 group-hover:opacity-100 ">
                <button className="bg-black text-2xl font-medium text-white px-4 py-2 rounded-full">
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ItemsSection;
