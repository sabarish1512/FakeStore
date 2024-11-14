import React from 'react';

function Navbar({ cartCount, onCartClick }) {
  return (
    <nav className="bg-blue-500 p-4 flex justify-between items-center text-white">
      <h1 className="text-lg font-bold">My Store</h1>
      <button onClick={onCartClick} className="relative">
        Cart
        <span className="ml-2 bg-red-500 text-white rounded-full px-2 py-1 text-xs">
          {cartCount}
        </span>
      </button>
    </nav>
  );
}

export default Navbar;
