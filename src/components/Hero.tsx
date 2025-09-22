import React from 'react';
import { LogoMarquee } from './ui/LogoMarquee';
import TabNavigation from './TabNavigation';

// Example logos - replace these with your actual logo paths
const partnerLogos = [
    { src: '/path/to/logo1.png', alt: 'Partner 1' },
    { src: '/path/to/logo2.png', alt: 'Partner 2' },
    { src: '/path/to/logo3.png', alt: 'Partner 3' },
    { src: '/path/to/logo4.png', alt: 'Partner 4' },
    { src: '/path/to/logo5.png', alt: 'Partner 5' },
];

const Hero = () => {
  return (
    <div className='max-w-7xl h-screen mx-auto px-4 sm:px-6 lg:px-8 lg:pt-16 flex'>
      <div className='h-full w-full'> 
        <div className='w-full h-[70%] grid grid-cols-2 gap-8'>
            <div className='flex flex-col justify-center'>
                <h1 className='text-6xl font-bold leading-[1] mb-6' >
                    Premium
                    <br />
                    Chauffeur Driven
                    <br />
                    Car Services
                </h1>
                <div className='max-w-md'>
                    <LogoMarquee  className="" />
                </div>
            </div>
            <div className='relative'>
                <img 
                    src="/hero.png" 
                    alt="Premium Porsche Car" 
                    className='w-full h-full object-contain'
                />
            </div>
        </div>
        <div className='w-full h-[30%] flex items-center justify-center'>
            <TabNavigation />
        </div>
      </div>
    </div>
  )
}

export default Hero