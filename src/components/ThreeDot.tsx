import React from 'react';

interface ThreeDotProps {
  className?: string;
}

const ThreeDot: React.FC<ThreeDotProps> = ({ className = '' }) => {
  return (
    <div className={`flex gap-2 ${className}`}>
      <div className="h-2 w-2 rounded-full bg-primary"></div>
      <div className="h-2 w-2 rounded-full bg-primary"></div>
      <div className="h-2 w-2 rounded-full bg-primary"></div>
    </div>
  );
};

export default ThreeDot;
