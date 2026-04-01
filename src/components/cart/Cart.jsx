import React from 'react'

const Cart = ({carts, setCarts}) => {
  const totalPrice = carts.reduce((sum ,item)=> sum + item.price, 0)
  const handleDelete = (item) =>{
    const newCarts = carts.filter(cart => cart.id !== item.id)
    setCarts(newCarts)
  }

  const handleCheckout = () =>{
    alert(`Total Price: $${totalPrice}. Proceeding to checkout...`)
    setCarts([])
  }
  return (
   <div className="max-w-6xl mx-auto p-4">
      <h2 className="text-3xl font-bold text-center mb-6">🛒 Shopping Cart</h2>

      {carts.length === 0 ? (
        <p className="text-center text-gray-500">No items in cart</p>
      ) : (

        <div>
<div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6">
          {carts.map((cart, index) => (
            <div
              key={index}
              className="shadow-lg rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition duration-300"
            >
              <div className="bg-gray-100 flex justify-center items-center h-48">
                <img
                  src={cart.image}
                  alt={cart.title}
                  className="w-32 h-32 object-contain"
                />
              </div>

              <div className="p-4 space-y-2">
                <h3 className="text-xl font-bold">{cart.title}</h3>
                <p className="text-gray-600 text-sm">{cart.description}</p>

                <p className="text-lg font-bold text-red-500">
                  ${cart.price}/month
                </p>

                <button
                  onClick={() => handleDelete(cart)}
                  className="w-full mt-3 py-2 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

           <div>
        <div className='w-full px-4 flex justify-between items-center h-40 bg-black'>
      <div>
        <h2 className='text-white text-3xl'>Total</h2>
      </div>
      <div>
      <h2 className='text-white text-3xl'>${totalPrice}</h2>
      </div>
      </div>
      <button onClick={handleCheckout} className='btn w-full bg-red-500 text-white'>
        Checkout
      </button>
      </div>
        </div>
        

        
      )}
     
     
    </div>
  )
}

export default Cart