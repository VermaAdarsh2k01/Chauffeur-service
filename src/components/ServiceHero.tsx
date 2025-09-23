import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

interface ServiceHeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  backgroundImage?: string;
}

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
    'bottom-left': '-bottom-6 -left-12',
    'bottom-right': '-bottom-8 -right-8'
  };

  const colorSchemes = {
    green: 'bg-green-100 text-green-600',
    blue: 'bg-blue-100 text-blue-600',
    purple: 'bg-purple-100 text-purple-600',
    orange: 'bg-orange-100 text-orange-600',
    yellow: 'bg-yellow-100 text-yellow-600'
  };

  return (
    <div className={`absolute ${positionClasses[position]} bg-white/25 backdrop-blur-lg rounded-2xl p-4 shadow-lg border border-gray-100 hover:scale-105 transition-transform duration-300`}>
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

const ServiceHero: React.FC<ServiceHeroProps> = ({ 
  title, 
  subtitle, 
  description, 
  backgroundImage = "/hero2.png" 
}) => {
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
    <div ref={containerRef} className='relative w-full h-screen mx-auto px-4 sm:px-6 lg:px-0 lg:pt-16 flex overflow-hidden'>
      
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

      <div className='h-full w-full relative flex flex-col justify-center items-center'> 
        <div ref={contentRef} className='text-center z-10 mb-8'>
          {subtitle && (
            <p className='text-lg text-gray-600  uppercase tracking-wider'>
              {subtitle}
            </p>
          )}
          <h1 className='lg:text-[4rem] font-bold leading-[1] mb-6'>
            {title}
          </h1>
          {description && (
            <p className='text-lg text-gray-700 max-w-2xl leading-relaxed mx-auto'>
              {description}
            </p>
          )}
        </div>
         <div className='relative w-full max-w-5xl h-64 lg:h-80  rounded-2xl'>
            <img 
              ref={imageRef}
              src={backgroundImage} 
              alt="Service Hero" 
              className='w-[80%] mx-auto h-full object-contain '
            />
            
            {/* Floating Metrics */}
            {/* <MetricCard
              position="top-left"
              icon={
                <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' />
                </svg>
              }
              label="Bookings Complete"
              value="2,847"
              colorScheme="green"
            /> */}

            <MetricCard
              position="top-right"
              icon={
                <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 7h8m0 0v8m0-8l-8 8-4-4-6 6' />
                </svg>
              }
              label="Customer Rating"
              value="4.9/5"
              colorScheme="yellow"
            />

            <MetricCard
              position="bottom-left"
              icon={
                <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' />
                </svg>
              }
              label="On-Time Arrivals"
              value="98%"
              colorScheme="blue"
            />

            {/* <MetricCard
              position="bottom-right"
              icon={
                <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' />
                </svg>
              }
              label="Happy Customers"
              value="15K+"
              colorScheme="orange"
            /> */}
          </div>
          <div className='mt-8 text-white bg-black rounded-full font-semibold text-lg px-6 py-2'>
              Book Now
          </div>
      </div>
    </div>
  );
};

export default ServiceHero;
