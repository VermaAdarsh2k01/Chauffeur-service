import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Search } from 'lucide-react';
import { scrollToBookingForm } from '../utils/scrollUtils';
import { Button } from './ui/button';

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

    // Simple fade in for the image container
    tl.from(imageRef.current, {
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
        <div className='absolute w-[40%] aspect-[0.571/1] bg-blue-800 rounded-full blur-[200px] left-[436px] top-[340px]'></div>
      </div>

      <div className='h-full w-full relative flex flex-col justify-center items-center py-8 lg:py-0'> 
        <div ref={contentRef} className='text-center z-10 mb-8 px-4 sm:px-6 lg:px-0'>
          {subtitle && (
            <p className='hidden sm:block text-sm sm:text-base lg:text-lg text-gray-600 uppercase tracking-wider mb-2'>
              {subtitle}
            </p>
          )}
          <h1 className='text-4xl md:text-5xl font-bold mb-4'>
            {title}
          </h1>
          {description && (
            <p className='text-base sm:text-lg text-gray-700 max-w-xl sm:max-w-2xl leading-relaxed mx-auto px-2 sm:px-0'>
              {description}
            </p>
          )}
        </div>
         <div className='relative w-full lg:max-w-4xl mx-auto'>
            {/* Simple rounded container */}
            <div 
              ref={imageRef}
              className='relative w-full h-64 lg:h-80 overflow-hidden rounded-full bg-gray-100'
            >
              <img 
                src={getImageSrc(backgroundImage)} 
                alt="Service Hero" 
                className='w-full h-full object-cover'
              />
            </div>
          </div>
          <Button 
            onClick={scrollToBookingForm}
            variant="primary"
            size="lg"
            className='mt-12 lg:mt-8'
          >
            {/* Search icon - starts from left, slides in on hover */}
            <Search 
              className="absolute left-1/2 top-1/2 w-4 h-4 transition-all duration-300 ease-in-out -translate-y-1/2 -translate-x-[calc(50%+200%)] group-hover:-translate-x-1/2 opacity-0 group-hover:opacity-100" 
            />
            {/* Text - slides out to the right on hover */}
            <span className="block transition-all duration-300 ease-in-out group-hover:translate-x-[200%]">
              {bookButtonText}
            </span>
          </Button>
      </div>
    </div>
  );
};

export default ServiceHero;
