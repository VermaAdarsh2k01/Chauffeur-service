import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

// Register GSAP plugin
gsap.registerPlugin(useGSAP);

export function LogoMarquee({ className }: { className: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
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
        duration: 20,
        ease: "none",
      });

    // Hover effects
    const handleMouseEnter = () => {
      gsap.to(tl, { timeScale: 0, duration: 0.5 });
    };

    const handleMouseLeave = () => {
      gsap.to(tl, { timeScale: 1, duration: 0.5 });
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mouseenter', handleMouseEnter);
      container.addEventListener('mouseleave', handleMouseLeave);
    }

    // Cleanup is handled automatically by useGSAP
  }, { scope: containerRef }); // Scope the animation to our container

  return (
    <div ref={containerRef} className={`relative w-full overflow-hidden ${className}`}>
      {/* Gradient Overlays */}
      <div className="absolute w-24 h-full left-0 top-0 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none" />
      <div className="absolute w-24 h-full right-0 top-0 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none" />
      
      {/* Marquee Container */}
      <div className="flex">
        {/* First set of logos */}
        <div ref={marqueeRef} className="flex items-center gap-16 px-4">
          <div className="flex items-center justify-center">
            <img src="/path/to/logo4.png" alt="Logo 4" className="h-12 w-auto" />
          </div>
          <div className="flex items-center justify-center">
            <img src="/path/to/logo2.png" alt="Logo 2" className="h-12 w-auto" />
          </div>
          <div className="flex items-center justify-center">
            <img src="/path/to/logo3.png" alt="Logo 3" className="h-12 w-auto" />
          </div>
          <div className="flex items-center justify-center">
            <img src="/path/to/logo3.png" alt="Logo 3" className="h-12 w-auto" />
          </div>
          <div className="flex items-center justify-center">
            <img src="/path/to/logo5.png" alt="Logo 5" className="h-12 w-auto" />
          </div>
        </div>
      </div>
    </div>
  );
}