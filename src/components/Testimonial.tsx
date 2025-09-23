import React from 'react';
import ImageMod from './ImageMod';

interface Review {
  logo: string;
  content: string;
  avatar: string;
  name: string;
  designation: string;
}

interface TestimonialData {
  enable: boolean;
  title: string;
  reviews: Review[];
}

interface TestimonialProps {
  testimonial: {
    data: TestimonialData;
  }[];
}

const Testimonial: React.FC<TestimonialProps> = ({ testimonial }) => {
  const { enable, title, reviews } = testimonial[0].data;

  if (!enable) return null;

  return (
    <section className="section py-16">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
          {reviews.map((review: Review, index: number) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg border border-gray-200"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Company Logo */}
              <img
                src={review.logo}
                alt="company logo"
                className="h-8 mb-8 opacity-60"
              />
              
              {/* Testimonial Text */}
              <p className="text-lg leading-relaxed mb-8">
                "{review.content}"
              </p>
              
              {/* Author Info */}
              <div className="flex items-center gap-4">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-[#1E293B]">
                    {review.name.split(',').map((part, i) => (
                      <span key={i} className={i === 0 ? 'text-[#0F766E]' : ''}>
                        {i > 0 ? ',' : ''}{part}
                      </span>
                    ))}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {review.designation}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;