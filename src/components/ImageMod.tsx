import React from 'react';

interface ImageModProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

const ImageMod: React.FC<ImageModProps> = ({ src, alt, width, height, className = '' }) => {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      loading="lazy"
    />
  );
};

export default ImageMod;
