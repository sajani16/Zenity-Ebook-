import React from "react";
import { toast } from "react-toastify";
function addToCart({ productId, openSignupModal }) {
  const token = localStorage.getItem("token");
  if (!token) {
    toast.info("Please Sign up first");
    openSignupModal();
    return;
  }

  fetch("http://127.0.0.1:8000/store/cart/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify({ product_id: productId }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.message) {
        toast.success(data.message);
      } else if (data.error) {
        toast.error(data.error);
      }
    })
    .catch((error) => {
      console.error("Error adding to cart", error);
      toast.error("Something went wrong");
    });
}

export default addToCart;
