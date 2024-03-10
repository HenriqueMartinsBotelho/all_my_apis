"use client";

import { ChangeEvent } from "react";

interface InputProps {
  type: string;
  placeholder?: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const Input: React.FC<InputProps> = ({
  type,
  placeholder,
  value,
  onChange,
  className = "",
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`flex-1 mb-4 px-4 py-2 bg-gray-800 border border-gray-700 text-white placeholder-gray-400 rounded shadow-outline focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all ${className}`}
    />
  );
};

export default Input;
