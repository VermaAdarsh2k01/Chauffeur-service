import React, { useRef } from "react";
import { LogoMarquee } from "./ui/LogoMarquee";
import TabNavigation from "./TabNavigation";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

// Example logos - replace these with your actual logo paths
const partnerLogos = [
  { src: "/path/to/logo1.png", alt: "Partner 1" },
  { src: "/path/to/logo2.png", alt: "Partner 2" },
  { src: "/path/to/logo3.png", alt: "Partner 3" },
  { src: "/path/to/logo4.png", alt: "Partner 4" },
  { src: "/path/to/logo5.png", alt: "Partner 5" },
];

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const formNavigationRef = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      // Content and logo animation from bottom with stagger
      tl.from([contentRef.current], {
        y: 100,
        opacity: 0,
        duration: 1,
      });

      // Image animation from right
      tl.from(
        imageRef.current,
        {
          x: 200,
          opacity: 0,
          duration: 1,
        },
        "-=0.5"
      );

      // Form navigation animation from bottom
      tl.from(
        formNavigationRef.current,
        {
          y: 100,
          opacity: 0,
          duration: 1,
        },
        "-=0.5"
      );
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="relative w-full min-h-screen mx-auto px-4 sm:px-6 lg:px-0 lg:pt-16 flex overflow-hidden"
    >
      {/* Pattern Background */}
      <div className="absolute top-0 left-0 -z-10 w-[168%] h-full">
        <img
          src="/patternBg.png"
          alt="pattern"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Gradient Background */}
      <div className="absolute w-full lg:w-[71%] aspect-[0.618/1] opacity-20 top-0 lg:-bottom-[36px] right-[14%] -z-10 rotate-[-157deg]">
        {/* Purple Gradient */}
        <div className="absolute w-[40%] aspect-[0.325/1] bg-[#a5a2ff] rounded-full blur-[200px] left-[138px] top-[31px] rotate-12"></div>
        {/* Green Gradient */}
        <div className="absolute w-[40%] aspect-[0.572/1] bg-[#29c775] rounded-full blur-[200px] left-[222px] top-[208px]"></div>
        {/* Yellow Gradient */}
        <div className="absolute w-[40%] aspect-[0.571/1] bg-[#ffe74b] rounded-full blur-[200px] left-[436px] top-[340px]"></div>
      </div>

      <div className="h-full w-full relative flex flex-col">
        {/* Mobile-first responsive layout */}
        <div className="flex-1 flex flex-col lg:grid lg:grid-cols-2 lg:gap-8 lg:h-[70%]">
          {/* Content Section */}
          <div
            ref={contentRef}
            className="flex flex-col justify-center px-2 sm:px-4 lg:w-[80%] lg:ms-auto pt-16 pb-8 lg:pt-0 lg:pb-0"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[4rem] font-bold leading-tight lg:leading-[1] mb-4 lg:mb-6 text-center lg:text-left">
              Premium
              <br />
              Chauffeur Driven
              <br />
              Car Services
            </h1>
            <div className="max-w-md mt-4 mx-auto lg:mx-0">
              <LogoMarquee className="" />
            </div>
          </div>

          {/* Image Section */}
          <div className="relative overflow-hidden flex items-center justify-center lg:justify-end w-full h-64 sm:h-80 lg:h-full lg:m-12 order-first lg:order-last">
            <img
              ref={imageRef}
              src="/hero2.png"
              alt="Premium Porsche Car"
              className="w-full h-full lg:w-fit lg:h-full object-cover lg:object-left"
            />
          </div>
        </div>

        {/* Form Section */}
        <div
          className="w-full lg:h-[30%] flex items-center justify-center py-8 lg:py-0"
          ref={formNavigationRef}
        >
          <TabNavigation />
        </div>
      </div>
    </div>
  );
};

export default Hero;
