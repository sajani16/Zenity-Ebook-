import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ShoppingCart } from "lucide-react";

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [placingOrder, setPlacingOrder] = useState(false);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      toast.info("Please login first");
      navigate("/login");
      return;
    }
    fetchCartItems();
  }, []);

  function fetchCartItems() {
    setLoading(true);
    fetch("http://127.0.0.1:8000/store/cart", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    })
      .then((res) => {
        if (!res.ok) {
          setLoading(false);
          return res.json().then((err) => {
            throw err;
          });
        }
        return res.json();
      })
      .then((data) => {
        setCartItems(data.cart);
        setLoading(false);
      })
      .catch(() => {
        toast.error("Failed to load cart");
        setLoading(false);
      });
  }

  function updateQuantity(cartId, quantity) {
    if (quantity < 1) return;

    fetch("http://127.0.0.1:8000/store/cart/update", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify({ cart_id: cartId, quantity }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          toast.success(data.message);
          fetchCartItems();
        }
      });
  }

  function removeItem(cartId) {
    fetch("http://127.0.0.1:8000/store/cart/remove", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify({ cart_id: cartId }),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success(data.message);
        setCartItems((prevItems) =>
          prevItems.filter((item) => item.id !== cartId)
        );
      })
      .catch(() => {
        toast.error("Failed to remove item");
      });
  }

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  function placeOrder() {
    if (cartItems.length === 0) {
      toast.info("Your cart is empty!");
      return;
    }

    setPlacingOrder(true);

    fetch("http://127.0.0.1:8000/store/order/place", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    })
      .then((response) => {
        if (!response.ok) {
          return response.text().then((text) => {
            throw new Error(`Error: ${response.status} ${text}`);
          });
        }
        return response.json();
      })
      .then((data) => {
        toast.success(data.message || "Order placed successfully!");
        setCartItems([]); // clear cart UI
      })
      .catch((err) => {
        toast.error(err.message || "Failed to place order");
      })
      .finally(() => {
        setPlacingOrder(false);
      });
  }

  if (loading)
    return (
      <p className="text-center text-gray-500 py-12 text-xl font-semibold">
        Loading your cart...
      </p>
    );

  return (
    <div className="bg-white min-h-screen px-6 py-12">
      <h2 className="text-4xl font-extrabold text-[#0B1F3A] mb-12 text-center tracking-wide">
        Your Cart 🛒
      </h2>

      {cartItems.length === 0 ? (
        <p className="text-gray-400 text-center text-lg italic">
          Your cart is empty.
        </p>
      ) : (
        <>
          <ul className="max-w-4xl mx-auto space-y-8">
            {cartItems.map((item) => (
              <li
                key={item.id}
                className="flex flex-col md:flex-row items-center justify-between border border-gray-300 rounded-2xl shadow-sm p-6 hover:shadow-md transition-shadow bg-white"
              >
                <div className="md:flex-1 mb-4 md:mb-0">
                  <h3 className="text-2xl font-semibold text-[#0B1F3A] mb-2">
                    {item.name}
                  </h3>
                  <p className="text-gray-600 mb-3 line-clamp-3">
                    {item.description}
                  </p>
                  <p className="text-[#0B1F3A] font-bold text-lg">
                    ${item.price.toFixed(2)}
                  </p>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden shadow-sm">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      disabled={item.quantity === 1}
                      className={`px-4 py-2 transition-colors duration-300 text-white ${
                        item.quantity === 1
                          ? "bg-gray-300 cursor-not-allowed"
                          : "bg-[#0B1F3A] hover:bg-[#071426]"
                      }`}
                      aria-label="Decrease quantity"
                    >
                      −
                    </button>
                    <span className="px-6 py-2 bg-white font-medium text-lg border-x border-gray-300">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="px-4 py-2 bg-[#0B1F3A] hover:bg-[#071426] text-white transition-colors duration-300"
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={() => removeItem(item.id)}
                    className="bg-[#0B1F3A] hover:bg-[#071426] text-white px-6 py-2 rounded-lg font-semibold shadow-md transition duration-300"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className="max-w-4xl mx-auto mt-14 p-8 bg-white rounded-2xl shadow-xl border border-gray-300 flex flex-col md:flex-row justify-between items-center">
            <h3
              className="text-2xl font-bold text-[#0B1F3A] mb-6 md:mb-0 tracking-wide"
              aria-live="polite"
            >
              Total:{" "}
              <span className="text-[#071426] font-extrabold">
                ${totalPrice.toFixed(2)}
              </span>
            </h3>
            <button
              onClick={placeOrder}
              disabled={placingOrder || cartItems.length === 0}
              className={`bg-[#0B1F3A] hover:bg-[#071426] text-white px-8 py-3 rounded-2xl font-bold shadow-lg transition duration-300 flex items-center gap-2 ${
                placingOrder
                  ? "cursor-not-allowed opacity-70"
                  : "cursor-pointer"
              }`}
            >
              {placingOrder ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5 text-yellow-400"
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
                  <ShoppingCart className="w-6 h-6 text-yellow-400" />
                  Proceed to Checkout
                </>
              )}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
