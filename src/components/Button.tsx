import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

interface ButtonProps {
  link: string;
  label: string;
  icon?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ link, label, icon = false, className = '' }) => {
  return (
    <a
      href={link}
      className={`inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors ${className}`}
    >
      <span>{label}</span>
      {icon && <FaArrowRight className="ml-2" />}
    </a>
  );
};

export default Button;
