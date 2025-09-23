import React from 'react';

const Advantage: React.FC = () => {
  return (
    <section className="w-full  my-16 px-4 ">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center my-4">Experience the Elite Drive Advantage</h2>
        
        <div className="flex justify-center">
          <div className="w-full">
            <div className="flex flex-wrap xl:flex-nowrap gap-6 justify-center w-full">
              {/* Left Column */}
              <div className="w-full xl:w-1/3 min-h-full flex flex-col md:flex-row xl:flex-col justify-between gap-2">
                <img 
                  src="/about-hero2.png"
                  alt="Team meeting"
                  className="object-cover w-full md:w-1/2 xl:w-full rounded-2xl h-[55%]"
                  width={364}
                  height={300}
                />
                <div className="bg-gray-100 rounded-2xl flex flex-col p-8 w-full md:w-1/2 xl:w-full h-[40%]">
                  <h3 className="text-6xl font-bold text-emerald-700 mb-2">10K+</h3>
                  <p className="mb-6">Premium Rides Completed</p>
                  <p>Experience luxury and comfort with our professional chauffeur service across the city.</p>
                </div>
              </div>

              {/* Middle Column */}
              <div className="w-full xl:w-1/3 relative">
                <div 
                  className="bg-cover bg-center rounded-2xl shadow-sm h-full relative overflow-hidden"
                  style={{
                    backgroundImage: "url('/lang.jpg')",
                    minHeight: "400px"
                  }}
                >
                  {/* Content overlay positioned at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="bg-white p-6 rounded-2xl shadow-lg">
                      {/* Logo */}
                      <div className="flex items-center gap-2 mb-4">
                        <img 
                          src="/logo.png"
                          alt="Company Logo"
                          className="w-8 h-8 object-contain"
                        />
                        <span className="font-bold text-gray-800">JK Travels</span>
                      </div>
                      
                      {/* Testimonial content */}
                      <div>
                        <p className="text-gray-800 mb-4 leading-relaxed">We believe in giving our curstomers the premium experience they deserve.</p>
                        <div>
                          <p className="font-semibold text-gray-900">Jessica Lubahn,</p>
                          <p className="text-sm text-gray-500">JK Travels CEO</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="w-full xl:w-1/3 min-h-full flex flex-col md:flex-row xl:flex-col justify-between gap-6">
                <div className="bg-gray-100 rounded-2xl flex flex-col p-8 w-full md:w-1/2 xl:w-full h-auto">
                   <h3 className="text-6xl font-bold text-emerald-700 mb-2">100%</h3>
                  <p className="mb-6">On-Time Arrivals</p>
                  <p>Our professional chauffeurs ensure punctual service with real-time tracking and route optimization.</p>
                </div>
                <img 
                  src="/about-hero2.png"
                  alt="Customer service"
                  className="object-cover w-full md:w-1/2 xl:w-full rounded-2xl h-[55%]"
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
