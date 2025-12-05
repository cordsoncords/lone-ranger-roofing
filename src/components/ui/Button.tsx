import React from 'react';
import { Loader2 } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  isLoading?: boolean;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  isLoading = false, 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded-lg font-bold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  
  // Updated colors to match Logo: Red for primary, Gold for highlights
  const variants = {
    primary: "bg-accent-600 hover:bg-accent-700 text-white shadow-md hover:shadow-lg focus:ring-accent-500",
    secondary: "bg-gold-500 hover:bg-gold-600 text-brand-900 shadow-md focus:ring-gold-400",
    outline: "border-2 border-brand-600 text-brand-700 hover:bg-brand-50 focus:ring-brand-500",
    ghost: "text-gray-600 hover:bg-gray-100 hover:text-gray-900",
  };

  const sizes = "py-3 px-6 text-base sm:text-lg";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes} ${fullWidth ? 'w-full' : ''} ${className}`}
      disabled={isLoading || props.disabled}
      {...props}
    >
      {isLoading && <Loader2 className="mr-2 h-5 w-5 animate-spin" />}
      {children}
    </button>
  );
};