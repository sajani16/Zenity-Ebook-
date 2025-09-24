import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import addToCart from "./addToCart"; // Import addToCart helper
import { useOutletContext } from "react-router-dom";

function ProductDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const { openSignupModal } = useOutletContext();

  useEffect(() => {
    setLoading(true);
    fetch(`http://127.0.0.1:8000/store/product/detail/${productId}`)
      .then((res) => {
        if (!res.ok) throw new Error("Product not found");
        return res.json();
      })
      .then((data) => {
        setProduct(data.product);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setProduct(null);
        setLoading(false);
      });
  }, [productId]);

  if (loading)
    return (
      <p className="text-center text-gray-600 py-12 text-lg font-medium animate-pulse">
        Loading product details...
      </p>
    );

  if (!product)
    return (
      <p className="text-center text-red-600 py-12 text-lg font-semibold">
        Product not found.
      </p>
    );

  return (
    <div className="bg-white min-h-screen px-6 py-12 max-w-4xl mx-auto">
      <img
        src={product.image }
        alt={product.name}
        className="w-full max-h-96 object-cover rounded-md mb-8 border border-gray-200 shadow-sm"
      />
      <h2 className="text-4xl font-bold text-[#0B1F3A] mb-6">{product.name}</h2>
      <p className="text-gray-700 mb-6">{product.description}</p>
      <p className="text-2xl font-semibold text-[#0B1F3A] mb-8">${product.price.toFixed(2)}</p>
      <button
        onClick={() => addToCart({ productId: product.id, openSignupModal })}
        className="bg-[#0B1F3A] hover:bg-[#071426] text-white px-8 py-3 rounded-md font-semibold shadow transition duration-300"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductDetail;
