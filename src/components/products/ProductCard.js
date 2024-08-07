// ProductCard.js
import React from 'react';
import { FaTrashAlt, FaCartPlus } from 'react-icons/fa';
import useCartActions from '@/hocks/useCartActions';
const ProductCard = ({ product }) => {

    const { handleAddToCart, handleRemoveFromCart, isProductInCart } = useCartActions();

  return (
    <div className="p-4 border rounded shadow-sm flex flex-col" key={product.id}>
      {product.images && product.images[0] && (
        <img
          src={product.category.image} // Assuming this is a placeholder
          alt={product.title}
          className="w-full h-48 object-cover mb-2 rounded"
        />
      )}
      <div className="flex-grow">
        <h5 className="text-lg truncate text-gray-700 max-w-xs font-medium">{product.title}</h5>
        <p className="text-gray-600 mt-1">Price: ${product.price}</p>
        <div className="mt-2 flex justify-between items-center">
          <span className="text-gray-700 font-semibold">Category: {product.category.name}</span>
          {isProductInCart(product.id) ? (
            <button onClick={() => handleRemoveFromCart(product)} className="text-red-500 hover:text-red-600">
              <FaTrashAlt size={20} />
            </button>
          ) : (
            <button onClick={() => handleAddToCart(product)} className="text-green-500 hover:text-green-600">
              <FaCartPlus size={20} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
