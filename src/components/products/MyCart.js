import React from "react";
import ProductCard from "./ProductCard";
import { useSelector } from "react-redux";

const MyCart = () => {
  const cart = useSelector((state) => state.cart.items);

  return (
    <div className="p-4 pt-10 mt-10 mb-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-4">
        {cart.length > 0 ? (
          cart.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <h5 className="text-lg truncate text-gray-700 max-w-xs font-medium ">Your cart is empty</h5>
 
        )}
      </div>
    </div>
  );
};

export default MyCart;
