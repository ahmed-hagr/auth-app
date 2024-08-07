import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
const Products = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
        const response = await axios.get("https://api.escuelajs.co/api/v1/products");
        setProducts(response.data);
    }
    fetchData();
  }, []);

  return (
    <div className="p-4 pt-10 mt-10 mb-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-4">
      {products ? (
        products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))
      ) : (
        <p>Loading products...</p>
      )}      </div>
    </div>
  );
};

export default Products;
