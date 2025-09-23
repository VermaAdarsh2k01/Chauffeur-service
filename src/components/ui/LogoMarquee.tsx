import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

// Register GSAP plugin
gsap.registerPlugin(useGSAP);


export function LogoMarquee({ className }: { className: string }) {
  const containerMarqueeRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    // Clone the content for seamless loop
    const clone = marquee.cloneNode(true);
    marquee.parentElement?.appendChild(clone);

    // Create the infinite animation
    const tl = gsap.timeline({ repeat: -1 })
      .to(marquee.parentElement, {
        x: -marquee.offsetWidth,
        duration: 10,
        ease: "none",
      });

    // Hover effects
    const handleMouseEnter = () => {
      gsap.to(tl, { timeScale: 0, duration: 0.5 });
    };

    const handleMouseLeave = () => {
      gsap.to(tl, { timeScale: 1, duration: 0.5 });
    };

    const container = containerMarqueeRef.current;
    if (container) {
      container.addEventListener('mouseenter', handleMouseEnter);
      container.addEventListener('mouseleave', handleMouseLeave);
    }

    // Cleanup is handled automatically by useGSAP
  }, { scope: containerMarqueeRef }); // Scope the animation to our container

  return (
    <div ref={containerMarqueeRef} className={`relative w-full overflow-hidden ${className}`}>
      {/* Gradient Overlays */}
      <div className="absolute w-24 h-full left-0 top-0 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none" />
      <div className="absolute w-24 h-full right-0 top-0 z-10 bg-gradient-to-l from-[#EEF7F0] to-transparent pointer-events-none" />
      
      {/* Marquee Container */}
      <div className="flex">
        {/* First set of logos */}
        <div ref={marqueeRef} className="flex items-center gap-4 px-4">
          <div className="flex items-center justify-center w-32">
            <img src="/porsche.png" alt="Mercedes Logo" className="h-12 w-32 object-contain" />
          </div>
          <div className="flex items-center justify-center w-32">
            <img src="/merc.png" alt="Audi Logo" className="h-12 w-32 object-contain" />
          </div>
          <div className="flex items-center justify-center w-32">
            <img src="/bmw.png" alt="BMW Logo" className="h-12 w-32 object-contain" />
          </div>
          <div className="flex items-center justify-center w-32">
            <img src="/audi.png" alt="Porsche Logo" className="h-12 w-32 object-contain" />
          </div>
          <div className="flex items-center justify-center w-32">
            <img src="/toy.png" alt="Fortuner Logo" className="h-12 w-32 object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
}