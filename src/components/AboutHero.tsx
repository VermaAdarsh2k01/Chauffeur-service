import React from 'react';

type AboutHeroData = {
  title?: string;
  description?: string;
  images?: {
    primaryImage?: {
      src: string;
      alt: string;
    };
    secondaryImage?: {
      src: string;
      alt: string;
    };
  };
};

interface AboutHeroProps {
  data?: AboutHeroData;
}

const AboutHero = ({ data }: AboutHeroProps) => {
  // Use dynamic data or fallback to defaults
  const title = data?.title || "Your Comfort is Our Priority";
  const description = data?.description || "At Car Rentals, we believe that renting a car should be effortless and empowering. Founded with a mission to simplify car rental management.";
  const primaryImage = data?.images?.primaryImage || { src: "/about-hero.png", alt: "Team meeting in modern office space" };
  const secondaryImage = data?.images?.secondaryImage || { src: "/about-hero2.png", alt: "Customer service representative helping clients" };

  return (
    <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto min-h-[80vh] md:min-h-screen pt-24" >
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">{title}</h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          {description}
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-[60%] rounded-2xl overflow-hidden shadow-lg">
          <img 
            src={primaryImage.src} 
            alt={primaryImage.alt} 
            className="w-full h-[400px] object-cover"
          />
        </div>
        <div className="md:w-[40%] rounded-2xl overflow-hidden shadow-lg">
          <img 
            src={secondaryImage.src} 
            alt={secondaryImage.alt} 
            className="w-full h-[400px] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
