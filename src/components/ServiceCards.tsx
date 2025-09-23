import React from 'react';
import { CheckCircle, Star, Calendar, TrendingUp, Users, Clock, Award, Shield, MapPin } from 'lucide-react';

// Icon mapping function
const getIcon = (iconName: string) => {
  const iconMap: { [key: string]: React.ReactNode } = {
    'Clock': <Clock className='w-5 h-5' />,
    'Star': <Star className='w-5 h-5' />,
    'Calendar': <Calendar className='w-5 h-5' />,
    'CheckCircle': <CheckCircle className='w-5 h-5' />,
    'TrendingUp': <TrendingUp className='w-5 h-5' />,
    'Users': <Users className='w-5 h-5' />,
    'Award': <Award className='w-5 h-5' />,
    'Shield': <Shield className='w-5 h-5' />,
    'MapPin': <MapPin className='w-5 h-5' />
  };
  
  return iconMap[iconName] || <CheckCircle className='w-5 h-5' />;
};

interface MetricCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  colorScheme: 'green' | 'blue' | 'purple' | 'orange' | 'yellow';
}

const MetricCard: React.FC<MetricCardProps> = ({ icon, label, value, colorScheme }) => {
  const colorSchemes = {
    green: 'bg-green-100 text-green-600 border border-green-600',
    blue: 'bg-blue-100 text-blue-600 border border-blue-600',
    purple: 'bg-purple-100 text-purple-600 border border-purple-600',
    orange: 'bg-orange-100 text-orange-600 border border-orange-600',
    yellow: 'bg-yellow-100 text-yellow-600 border border-yellow-600'
  };

  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-gray-100 hover:scale-105 transition-transform duration-300 absolute top-8 right-8">
      <div className="flex items-center gap-3">
        <div className={`w-10 h-10 ${colorSchemes[colorScheme]} rounded-full flex items-center justify-center`}>
          {icon}
        </div>
        <div>
          <p className="text-sm text-gray-600">{label}</p>
          <p className="text-lg font-bold text-gray-900">{value}</p>
        </div>
      </div>
    </div>
  );
};

interface FeaturePoint {
  text: string;
}

interface MetricData {
  icon: string;
  label: string;
  value: string;
  colorScheme: 'green' | 'blue' | 'purple' | 'orange' | 'yellow';
}

interface ServiceCardData {
  heading: string;
  description: string;
  featurePoints: FeaturePoint[];
  ctaButton: {
    text: string;
    link: string;
  };
  image: {
    src: string;
    alt: string;
  };
  metric: MetricData;
}

interface ServiceCardsProps {
  data: ServiceCardData[];
}

const ServiceCards: React.FC<ServiceCardsProps> = ({ data }) => {
  return (
    <div className="w-full max-w-7xl mx-auto my-16 px-4 sm:px-6 lg:px-8">
      <div className="space-y-16">
        {data.map((card, index) => {
          const isEven = index % 2 === 0;
          const imageOrder = data.length === 1 ? "order-1 lg:order-1" : (isEven ? "order-1 lg:order-1" : "order-1 lg:order-2");
          const contentOrder = data.length === 1 ? "order-2 lg:order-2" : (isEven ? "order-2 lg:order-2" : "order-2 lg:order-1");
          const imageRounding = "rounded-[20px]";
          const contentRounding = data.length === 1 ? "rounded-r-[20px]" : (isEven ? "rounded-r-[20px]" : "rounded-l-[20px]");

          return (
            <div key={index} className="relative flex flex-col lg:flex-row items-center rounded-[20px] overflow-hidden min-h-[500px]">
              {/* Image Side */}
              <div className={`relative w-full lg:w-1/2 ${imageOrder} flex justify-center items-center p-8 bg-[#F7F7F7] border border-gray-200 ${imageRounding}`}>
                {/* Background Pattern Images */}
                <img
                  src="/card-pattern-1-green.png"
                  alt="pattern"
                  className="absolute bottom-0 left-0 w-[15%] opacity-30"
                  width={0}
                  height={0}
                />
                <img
                  src="/card-pattern-2-green.png"
                  alt="pattern"
                  className="absolute top-0 right-6 w-[15%] opacity-30"
                  width={0}
                  height={0}
                />
                
                <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-3xl overflow-hidden bg-white shadow-lg z-10">
                  <img
                    src={card.image.src}
                    alt={card.image.alt}
                    width={597}
                    height={603}
                    className="h-full w-full object-cover"
                  />
                  
                  {/* Metric Card */}
                  <MetricCard
                    icon={getIcon(card.metric.icon)}
                    label={card.metric.label}
                    value={card.metric.value}
                    colorScheme={card.metric.colorScheme}
                  />
                </div>
              </div>

              {/* Content Side */}
              <div className={`relative w-full lg:w-1/2 ${contentOrder} p-6 md:p-10 lg:p-14 bg-white ${contentRounding}`}>
                  <div className="space-y-6">

                  {/* Main Heading */}
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                    {card.heading}
                  </h2>

                  {/* Description */}
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {card.description}
                  </p>

                  {/* Feature Points */}
                  <div className="space-y-4">
                    {card.featurePoints.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                          <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-700 font-medium">{feature.text}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <div className="pt-4">
                    <a
                      href={card.ctaButton.link}
                      className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-black rounded-full hover:bg-gray-800 transition-colors duration-200"
                    >
                      {card.ctaButton.text}
                    </a>
                    </div>
                  </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};



export default ServiceCards;