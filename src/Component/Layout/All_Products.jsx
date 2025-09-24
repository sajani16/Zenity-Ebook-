import React, { useEffect, useState } from "react";
import addToCart from "./addToCart";
import { Link, useOutletContext } from "react-router-dom";

function All_Product() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const { openSignupModal } = useOutletContext();

  useEffect(() => {
    setLoading(true);
    fetch("http://127.0.0.1:8000/store/product", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="bg-white min-h-screen px-6 py-10">
      <h2 className="text-4xl font-bold text-[#0B1F3A] mb-10 text-center">
        All Products
      </h2>

      {loading && (
        <p className="text-gray-600 text-center text-lg animate-pulse">
          Loading...
        </p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products && products.length > 0
          ? products.map((product) => (
              <div
                key={product.id}
                className="bg-[#f9fafb] rounded-xl shadow-sm border border-gray-200 p-6 flex flex-col justify-between hover:shadow-md transition"
              >
                <h3 className="text-[#0B1F3A] text-lg font-semibold mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-700 text-sm mb-4 line-clamp-4">
                  {product.description}
                </p>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <button
                  onClick={() =>
                    addToCart({ productId: product.id, openSignupModal })
                  }
                  className="bg-[#0B1F3A] hover:bg-[#071426] text-white font-semibold py-2 px-2 rounded-md mt-auto transition-colors duration-300 shadow"
                >
                  Add to Cart
                </button>
                <Link
                  to={`/product/${product.id}`}
                  className="mt-3 text-[#0B1F3A] font-semibold text-center hover:underline"
                >
                  View Details
                </Link>
              </div>
            ))
          : !loading && (
              <p className="text-center text-gray-500 text-lg">
                No products found.
              </p>
            )}
      </div>
    </div>
  );
}

export default All_Product;
