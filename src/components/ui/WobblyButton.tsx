import React from "react";

interface WobblyButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
}

export const WobblyButton: React.FC<WobblyButtonProps> = ({
  children,
  onClick,
  variant = "primary",
  className = "",
}) => {
  const baseStyle =
    "px-6 py-3 rounded-full border-2 border-brown font-bold text-lg transition-all duration-200 ease-in-out hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(74,18,21,1)] active:translate-y-0 active:shadow-none flex items-center gap-2";

  const variants = {
    primary: "bg-brown text-beige",
    secondary: "bg-accent text-brown",
    outline: "bg-transparent text-brown hover:bg-white",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyle} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};
