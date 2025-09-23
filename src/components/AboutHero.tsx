import React from 'react';

const AboutHero = () => {
  return (
    <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto h-screen pt-24" >
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Your Comfort is Our Priority</h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          At Car Rentals, we believe that renting a car should be effortless and empowering. Founded with a
          mission to simplify car rental management.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-[60%] rounded-2xl overflow-hidden shadow-lg">
          <img 
            src="/about-hero.png" 
            alt="Team meeting in modern office space" 
            className="w-full h-[400px] object-cover"
          />
        </div>
        <div className="md:w-[40%] rounded-2xl overflow-hidden shadow-lg">
          <img 
            src="/about-hero2.png" 
            alt="Customer service representative helping clients" 
            className="w-full h-[400px] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
