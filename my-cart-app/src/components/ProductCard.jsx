import React from 'react';

function ProductCard({ product, addToCart }) {
  return (
    <div className="border p-4 rounded shadow-sm flex flex-col justify-between h-full">
      <img src={product.image} alt={product.title} className="w-full h-48 object-contain mb-4" />
      <h2 className="text-lg font-semibold mb-2">{product.title}</h2>

      {/* Container for Price and Button */}
      <div className="mt-auto">
        <p className="text-gray-600 mb-2 text-lg font-semibold">${product.price}</p>
        <button
          onClick={() => addToCart(product)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
