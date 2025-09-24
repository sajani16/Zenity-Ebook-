import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import Card from "../UI/Card";
import Button from "../UI/Button";

function Catagory() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("http://127.0.0.1:8000/store/category")
      .then((res) => {
        if (!res.ok) {
          setLoading(false);
          throw new Error("Failed to fetch");
        }
        return res.json();
      })
      .then((data) => {
        setCategories(data.categories);
        setLoading(false);
      });
  }, []);

  return (
    <section className="bg-white py-12 px-4 min-h-100vh">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-[#0B1F3A]">Browse by Category</h2>
          <p className="text-gray-600 mt-2 text-sm">
            Discover books in your favorite genres
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
          {loading ? (
            <div className="col-span-full flex justify-center items-center h-40">
              <ClipLoader color="#A9744F" size={50} speedMultiplier={1.5} />
            </div>
          ) : (
            categories.map((category) => (
              <Link
                to={`/category/${category.id}`}
                key={category.id}
                className="w-full"
              >
                <div className="bg-[#f9fafb] border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition text-center text-[#0B1F3A] font-medium">
                  {category.name}
                </div>
              </Link>
            ))
          )}

       

        </div>
      </div>
    </section>
  );
}

export default Catagory;
