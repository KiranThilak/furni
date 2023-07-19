import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import ItemsSection from "./ItemsSection";
import { useState } from "react";
import Nordic from "./img/Ergonomic chair.png";
import Kruzo from "./img/Kruzo Chair.png";
import Ergonomic from "./img/Nordic chair.png";

function App() {
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
  const [cartQuantity, setCartQuantity] = useState(null);
  const [cart, setCart] = useState([]);

  const handleAddCart = (product) => {
    const productIndex = cart.findIndex((item) => item.id === product.id);

    if (productIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[productIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      setCart((prevCart) => [...prevCart, { ...product, quantity: 1 }]);
    }

    setCartQuantity((prevCartQuantity) => prevCartQuantity + 1);
  };

  return (
    <div className="App">
      <Navbar cartQuantity={cartQuantity} cart={cart} />
      <HeroSection />
      <ItemsSection products={products} handleAddCart={handleAddCart} />
    </div>
  );
}

export default App;
