import React from 'react';
import { Clock, Headphones, Sparkles, Shield } from 'lucide-react';

const features = [
  {
    Icon: Clock,
    title: '24-hour Services',
  },
  {
    Icon: Headphones,
    title: '24/7 technical support',
  },
  {
    Icon: Sparkles,
    title: 'Premium packages',
  },
  {
    Icon: Shield,
    title: 'Absolute confidentiality',
  },
];

const KeyFeatures: React.FC = () => {
  return (
    <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <p className="text-sm uppercase tracking-wider text-gray-600 mb-2">
          TAKING CARE OF EVERY CLIENT
        </p>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Key Features</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          We are all about our client's comfort and safety. That's why we provide the best service you can imagine.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-[#F8F9FB] rounded-[20px] p-10 flex flex-col items-start  justify-between min-h-[300px] w-full"
            style={{
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
            }}
          >
            <div 
              className="w-16 h-16 rounded-full bg-[#E8F2F1] flex items-center justify-center mb-8"
              style={{
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
              }}
            >
              <feature.Icon size={28} strokeWidth={1.5} />
            </div>
            <h3 className="font-medium text-[18px] leading-tight text-left">{feature.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default KeyFeatures;
