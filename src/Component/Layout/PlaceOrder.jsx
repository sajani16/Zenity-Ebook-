import React, { useState } from "react";
import { ShoppingCart } from "lucide-react";
import { toast, ToastContainer } from "react-toastify";

export default function PlaceOrder() {
  const [loading, setLoading] = useState(false);

  const placeOrder = async () => {
    setLoading(true);

    try {
      const response = await fetch("http://127.0.0.1:8000/store/place_order/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", // if you use session auth
      });

      if (!response.ok) {
        const text = await response.text();
        throw new Error(`Error: ${response.status} ${text}`);
      }

      const data = await response.json();
      toast.success(data.message || "Order placed successfully!");
    } catch (err) {
      toast.error(err.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="max-w-md mx-auto bg-[#0B1F3A] p-6 rounded-lg shadow-lg text-white font-sans">
        <div className="flex items-center mb-6 space-x-3">
          <ShoppingCart className="text-yellow-400 w-8 h-8" />
          <h2 className="text-2xl font-bold text-yellow-400">Place Your Order</h2>
        </div>

        <button
          onClick={placeOrder}
          disabled={loading}
          className={`w-full flex justify-center items-center gap-2 px-4 py-3 rounded-md font-semibold text-[#0B1F3A] bg-yellow-400 hover:bg-yellow-500 transition-colors ${
            loading ? "cursor-not-allowed opacity-70" : "cursor-pointer"
          }`}
        >
          {loading ? (
            <>
              <svg
                className="animate-spin h-5 w-5 text-[#0B1F3A]"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8H4z"
                ></path>
              </svg>
              Placing Order...
            </>
          ) : (
            <>
              <ShoppingCart className="w-5 h-5" />
              Place Order
            </>
          )}
        </button>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
      />
    </>
  );
}
