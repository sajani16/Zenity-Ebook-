import React from "react";

const VARIANTS = {
  primary: "bg-[#0B1F3A] hover:bg-[#071426] text-white",
  secondary: "bg-gray-200 hover:bg-gray-300 text-[#0B1F3A]",
  disabled: "opacity-50 cursor-not-allowed",
};

const SIZES = {
  small: "px-3 py-1 text-sm",
  medium: "px-5 py-2 text-base",
  large: "px-7 py-3 text-lg",
};

function Button({
  children,
  onClick,
  variant = "primary",
  size = "medium",
  disabled = false,
  className = "",
  type = "button",
}) {
  const baseStyles =
    "rounded-md font-semibold shadow transition duration-300 focus:outline-none focus:ring-2 focus:ring-[#0B1F3A] focus:ring-opacity-50";

  const variantStyles = disabled
    ? VARIANTS.disabled
    : VARIANTS[variant] || VARIANTS.primary;

  const sizeStyles = SIZES[size] || SIZES.medium;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles} ${sizeStyles} ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
