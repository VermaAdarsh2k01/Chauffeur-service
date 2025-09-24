import React, { useRef } from "react";
import { LogoMarquee } from "./ui/LogoMarquee";
import TabNavigation from "./TabNavigation";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

type HeroData = {
  mainHeading?: string[];
  description?: string;
  heroImage?: {
    src: string | { asset: { _ref: string } };
    alt: string;
  };
  partnerLogos?: {
    src: string | { asset: { _ref: string } };
    alt: string;
  }[];
};

interface HeroProps {
  data?: HeroData;
}

// Default/fallback data
const defaultPartnerLogos = [
  { src: "/path/to/logo1.png", alt: "Partner 1" },
  { src: "/path/to/logo2.png", alt: "Partner 2" },
  { src: "/path/to/logo3.png", alt: "Partner 3" },
  { src: "/path/to/logo4.png", alt: "Partner 4" },
  { src: "/path/to/logo5.png", alt: "Partner 5" },
];

const Hero = ({ data }: HeroProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const formNavigationRef = useRef<HTMLDivElement>(null);

  // Helper function to get image source
  const getImageSrc = (image: string | { asset: { _ref: string } } | undefined): string => {
    if (!image) return '/hero2.png'; // fallback
    return typeof image === 'string' ? image : '/hero2.png'; // fallback if Sanity object
  };

  // Helper function to process partner logos
  const processPartnerLogos = (logos: HeroData['partnerLogos']): Array<{ src: string; alt: string }> => {
    if (!logos || logos.length === 0) return defaultPartnerLogos;
    return logos.map(logo => ({
      src: getImageSrc(logo.src),
      alt: logo.alt
    }));
  };
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
          x: 100,
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

  // Use dynamic data or fallback to defaults
  const mainHeading = data?.mainHeading || ['Premium', 'Chauffeur Driven', 'Car Services'];
  const description = data?.description || 'Experience luxury travel with our professional chauffeur services. Reliable, comfortable, and tailored to your needs.';
  const heroImageSrc = getImageSrc(data?.heroImage?.src);
  const heroImageAlt = data?.heroImage?.alt || 'Premium Porsche Car';
  const partnerLogos = processPartnerLogos(data?.partnerLogos);

  return (
    <div
      ref={containerRef}
      className="relative w-full min-h-screen mx-auto px-4 py-2 sm:px-6 lg:px-0 lg:pt-16 flex overflow-hidden"
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
            className="flex flex-col justify-center px-2 sm:px-4 lg:w-[80%] lg:ms-auto pt-8 sm:pt-12 lg:pt-8 pb-4 sm:pb-6 lg:pb-0"
          >
            <h1 className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight lg:leading-[1.1] mb-3 lg:mb-4 text-center lg:text-left">
              {mainHeading.map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  {index < mainHeading.length - 1 && <br />}
                </React.Fragment>
              ))}
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-4 lg:mb-6 text-center lg:text-left max-w-lg mx-auto lg:mx-0">
              {description}
            </p>
            <div className="max-w-md mt-4 mx-auto lg:mx-0">
              <LogoMarquee className="" />
            </div>
          </div>

          {/* Image Section */}
          <div className="relative overflow-hidden flex items-center justify-center w-full h-fit sm:h-96 lg:h-full lg:m-12 order-first lg:order-last pt-24 sm:pt-6 lg:pt-0 pb-2 sm:pb-4 lg:pb-0">
            <img
              ref={imageRef}
              src={heroImageSrc}
              alt={heroImageAlt}
              className="w-full h-full lg:w-auto lg:h-auto lg:max-w-full lg:max-h-full object-contain sm:object-cover lg:object-center"
            />
          </div>
        </div>

        {/* Form Section */}
        <div
          className="w-full lg:h-[30%] flex items-end justify-center py-4 sm:py-6 lg:py-0 lg:pb-16 xl:pt-12"
          ref={formNavigationRef}
        >
          <TabNavigation />
        </div>
      </div>
    </div>
  );
};

export default Hero;
