import React, { ReactNode } from 'react';

interface IButtonProps {
  children: ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
}

const Button: React.FC<IButtonProps> = ({ children, onClick, type = 'button', variant = 'primary', disabled = false }) => {
  const baseStyles = 'px-4 py-2 rounded-lg focus:outline-none transition duration-300';
  const primaryStyles = 'bg-blue-500 text-white hover:bg-blue-600 disabled:bg-blue-300';
  const secondaryStyles = 'bg-gray-500 text-white hover:bg-gray-600 disabled:bg-gray-300';

  const buttonStyles = variant === 'primary' ? primaryStyles : secondaryStyles;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${buttonStyles}`}
    >
      {children}
    </button>
  );
};

export default Button;
