import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { scrollToBookingForm } from "../utils/scrollUtils";
import { Button } from "./ui/button";
import { Search } from "lucide-react";

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
  image: string | { src: string; alt: string };
  link: FeatureLink;
}

interface ServiceFeaturesProps {
  features: Feature[];
  sectionTitle?: string;
  className?: string;
}


// Simple markdownify replacement - just returns the HTML string
const markdownify = (content: string): string => {
  return content;
};

const ServiceFeatures: React.FC<ServiceFeaturesProps> = ({ features, sectionTitle, className = "" }) => {
  const [active, setActive] = useState(0);

  // Helper function to get image source
  const getImageSrc = (image: string | { src: string; alt: string }): string => {
    return typeof image === 'string' ? image : image.src;
  };

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
      {/* Section Title */}
      <div className="text-center mb-10 text-black text-3xl lg:text-5xl font-semibold ">
        {sectionTitle || "What We Offer in our Airport Package"}
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
                  ? "bg-white/90 text-blue-900 shadow-lg shadow-blue-500/20 border-blue-200/50 backdrop-blur-xl"
                  : "text-gray-700 hover:text-blue-900 hover:bg-white/40 hover:backdrop-blur-lg border-transparent hover:border-white/30"
              )}
            >
              <span className="font-medium">{item.button}</span>
              
              {/* Active glassmorphism glow */}
              {active === i && (
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 via-blue-300/10 to-blue-400/10 rounded-xl pointer-events-none" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Content Container */}
      <div className="relative mt-8 flex flex-col lg:flex-row items-stretch bg-[#F7F7F7] border border-gray-200 rounded-[20px] overflow-hidden shadow-lg">
        {/* Background Pattern Images - Behind entire container */}
        <img
          src="/card-pattern-1.png"
          alt="pattern"
          className="absolute bottom-0 left-0 w-[10%] opacity-30 hidden lg:block"
          width={0}
          height={0}
        />
        <img
          src="/card-pattern-2.png"
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
                src={getImageSrc(feature.image)}
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
                onClick={(e) => {
                  e.preventDefault();
                  scrollToBookingForm();
                }}
                variant="primary"
                size="lg"
                className="group overflow-hidden relative w-full sm:w-auto"
              >
                {/* Search icon - starts from left, slides in on hover */}
                <Search 
                  className="absolute left-1/2 top-1/2 w-4 h-4 transition-all duration-300 ease-in-out -translate-y-1/2 -translate-x-[calc(50%+200%)] group-hover:-translate-x-1/2 opacity-0 group-hover:opacity-100" 
                />
                {/* Text - slides out to the right on hover */}
                <span className="block transition-all duration-300 ease-in-out group-hover:translate-x-[200%]">
                  {features[active].link.label}
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default ServiceFeatures;
