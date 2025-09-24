import React, { useState } from "react";
import { toast } from "react-toastify";
import { X } from "lucide-react";

function Signup({ onClose, setIsAuthenticated, toggleModals }) {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirm_password) {
      toast.error("Passwords do not match");
      return;
    }

    const submitData = {
      first_name: formData.first_name,
      last_name: formData.last_name,
      username: formData.username,
      email: formData.email,
      password: formData.password,
    };

    fetch("http://127.0.0.1:8000/account/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(submitData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.token) {
          localStorage.setItem("token", data.token);
          setIsAuthenticated(true);
          toast.success("Signup successful! You are now logged in.");
          onClose();
        } else if (data.success) {
          toast.success(data.success);
          onClose();
        } else if (data.error) {
          toast.error(data.error);
        } else {
          toast.error("Unexpected response");
        }
      })
      .catch(() => toast.error("Signup failed"));
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl shadow-xl w-full max-w-md p-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-3xl font-bold text-[#0B1F3A] mb-6 text-center">
          Sign Up
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="first_name"
            placeholder="First Name"
            onChange={handleChange}
            value={formData.first_name}
            required
            className="w-full border border-gray-300 rounded-md px-4 py-3 text-[#0B1F3A] focus:outline-none focus:ring-2 focus:ring-[#0B1F3A]"
          />
          <input
            type="text"
            name="last_name"
            placeholder="Last Name"
            onChange={handleChange}
            value={formData.last_name}
            required
            className="w-full border border-gray-300 rounded-md px-4 py-3 text-[#0B1F3A] focus:outline-none focus:ring-2 focus:ring-[#0B1F3A]"
          />
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={handleChange}
            value={formData.username}
            required
            className="w-full border border-gray-300 rounded-md px-4 py-3 text-[#0B1F3A] focus:outline-none focus:ring-2 focus:ring-[#0B1F3A]"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            value={formData.email}
            required
            className="w-full border border-gray-300 rounded-md px-4 py-3 text-[#0B1F3A] focus:outline-none focus:ring-2 focus:ring-[#0B1F3A]"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            value={formData.password}
            required
            className="w-full border border-gray-300 rounded-md px-4 py-3 text-[#0B1F3A] focus:outline-none focus:ring-2 focus:ring-[#0B1F3A]"
          />
          <input
            type="password"
            name="confirm_password"
            placeholder="Confirm Password"
            onChange={handleChange}
            value={formData.confirm_password}
            required
            className="w-full border border-gray-300 rounded-md px-4 py-3 text-[#0B1F3A] focus:outline-none focus:ring-2 focus:ring-[#0B1F3A]"
          />

          <button
            type="submit"
            className="w-full bg-[#0B1F3A] hover:bg-[#071426] text-white font-semibold py-3 rounded-md shadow transition-colors duration-300"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center mt-6 text-gray-600">
          Already have an account?{" "}
          <button
            className="text-[#0B1F3A] font-semibold underline hover:text-[#071426]"
            onClick={() => {
              onClose();
              toggleModals && toggleModals();
            }}
            type="button"
          >
            Login
          </button>
        </p>

        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-xl font-bold"
          onClick={onClose}
          aria-label="Close modal"
          type="button"
        >
          <X />
        </button>
      </div>
    </div>
  );
}

export default Signup;
