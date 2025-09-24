import React from 'react';

type AdvantageData = {
  sectionTitle?: string;
  leftColumn?: {
    image?: {
      src: string;
      alt: string;
    };
    statistic?: {
      value: string;
      label: string;
      description: string;
    };
  };
  middleColumn?: {
    backgroundImage?: {
      src: string;
      alt: string;
    };
    testimonial?: {
      companyLogo?: {
        src: string;
        alt: string;
      };
      companyName: string;
      quote: string;
      authorName: string;
      authorTitle: string;
    };
  };
  rightColumn?: {
    statistic?: {
      value: string;
      label: string;
      description: string;
    };
    image?: {
      src: string;
      alt: string;
    };
  };
};

interface AdvantageProps {
  data?: AdvantageData;
}

const Advantage: React.FC<AdvantageProps> = ({ data }) => {
  // Use dynamic data or fallback to defaults
  const sectionTitle = data?.sectionTitle || "Experience the Elite Drive Advantage";
  const leftImage = data?.leftColumn?.image || { src: "/about-hero2.png", alt: "Team meeting" };
  const leftStatistic = data?.leftColumn?.statistic || {
    value: "10K+",
    label: "Premium Rides Completed",
    description: "Experience luxury and comfort with our professional chauffeur service across the city."
  };
  const middleBackgroundImage = data?.middleColumn?.backgroundImage || { src: "/lang.jpg", alt: "Background" };
  const testimonial = data?.middleColumn?.testimonial || {
    companyLogo: { src: "/Logo.jpg", alt: "Company Logo" },
    companyName: "JK Travels",
    quote: "We believe in giving our customers the premium experience they deserve.",
    authorName: "Jessica Lubahn",
    authorTitle: "JK Travels CEO"
  };
  const rightStatistic = data?.rightColumn?.statistic || {
    value: "100%",
    label: "On-Time Arrivals",
    description: "Our professional chauffeurs ensure punctual service with real-time tracking and route optimization."
  };
  const rightImage = data?.rightColumn?.image || { src: "/about-hero2.png", alt: "Customer service" };

  return (
    <section className="w-full  my-16 px-4 ">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center my-4">{sectionTitle}</h2>
        
        <div className="flex justify-center">
          <div className="w-full">
            <div className="flex flex-wrap xl:flex-nowrap gap-6 justify-center w-full">
              {/* Left Column */}
              <div className="w-full xl:w-1/3 min-h-full flex flex-col md:flex-row xl:flex-col justify-between gap-2">
                <img 
                  src={leftImage.src}
                  alt={leftImage.alt}
                  className="object-cover w-full md:w-1/2 xl:w-full rounded-2xl h-[300px] md:h-[55%] xl:h-[55%]"
                  width={364}
                  height={300}
                />
                <div className="bg-gray-100 rounded-2xl flex flex-col p-8 w-full md:w-1/2 xl:w-full h-auto md:h-[40%] xl:h-[40%]">
                  <h3 className="text-6xl font-bold text-emerald-700 mb-2">{leftStatistic.value}</h3>
                  <p className="mb-6">{leftStatistic.label}</p>
                  <p>{leftStatistic.description}</p>
                </div>
              </div>

              {/* Middle Column */}
              <div className="w-full xl:w-1/3 relative">
                <div 
                  className="bg-cover bg-center rounded-2xl shadow-sm h-full relative overflow-hidden"
                  style={{
                    backgroundImage: `url('${middleBackgroundImage.src}')`,
                    minHeight: "400px"
                  }}
                >
                  {/* Content overlay positioned at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="bg-white p-6 rounded-2xl shadow-lg">
                      {/* Logo */}
                      <div className="flex items-center gap-2 mb-4">
                        <img 
                          src={testimonial.companyLogo?.src || "/Logo.jpg"}
                          alt={testimonial.companyLogo?.alt || "Company Logo"}
                          className="w-8 h-8 object-contain"
                        />
                        <span className="font-bold text-gray-800">{testimonial.companyName}</span>
                      </div>
                      
                      {/* Testimonial content */}
                      <div>
                        <p className="text-gray-800 mb-4 leading-relaxed">{testimonial.quote}</p>
                        <div>
                          <p className="font-semibold text-gray-900">{testimonial.authorName},</p>
                          <p className="text-sm text-gray-500">{testimonial.authorTitle}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="w-full xl:w-1/3 min-h-full flex flex-col md:flex-row xl:flex-col justify-between gap-6">
                <div className="bg-gray-100 rounded-2xl flex flex-col p-8 w-full md:w-1/2 xl:w-full h-auto min-h-[200px]">
                   <h3 className="text-6xl font-bold text-emerald-700 mb-2">{rightStatistic.value}</h3>
                  <p className="mb-6">{rightStatistic.label}</p>
                  <p>{rightStatistic.description}</p>
                </div>
                <img 
                  src={rightImage.src}
                  alt={rightImage.alt}
                  className="object-cover w-full md:w-1/2 xl:w-full rounded-2xl h-[300px] md:h-[55%] xl:h-[55%]"
                  width={364}
                  height={312}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantage;
