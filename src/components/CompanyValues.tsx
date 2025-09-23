import React from 'react';
import { Clock, Users, HeartHandshake } from 'lucide-react';
import Advantage from './Advantage';

const values = [
  {
    icon: <Clock className="w-8 h-8 text-white" />,
    title: "Innovation",
    description: "Continuously improving and innovating our solutions to stay ahead of cyber threats."
  },
  {
    icon: <HeartHandshake className="w-8 h-8 text-white" />,
    title: "Integrity",
    description: "Upholding the highest standards of honesty and transparency in all our dealings."
  },
  {
    icon: <Users className="w-8 h-8 text-white" />,
    title: "Customer-Centric",
    description: "Continuously improving and innovating our solutions to stay ahead of cyber threats."
  }
];


const   CompanyValues: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 space-y-20">
      {/* Values Section */}
      <section>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Our Values</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here's a catchy tagline that supports the headline above while adding a little extra information.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="relative w-16 h-16 mx-auto mb-4">
                {/* Background gradient circle */}
                <div 
                  className="absolute inset-0 w-18 h-18 -left-1 -top-1 rounded-full"
                  style={{
                    background: 'linear-gradient(135deg, #17d397 0%, #25a87e 40%, #059669 100%)',
                  }}
                />
                {/* Icon container */}
                <div 
                  className="relative w-full h-full rounded-full bg-[#059669] flex items-center justify-center"
                  style={{
                    boxShadow: '4px 4px 4px rgba(0, 0, 0, 0.05)',
                  }}
                >
                  {value.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      
      
    </div>
  );
};

export default CompanyValues;
