import React from 'react';
import { toast } from 'react-toastify';
const Cart = ({ cart , setCart }) => {
  const totalPrice = cart.reduce((sum, item) => sum + Number(item.price || 0), 0);

  const handleDelete = (item) => {
    const newCart = cart.filter((c) => c.id !== item.id);
    setCart(newCart);
    toast.info(`${item.name} removed from cart!`);
  };

  const handleCheckout = (e) => {
    e.preventDefault();
    alert(`Total: $${totalPrice}. Thank you for your purchase!`);
    setCart([]);
    toast.success('Checkout completed!');
  };

  return (
    <div className="min-h-screen bg-slate-100 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-slate-200 p-6 md:p-8">
        <h2 className="text-xl text-start font-extrabold text-slate-800 mb-6">
          Your Cart
        </h2>

        {cart.length === 0 ? (
          <p className="text-center text-gray-400 py-10">No items in cart</p>
        ) : (
          <>
            <div className="space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between bg-slate-100 rounded-xl p-4"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                      <img src={item.icon} alt={item.title} />
                    </div>

                    <div>
                      <h3 className="font-semibold text-slate-800">{item.name}</h3>
                      <p className="text-sm text-start text-slate-500">${item.price}</p>
                    </div>
                  </div>

                  <button
                    onClick={() => handleDelete(item)}
                    className="text-pink-500 text-sm font-medium hover:underline"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            <div className="flex justify-between items-center mt-6 text-slate-500">
              <span>Total:</span>
              <span className="text-2xl font-bold text-slate-800">${totalPrice}</span>
            </div>

            <button
              onClick={handleCheckout}
              className="w-full mt-6 py-3 rounded-full bg-linear-to-r from-purple-600 to-pink-500 text-white font-semibold shadow-md hover:opacity-90 transition"
            >
              Proceed To Checkout
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;