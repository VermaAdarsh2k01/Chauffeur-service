import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger only on the client side
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type ServiceHighlightsData = {
  subtitle?: string;
  sectionTitle?: string;
  leftColumn?: {
    title: string;
    description: string;
    image?: {
      src: string;
      alt: string;
    };
  };
  middleColumn?: {
    topRow: {
      title: string;
      description: string;
      image?: {
        src: string;
        alt: string;
      };
    };
    bottomRow: {
      title: string;
      description: string;
      statistics: {
        leftStat: {
          value: string;
          label: string;
        };
        rightStat: {
          value: string;
          label: string;
        };
      };
    };
  };
  rightColumn?: {
    title: string;
    description: string;
    image?: {
      src: string;
      alt: string;
    };
  };
};

interface ServiceHighlightsProps {
  data?: ServiceHighlightsData;
}

export default function ServiceHighlights({ data }: ServiceHighlightsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const counter1Ref = useRef<HTMLDivElement>(null);
  const counter2Ref = useRef<HTMLDivElement>(null);
  const image1Ref = useRef<HTMLImageElement>(null);
  const image2Ref = useRef<HTMLImageElement>(null);

  useGSAP(
    () => {
      if (!counter1Ref.current || !counter2Ref.current) return;

      // Get all images
      const images = [image1Ref.current, image2Ref.current].filter(Boolean);

      // Set initial scale
      gsap.set(images, { scale: 1.1 });

      // Get dynamic counter values
      const leftStatValue = parseInt(data?.middleColumn?.bottomRow?.statistics?.leftStat?.value || "10");
      const rightStatValue = parseInt(data?.middleColumn?.bottomRow?.statistics?.rightStat?.value || "100");

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
            ease: "power2.out",
          });

          // Counter animations with dynamic values
          gsap.to(counter1Ref.current, {
            duration: 2,
            innerText: leftStatValue,
            snap: { innerText: 1 },
            ease: "power2.out",
          });
          gsap.to(counter2Ref.current, {
            duration: 2,
            innerText: rightStatValue,
            snap: { innerText: 1 },
            ease: "power2.out",
          });
        },
      });
    },
    { scope: containerRef, dependencies: [data] }
  );

  // Use dynamic data or fallback to defaults
  const subtitle = data?.subtitle || "We Believe in Premium Experience";
  const sectionTitle = data?.sectionTitle || "We Believe in Premium Experience";
  
  // Column data with fallbacks
  const leftColumn = data?.leftColumn || {
    title: "Luxury Fleet",
    description: "Experience the epitome of luxury with our premium collection of high-end vehicles, from sleek sports cars to elegant sedans.",
    image: { src: "/chauffeur.jpg", alt: "Luxury car fleet" }
  };
  
  const middleColumn = data?.middleColumn || {
    topRow: {
      title: "24/7 Support",
      description: "Round-the-clock assistance for all your rental needs, including roadside support and concierge services.",
      image: undefined
    },
    bottomRow: {
      title: "Verified Expert Drivers",
      description: "Experienced drivers with 10+ years on road and complete police verification, ensuring your safety at every turn.",
      statistics: {
        leftStat: { value: "10", label: "Years Experience" },
        rightStat: { value: "100", label: "Verified Drivers" }
      }
    }
  };
  
  const rightColumn = data?.rightColumn || {
    title: "No Language Barrier",
    description: "Our chauffeurs and staff are fluent in English, Hindi, Marathi, Telugu, and Tamil, ensuring smooth communication throughout your journey.",
    image: { src: "/lang.jpg", alt: "Digital platform interface" }
  };

  return (
    <div className="py-0" ref={containerRef}>
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-center text-base/7 font-semibold text-slate-700">
          {subtitle}
        </h2>
        <p className="mx-auto mt-2 max-w-lg text-center text-2xl sm:text-4xl font-semibold tracking-tight text-balance text-black dark:text-white lg:text-5xl">
          {sectionTitle}
        </p>
        <div className="mt-6 sm:mt-10 lg:mt-16 grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2">
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-gray-200 lg:rounded-l-4xl" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
              <div className="px-4 sm:px-8 lg:px-10 pt-6 sm:pt-8 lg:pt-10 pb-3 sm:pb-3 lg:pb-0">
                <p className="mt-2 text-lg sm:text-xl lg:text-lg xl:text-3xl font-medium lg:font-medium xl:font-bold tracking-tight text-black text-center lg:text-left">
                  {leftColumn.title}
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-black text-center lg:text-left">
                  {leftColumn.description}
                </p>
              </div>
              <div className="relative min-h-[250px] sm:min-h-[300px] lg:min-h-[400px] w-full grow overflow-hidden">
                <div className="absolute inset-0 w-full h-full">
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-200 via-transparent/40 to-transparent z-10"></div>
                  <img
                    ref={image1Ref}
                    alt={leftColumn.image?.alt || "Luxury car fleet"}
                    src={leftColumn.image?.src || "/chauffeur.jpg"}
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
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] md:rounded-t-[calc(2rem+1px)] lg:rounded-t-[calc(var(--radius-lg)+1px)]">
              <div className="px-4 sm:px-8 lg:px-10 pt-6 sm:pt-8 lg:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-white text-center lg:text-left">
                  {middleColumn.topRow.title}
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-400 text-center lg:text-left">
                  {middleColumn.topRow.description}
                </p>
              </div>
              <div className="flex flex-1 items-center justify-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2">
                <div className="w-full max-lg:max-w-xs flex items-center justify-center">
                  {middleColumn.topRow.image?.src ? (
                    <img
                      src={middleColumn.topRow.image.src}
                      alt={middleColumn.topRow.image.alt || "Service illustration"}
                      className="w-full h-auto max-w-[280px] max-h-[200px] object-contain"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full max-w-[280px] h-[200px] bg-gray-700 rounded-lg flex items-center justify-center">
                      <span className="text-gray-400 text-sm">No image available</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-white/15 max-lg:rounded-t-4xl" />
          </div>

          <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
            <div className="absolute inset-px rounded-lg bg-gray-800" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
              <div className="px-4 sm:px-8 lg:px-10 pt-6 sm:pt-8 lg:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-white text-center lg:text-left">
                  {middleColumn.bottomRow.title}
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-400 text-center lg:text-left">
                  {middleColumn.bottomRow.description}
                </p>
              </div>
              <div className="flex flex-1 items-center justify-between gap-4 sm:gap-8 py-6 sm:py-8 px-4 sm:px-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">
                    <span ref={counter1Ref}>0</span>
                    <span>+</span>
                  </div>
                  <div className="text-sm text-gray-400">{middleColumn.bottomRow.statistics.leftStat.label}</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">
                    <span ref={counter2Ref}>0</span>
                    <span>+</span>
                  </div>
                  <div className="text-sm text-gray-400">{middleColumn.bottomRow.statistics.rightStat.label}</div>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-white/15" />
          </div>

          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-gray-200 max-lg:rounded-b-4xl lg:rounded-r-4xl" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] md:rounded-b-[calc(2rem+1px)] lg:rounded-b-[calc(var(--radius-lg)+1px)] lg:rounded-r-[calc(2rem+1px)]">
              <div className="px-4 sm:px-8 lg:px-10 pt-6 sm:pt-8 lg:pt-10 pb-3 sm:pb-3 lg:pb-0">
                <p className="mt-2 text-lg sm:text-xl lg:text-lg xl:text-3xl font-medium lg:font-medium xl:font-bold tracking-tight text-black text-center lg:text-left">
                  {rightColumn.title}
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-black text-center lg:text-left">
                  {rightColumn.description}
                </p>
              </div>
              <div className="relative min-h-[250px] sm:min-h-[300px] lg:min-h-[400px] w-full grow overflow-hidden">
                <div className="absolute inset-0 w-full h-full">
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-200 via-transparent/40 to-transparent z-10"></div>
                  <img
                    ref={image2Ref}
                    alt={rightColumn.image?.alt || "Digital platform interface"}
                    src={rightColumn.image?.src || "/lang.jpg"}
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
