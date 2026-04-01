import React, { use, useState } from "react";
import Card from "./../card/Card";
import Cart from "../cart/Cart";

const Digitaltools = ({ ProductsPromise }) => {
  const products = use(ProductsPromise);

  const [view, setView] = useState("products"); 
  const [cart, setCart] = useState([]);

  // add to cart handler
  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="py-32 container mx-auto px-4 text-center">
      
      <div>
        <h2 className="text-5xl font-extrabold">Premium Digital Tools</h2>
        <p className="text-center mt-2 text-xl max-w-2xl mx-auto">
          Choose from our curated collection of premium digital products
          designed to boost your productivity and creativity.
        </p>

        {/* Buttons */}
        <div className="mt-5 gap-4 flex justify-center">
          <button
            onClick={() => setView("products")}
            className={`px-6 py-3 rounded-full font-semibold cursor-pointer ${
              view === "products"
                ? "text-white bg-gradient-to-r from-[#4F39F6] to-[#9514FA]"
                : "bg-white text-black"
            }`}
          >
            Products
          </button>

          <button
            onClick={() => setView("cart")}
            className={`px-6 py-3 rounded-full font-semibold cursor-pointer ${
              view === "cart"
                ? "text-white bg-gradient-to-r from-[#4F39F6] to-[#9514FA]"
                : "bg-white text-black"
            }`}
          >
            Cart ({cart.length})
          </button>
        </div>
      </div>

  
      <div className="py-20">
        {view === "products" ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {products.map((product) => (
              <Card
                key={product.id}
                product={product}
                handleAddToCart={handleAddToCart}
              />
            ))}
          </div>
        ) : (
          <div>
            {cart.length === 0 ? (
              <Cart/>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {cart.map((item, index) => (
                  <Card key={index} product={item} />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Digitaltools;