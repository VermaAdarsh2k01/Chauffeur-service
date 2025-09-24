import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { scrollToBookingForm } from '../utils/scrollUtils';

interface ServiceHeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  backgroundImage?: string | { src: string; alt: string };
  bookButtonText?: string;
}


const ServiceHero: React.FC<ServiceHeroProps> = ({ 
  title, 
  subtitle, 
  description, 
  backgroundImage = "/hero2.png",
  bookButtonText = "Book Now"  // Default value if not provided
}) => {
  // Helper function to get image source
  const getImageSrc = (image: string | { src: string; alt: string } | undefined): string => {
    if (!image) return '/hero2.png';
    return typeof image === 'string' ? image : image.src;
  };
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      defaults: {
        ease: 'power3.out',
        
      }
    });

    // Content animation from bottom
    tl.from([contentRef.current], {
      y: 100,
      opacity: 0,
      duration: 1,
    });

    // Image animation from right
    tl.from(imageRef.current, {
      x: 200,
      opacity: 0,
      duration: 1,
    }, '-=0.5');
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className='relative w-full h-auto min-h-[60vh] lg:h-screen mx-auto px-4 sm:px-6 lg:px-0 pt-20 lg:pt-16 flex overflow-hidden'>
      
      {/* Custom Grid Pattern Background */}
        <div className='absolute top-0 left-0 -z-20 w-full h-full'>
            <div 
            className='w-full h-full'
            style={{
                backgroundImage: `
                linear-gradient(rgba(0, 0, 0, 0.15) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0, 0, 0, 0.15) 1px, transparent 1px)
                `,
                backgroundSize: '65px 65px',
                backgroundPosition: '0 0, 0 0'
            }}
            />
            
            {/* Radial fade overlay - grid visible in center, transparent at edges */}
            <div 
                className='absolute inset-0 w-full h-full'
                 style={{
                     background: 'radial-gradient(ellipse at 50% 60%, transparent 0%, transparent 25%, rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 1) 75%)'
                 }}
            />
        </div>
      
      {/* Gradient Background - Same as Hero.tsx */}
      <div className='absolute w-full lg:w-[71%] aspect-[0.618/1] opacity-20 top-0 lg:-bottom-[36px] right-[14%] -z-10 rotate-[-157deg]'>
        {/* Purple Gradient */}
        <div className='absolute w-[40%] aspect-[0.325/1] bg-[#a5a2ff] rounded-full blur-[200px] left-[138px] top-[31px] rotate-12'></div>
        {/* Green Gradient */}
        <div className='absolute w-[40%] aspect-[0.572/1] bg-[#29c775] rounded-full blur-[200px] left-[222px] top-[208px]'></div>
        {/* Yellow Gradient */}
        <div className='absolute w-[40%] aspect-[0.571/1] bg-[#ffe74b] rounded-full blur-[200px] left-[436px] top-[340px]'></div>
      </div>

      <div className='h-full w-full relative flex flex-col justify-center items-center py-8 lg:py-0'> 
        <div ref={contentRef} className='text-center z-10 mb-8 px-4 sm:px-6 lg:px-0'>
          {subtitle && (
            <p className='hidden sm:block text-sm sm:text-base lg:text-lg text-gray-600 uppercase tracking-wider mb-2'>
              {subtitle}
            </p>
          )}
          <h1 className='text-4xl md:text-5xl font-bold mb-6'>
            {title}
          </h1>
          {description && (
            <p className='text-base sm:text-lg text-gray-700 max-w-xl sm:max-w-2xl leading-relaxed mx-auto px-2 sm:px-0'>
              {description}
            </p>
          )}
        </div>
         <div className='relative w-full lg:max-w-5xl h-fit lg:h-80 rounded-2xl'>
            <img 
              ref={imageRef}
              src={getImageSrc(backgroundImage)} 
              alt="Service Hero" 
              className='w-full lg:w-[80%] mx-auto h-full object-contain'
            />
            
            {/* Card Pattern Design Abstracts */}
            <div className="absolute -top-8 -left-16 w-32 h-32 opacity-60 animate-pulse hidden lg:block">
              <img 
                src="/card-pattern-1-green.png" 
                alt="Design Pattern 1" 
                className="w-full h-full object-contain transform rotate-12 hover:rotate-15 transition-transform duration-700"
              />
            </div>
            
            <div className="absolute -top-4 -right-20 w-28 h-28 opacity-30 animate-pulse hidden lg:block" style={{animationDelay: '1s'}}>
              <img 
                src="/card-pattern-2-green.png" 
                alt="Design Pattern 2" 
                className="w-full h-full object-contain transform rotate-12 scale-y-[-1] hover:rotate-9 transition-transform duration-700"
              />
            </div>
            
            <div className="absolute -bottom-12 -left-20 w-24 h-24 opacity-40 animate-pulse hidden lg:block" style={{animationDelay: '2s'}}>
              <img 
                src="/card-pattern-2-green.png" 
                alt="Design Pattern 1" 
                className="w-full h-full object-contain transform rotate-45 hover:rotate-48 transition-transform duration-700"
              />
            </div>
            
            <div className="absolute -bottom-8 -right-16 w-36 h-36 opacity-30 animate-pulse hidden lg:block" style={{animationDelay: '0.5s'}}>
              <img 
                src="/card-pattern-1-green.png" 
                alt="Design Pattern 2" 
                className="w-full h-full object-contain transform -rotate-6 hover:-rotate-3 transition-transform duration-700"
              />
            </div>
          </div>
          <button 
            onClick={scrollToBookingForm}
            className='mt-12 lg:mt-8 text-white bg-black rounded-full font-semibold text-lg px-6 py-2 hover:bg-gray-800 cursor-pointer transform hover:scale-105 transition-all duration-200'
          >
              {bookButtonText}
          </button>
      </div>
    </div>
  );
};

export default ServiceHero;
