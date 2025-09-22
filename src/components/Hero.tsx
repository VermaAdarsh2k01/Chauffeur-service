import React, { useRef } from 'react';
import { LogoMarquee } from './ui/LogoMarquee';
import TabNavigation from './TabNavigation';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

// Example logos - replace these with your actual logo paths
const partnerLogos = [
    { src: '/path/to/logo1.png', alt: 'Partner 1' },
    { src: '/path/to/logo2.png', alt: 'Partner 2' },
    { src: '/path/to/logo3.png', alt: 'Partner 3' },
    { src: '/path/to/logo4.png', alt: 'Partner 4' },
    { src: '/path/to/logo5.png', alt: 'Partner 5' },
];



const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const formNavigationRef = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    const tl = gsap.timeline({
      defaults: {
        ease: 'power3.out',
      }
    });

    // Content and logo animation from bottom with stagger
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

    // Form navigation animation from bottom
    tl.from(formNavigationRef.current, {
      y: 100,
      opacity: 0,
      duration: 1,
    }, '-=0.5');
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className='w-full h-screen mx-auto px-4 sm:px-6 lg:px-0 lg:pt-16 flex overflow-hidden'>
      <div className='h-full w-full'> 
        <div className='w-full h-[70%] grid grid-cols-2 gap-8'>
            <div ref={contentRef} className='flex flex-col justify-center w-[80%] ms-auto'>
                <h1 className='xl:text-[4rem] font-bold leading-[1] mb-6' >
                    Premium
                    <br />
                    Chauffeur Driven
                    <br />
                    Car Services
                </h1>
                <div  className='max-w-md mt-4'>
                    <LogoMarquee  className="" />
                </div>
            </div>
            <div className='relative overflow-hidden flex items-center justify-end w-full m-12'>
                <img 
                    ref={imageRef}
                    src="/hero.png" 
                    alt="Premium Porsche Car" 
                    className='w-fit h-full object-cover transform object-left'
                />
            </div>
        </div>
        <div className='w-full h-[30%] flex items-center justify-center' ref={formNavigationRef}>
            <TabNavigation />
        </div>
      </div>
    </div>
  )
}

export default Hero