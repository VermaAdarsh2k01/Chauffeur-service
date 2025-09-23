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
      <div className="text-center mb-10 text-black text-3xl lg:text-5xl font-semibold ">
        What We Offer in our Airport Package
      </div>
      
      {/* Button Container */}
      <div className="flex flex-wrap justify-center gap-2 px-4 md:px-0 mb-8">
        <div className="bg-white/30 backdrop-blur-xl rounded-2xl p-3 border border-white/30 shadow-lg shadow-black/5 flex flex-wrap justify-center gap-2">
          {features.map((item, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={cn(
                "relative px-4 py-3 text-sm md:text-base font-semibold rounded-xl transition-all duration-500 overflow-hidden backdrop-blur-sm border whitespace-nowrap",
                active === i
                  ? "bg-white/90 text-green-700 shadow-lg shadow-green-500/20 border-green-200/50 backdrop-blur-xl"
                  : "text-gray-700 hover:text-green-600 hover:bg-white/40 hover:backdrop-blur-lg border-transparent hover:border-white/30"
              )}
            >
              <span className="font-medium">{item.button}</span>
              
              {/* Active glassmorphism glow */}
              {active === i && (
                <div className="absolute inset-0 bg-gradient-to-r from-green-400/10 via-emerald-300/10 to-green-400/10 rounded-xl pointer-events-none" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Content Container */}
      <div className="relative mt-8 flex flex-col lg:flex-row items-stretch bg-[#F7F7F7] border border-gray-200 rounded-[20px] overflow-hidden shadow-lg">
        {/* Background Pattern Images - Behind entire container */}
        <img
          src="/card-pattern-1-green.png"
          alt="pattern"
          className="absolute bottom-0 left-0 w-[10%] opacity-30 hidden lg:block"
          width={0}
          height={0}
        />
        <img
          src="/card-pattern-2-green.png"
          alt="pattern"
          className="absolute top-0 right-6 w-[10%] opacity-30 hidden lg:block"
          width={0}
          height={0}
        />

        {/* Image Container - Mobile First Order */}
        <div className="relative w-full lg:w-1/2 order-1 flex justify-center items-center p-4 sm:p-6 lg:p-8 min-h-[280px] sm:min-h-[320px] lg:min-h-[500px]">
          {features.map((feature, i) => (
            <div
              key={i}
              className={cn(
                "w-full max-w-[280px] sm:max-w-[320px] md:max-w-[380px] lg:max-w-[400px] aspect-square transition-all duration-500 ease-in-out rounded-2xl lg:rounded-3xl overflow-hidden bg-white shadow-lg",
                active === i
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-95 absolute"
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
        </div>

        {/* Text Content - Mobile Second Order */}
        <div className="relative w-full lg:w-1/2 p-4 sm:p-6 md:p-8 lg:p-14 transition-all duration-500 ease-in-out order-2 flex flex-col justify-center">
          <div className="transition-opacity duration-500 ease-in-out">
            <h3
              dangerouslySetInnerHTML={{
                __html: markdownify(features[active].title),
              }}
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-3 sm:mb-4 font-bold transform transition-transform duration-500 ease-in-out"
            />
            <p
              dangerouslySetInnerHTML={{
                __html: markdownify(features[active].content),
              }}
              className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6 text-gray-600 transform transition-transform duration-500 ease-in-out leading-relaxed"
            />
            <div className="transform transition-all duration-500 ease-in-out">
              <Button
                link={features[active].link.link}
                label={features[active].link.label}
                className="w-full sm:w-auto text-center justify-center sm:justify-start"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default ServiceFeatures;
