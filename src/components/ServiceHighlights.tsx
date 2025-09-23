import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger only on the client side
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}
export default function ServiceHighlights() {
  const containerRef = useRef<HTMLDivElement>(null);
  const counter1Ref = useRef<HTMLDivElement>(null);
  const counter2Ref = useRef<HTMLDivElement>(null);
  const image1Ref = useRef<HTMLImageElement>(null);
  const image2Ref = useRef<HTMLImageElement>(null);

  useGSAP(() => {
    if (!counter1Ref.current || !counter2Ref.current) return;

    // Get all images
    const images = [image1Ref.current, image2Ref.current].filter(Boolean);
    
    // Set initial scale
    gsap.set(images, { scale: 1.1 });

    // Create single scroll trigger for both animations
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "40% 40%",
      once: true,
      toggleActions: "play none none reverse",
      onEnter: () => {
        // Image scale animation
        gsap.to(images, {
          scale: 1,
          duration: 1,
          ease: "power2.out"
        });

        // Counter animations
        gsap.to(counter1Ref.current, {
          duration: 2,
          innerText: 10,
          snap: { innerText: 1 },
          ease: "power2.out",
        });
        gsap.to(counter2Ref.current, {
          duration: 2,
          innerText: 100,
          snap: { innerText: 1 },
          ease: "power2.out",
        });
      }
    });
    
  }, { scope: containerRef });
  return (
    <div className=" py-24 sm:py-0 " ref={containerRef}>
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-center text-base/7 font-semibold text-slate-700">We Believe in Premium Experience</h2>
        <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance text-black dark:text-white sm:text-5xl">
            We Believe in Premium Experience
        </p>
        <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-gray-200 lg:rounded-l-4xl" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                <p className="mt-2 text-lg xl:text-3xl xl:font-bold font-medium tracking-tight text-black max-lg:text-center">Luxury Fleet</p>
                <p className="mt-2 max-w-lg text-sm/6 text-black max-lg:text-center">
                  Experience the epitome of luxury with our premium collection of high-end vehicles, from sleek sports cars to elegant sedans.
                </p>
              </div>
              <div className="relative min-h-[400px] w-full grow overflow-hidden">
                <div className="absolute inset-0 w-full h-full">
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-200 via-transparent/40 to-transparent z-10"></div>
                  <img
                    ref={image1Ref}
                    alt="Luxury car fleet"
                    src="/chauffeur.jpg"
                    className="w-full h-full object-cover object-center transform hover:scale-125"
                    loading="lazy"
                    />
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-white/15 lg:rounded-l-4xl" />
          </div>
          
          <div className="relative max-lg:row-start-1">
            <div className="absolute inset-px rounded-lg bg-gray-800 max-lg:rounded-t-4xl" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-white max-lg:text-center">24/7 Support</p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-400 max-lg:text-center">
                  Round-the-clock assistance for all your rental needs, including roadside support and concierge services.
                </p>
              </div>
              <div className="flex flex-1 items-center justify-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2">
                <img
                  alt="24/7 Support illustration"
                  src="/support-illustration.png"
                  className="w-full max-lg:max-w-xs"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-white/15 max-lg:rounded-t-4xl" />
          </div>

          <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
            <div className="absolute inset-px rounded-lg bg-gray-800" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-white max-lg:text-center">Verified Expert Drivers</p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-400 max-lg:text-center">
                  Experienced drivers with 10+ years on road and complete police verification, ensuring your safety at every turn.
                </p>
              </div>
              <div className="flex flex-1 items-center justify-between gap-8 py-8 px-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">
                    <span ref={counter1Ref}>0</span><span>+</span>
                  </div>
                  <div className="text-sm text-gray-400">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">
                    <span ref={counter2Ref}>0</span><span>+</span>
                  </div>
                  <div className="text-sm text-gray-400">Verified Drivers</div>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-white/15" />
          </div>

          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-gray-200 max-lg:rounded-b-4xl lg:rounded-r-4xl" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                <p className="mt-2 text-lg xl:text-3xl xl:font-bold font-medium tracking-tight text-black max-lg:text-center">No Language Barrier</p>
                  <p className="mt-2 max-w-lg text-sm/6 text-black max-lg:text-center">
                    Our chauffeurs and staff are fluent in English, Hindi, Marathi, Telugu, and Tamil, ensuring smooth communication throughout your journey.
                  </p>
              </div>
              <div className="relative min-h-[400px] w-full grow overflow-hidden">
                <div className="absolute inset-0 w-full h-full">
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-200 via-transparent/40 to-transparent z-10"></div>
                  <img
                    ref={image2Ref}
                    alt="Digital platform interface"
                    src="/lang.jpg"
                    className="w-full h-full object-cover object-center transform hover:scale-125"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-white/15 max-lg:rounded-b-4xl lg:rounded-r-4xl" />
          </div>
        </div>
      </div>
    </div>
  );
}
