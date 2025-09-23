import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

interface FeatureItem {
  title: string;
  content: string;
  features: string[];
  button: {
    label: string;
    link: string;
  };
}

interface FeatureSectionProps {
  features: FeatureItem[];
}

const FeatureSection: React.FC<FeatureSectionProps> = ({ features }) => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {features.map((feature, featureIndex) => (
          <div key={featureIndex} className="flex flex-col lg:flex-row items-center gap-12 mb-20 last:mb-0">
            <div className="w-full lg:w-1/2">
              <div className="relative w-full aspect-[4/3] bg-white rounded-2xl p-6 shadow-sm">
                <img
                  src="/images/analytics-card.png"
                  alt="Analytics Dashboard"
                  className="w-full h-full object-contain p-4"
                />
              </div>
            </div>
            
            <div className="w-full lg:w-1/2">
              <h2 className="text-5xl font-bold mb-4">{feature.title}</h2>
              <p className="text-gray-600 text-lg mb-8">{feature.content}</p>
              
              <div className="space-y-6">
                {feature.features.map((featureItem, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-black rounded-full flex items-center justify-center">
                      <FaArrowRight className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-xl font-medium">{featureItem}</p>
                  </div>
                ))}
              </div>
              
              <a 
                href={feature.button.link}
                className="mt-10 bg-black text-white px-8 py-4 rounded-full text-lg font-medium flex items-center gap-3 hover:bg-gray-800 transition-colors"
              >
                {feature.button.label}
                <FaArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;