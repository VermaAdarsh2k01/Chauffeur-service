import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div className={`rounded-[2rem] relative overflow-hidden ${className}`}>
      <img
        src="/card-pattern-1.png"
        alt="pattern"
        className="absolute bottom-0 left-0 w-1/3"
        width={0}
        height={0}
      />
      <img
        src="/card-pattern-2.png"
        alt="pattern"
        className="absolute top-0 right-[-9%] w-1/3"
        width={0}
        height={0}
      />
      {children}
    </div>
  );
};

export default Card;