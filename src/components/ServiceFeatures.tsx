import React, { useState } from "react";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  icon: React.ReactNode;
  label: string;
  value: string;
  colorScheme: 'green' | 'blue' | 'purple' | 'orange' | 'yellow';
}

const MetricCard: React.FC<MetricCardProps> = ({ position, icon, label, value, colorScheme }) => {
  const positionClasses = {
    'top-left': '-top-6 -left-12',
    'top-right': '-top-4 -right-12',
    'bottom-left': '-bottom-8-left-12',
    'bottom-right': '-bottom-8 -right-8'
  };

  const colorSchemes = {
    green: 'bg-green-100 text-green-600 border border-green-600 ',
    blue: 'bg-blue-100 text-blue-600 border border-blue-600',
    purple: 'bg-purple-100 text-purple-600 border border-purple-600',
    orange: 'bg-orange-100 text-orange-600 border border-orange-600',
    yellow: 'bg-yellow-100 text-yellow-600 border border-yellow-600'
  };

  return (
    <div className={`absolute ${positionClasses[position]} bg-white backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-gray-100 hover:scale-105 transition-transform duration-300`}>
      <div className='flex items-center gap-3'>
        <div className={`w-10 h-10 ${colorSchemes[colorScheme]} rounded-full flex items-center justify-center`}>
          {icon}
        </div>
        <div>
          <p className='text-sm text-gray-600'>{label}</p>
          <p className='text-lg font-bold text-gray-900'>{value}</p>
        </div>
      </div>
    </div>
  );
};

interface FeatureLink {
  link: string;
  label: string;
}

interface Feature {
  button: string;
  title: string;
  content: string;
  image: string;
  link: FeatureLink;
}

interface ServiceFeaturesProps {
  features: Feature[];
  className?: string;
}

// Simple Button component since it doesn't exist in the project
const Button: React.FC<{ link: string; label: string; className?: string }> = ({ 
  link, 
  label, 
  className = "" 
}) => {
  return (
    <a
      href={link}
      className={cn(
        "inline-flex items-center px-6 py-3 text-base font-medium text-white bg-black rounded-full hover:bg-gray-800 transition-colors duration-200",
        className
      )}
    >
      {label}
    </a>
  );
};

// Simple markdownify replacement - just returns the HTML string
const markdownify = (content: string): string => {
  return content;
};

const ServiceFeatures: React.FC<ServiceFeaturesProps> = ({ features, className = "" }) => {
  const [active, setActive] = useState(0);

  if (!features || features.length === 0) {
    return (
      <div className="w-full max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center text-red-500 bg-red-50 p-8 rounded-lg">
          <p>No features data provided to ServiceFeatures component</p>
        </div>
      </div>
    );
  }

  return (
    <div className={cn("w-full max-w-7xl mx-auto my-16 px-4 sm:px-6 lg:px-8", className)}>
      {/* Debug info - remove this after testing */}
      <div className="text-center mb-10 text-black text-6xl font-semibold ">
        What We Offer in our Airport Package
      </div>
      
      {/* Button Container */}
      <div className="flex flex-wrap justify-center gap-4 px-4 md:px-0 mb-8">
        {features.map((item, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={cn(
              "min-w-[120px] px-6 py-3 text-sm md:text-base font-medium rounded-full transition-all duration-300 ease-in-out",
              active === i
                ? "bg-[#027d3d] text-white scale-105"
                : "bg-white text-black border-2 border-gray-200 hover:scale-102 hover:border-gray-300"
            )}
          >
            {item.button}
          </button>
        ))}
      </div>

      {/* Content Container */}
      <div className="relative mt-8 flex flex-col lg:flex-row items-center bg-[#F7F7F7] border border-gray-200 rounded-[20px] overflow-hidden shadow-lg min-h-[500px] lg:min-h-[500px]">
        {/* Background Pattern Images - Behind entire container */}
        <img
          src="/card-pattern-1-green.png"
          alt="pattern"
          className="absolute bottom-0 left-0 w-[10%] opacity-30"
          width={0}
          height={0}
        />
        <img
          src="/card-pattern-2-green.png"
          alt="pattern"
          className="absolute top-0 right-6 w-[10%] opacity-30"
          width={0}
          height={0}
        />

        {/* Text Content */}
        <div className="relative w-full lg:w-1/2 p-6 md:p-10 lg:p-14 transition-all duration-500 ease-in-out order-2 lg:order-1 z-10">
          <div className="transition-opacity duration-500 ease-in-out">
            <h3
              dangerouslySetInnerHTML={{
                __html: markdownify(features[active].title),
              }}
              className="text-2xl md:text-3xl lg:text-4xl mb-4 font-bold transform transition-transform duration-500 ease-in-out"
            />
            <p
              dangerouslySetInnerHTML={{
                __html: markdownify(features[active].content),
              }}
              className="text-base md:text-lg mb-6 text-gray-600 transform transition-transform duration-500 ease-in-out leading-relaxed"
            />
            <div className="transform transition-all duration-500 ease-in-out">
              <Button
                link={features[active].link.link}
                label={features[active].link.label}
              />
            </div>
          </div>
        </div>

        {/* Image Container */}
        <div className="relative w-full lg:w-1/2 order-1 lg:order-2 flex justify-center items-center p-8 z-10">
          {features.map((feature, i) => (
            <div
              key={i}
              className={cn(
                "absolute w-80 h-80 md:w-96 md:h-96 transition-all duration-500 ease-in-out rounded-3xl overflow-hidden bg-white shadow-lg",
                active === i
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-full"
              )}
            >
              <img
                src={feature.image}
                alt={feature.title}
                width={597}
                height={603}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
          
          {/* Metric Card - Bottom Left */}
          {/* <MetricCard
            position="bottom-left"
            icon={
              <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
              </svg>
            }
            label="Available Now"
            value="24/7"
            colorScheme="green"
          /> */}
        </div>
      </div>
    </div>
  );
};


export default ServiceFeatures;
