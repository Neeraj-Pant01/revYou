import React from 'react';
import classNames from 'classnames';

type ButtonProps = {
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'danger' | 'gradient' | 'light';
  children: React.ReactNode;
  disabled?: boolean;
  isLoading?: boolean;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({
  onClick,
  type = 'button',
  variant = 'primary',
  children,
  disabled = false,
  isLoading = false,
  className = '',
}) => {
  const baseStyles = 'px-4 py-2 rounded-xl font-medium transition-all duration-200 text-white shadow-md';

  const variants: Record<string, string> = {
    primary: 'bg-indigo-600 hover:bg-indigo-700',
    secondary: 'bg-gray-600 hover:bg-gray-700',
    danger: 'bg-red-600 hover:bg-red-700',
    gradient: 'bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 hover:brightness-105',
    light: 'bg-white text-gray-800 border border-gray-200 hover:bg-gray-100',
  };

  const disabledStyles = 'opacity-50 cursor-not-allowed';

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || isLoading}
      className={classNames(
        baseStyles,
        variants[variant],
        (disabled || isLoading) && disabledStyles,
        className
      )}
    >
      {isLoading ? 'Loading...' : children}
    </button>
  );
};

export default Button;
