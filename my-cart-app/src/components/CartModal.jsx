import React from 'react';

function CartModal({ cart, removeFromCart, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 w-11/12 sm:w-3/4 md:w-1/2 lg:w-1/3 rounded-lg shadow-lg">
        <h2 className="text-lg font-bold mb-4">Your Cart</h2>
        {cart.length > 0 ? (
          cart.map((item) => (
            <div key={item.id} className="flex justify-between items-center mb-4">
              <span>{item.title}</span>
              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          ))
        ) : (
          <p>Your cart is empty.</p>
        )}
        <button
          onClick={onClose}
          className="mt-4 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default CartModal;
