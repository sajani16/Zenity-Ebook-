import React, { useEffect, useState } from "react";
import Card from "../UI/Card";
import { Link, useParams, useOutletContext } from "react-router-dom";
import addToCart from "./addToCart";

function Product() {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const { openSignupModal } = useOutletContext();

  useEffect(() => {
    setLoading(true);
    fetch(`http://127.0.0.1:8000/store/product/${categoryId}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setLoading(false);
      });
  }, [categoryId]);

  return (
    <div className="bg-white min-h-screen px-6 py-12">
      <h2 className="text-4xl font-bold text-[#0B1F3A] mb-10 text-center">
        Explore Books
      </h2>

      {loading && (
        <p className="text-gray-600 text-center text-lg animate-pulse">
          Loading...
        </p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {products.length > 0
          ? products.map((product) => (
              <div
                key={product.id}
                className="flex flex-col bg-[#f8fafc] rounded-lg shadow-md border border-gray-200 p-4"
              >
                <Card
                  title={product.name}
                  description={product.description}
                  image={product.image}
                  buttonText="Add to Cart"
                  onButtonClick={() =>
                    addToCart({ productId: product.id, openSignupModal })
                  }
                  navyColor="#0B1F3A"
                />
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

export default Product;
