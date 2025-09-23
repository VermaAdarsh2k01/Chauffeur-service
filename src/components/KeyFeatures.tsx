import React, { useLayoutEffect, useRef } from "react";
import { Clock, Headphones, Sparkles, Shield } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const features = [
  {
    Icon: Clock,
    title: "24-hour Services",
    description: "Available around the clock for your convenience",
  },
  {
    Icon: Headphones,
    title: "24/7 Technical Support",
    description: "Dedicated support team ready to assist you",
  },
  {
    Icon: Sparkles,
    title: "Premium Packages",
    description: "Luxury vehicles with exclusive amenities",
  },
  {
    Icon: Shield,
    title: "Absolute Confidentiality",
    description: "Complete privacy and discretion guaranteed",
  },
];
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const KeyFeatures: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const iconsRef = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    const cards = cardsRef.current;
    const icons = iconsRef.current;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "40% center",
        end: "bottom center",
      },
    });

    // Reset initial states
    gsap.set(cards, { y: 60, opacity: 0 });
    gsap.set(icons, { scale: 0.8, opacity: 0 });

    // Simple, elegant animation
    tl.to(cards, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out",
    }).to(
      icons,
      {
        scale: 1,
        opacity: 1,
        duration: 0.6,
        stagger: 0.2,
        ease: "power2.out",
      },
      "-=0.6"
    );

    return () => {
      tl.kill();
    };
  }, []);
  return (
    <section ref={sectionRef} className="px-4 md:px-8 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="text-center mb-16">
        <p className="text-sm uppercase tracking-wider text-gray-500 mb-4">
          Taking Care of Every Client
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Key Features
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          We are all about our client's comfort and safety. That's why we
          provide the best service you can imagine.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            ref={(el: HTMLDivElement | null) => {
              cardsRef.current[index] = el;
            }}
            className="bg-white rounded-2xl p-8 text-center transition-all duration-300 
                       hover:shadow-xl border border-gray-100 hover:border-gray-200
                       hover:-translate-y-2 min-h-[280px] flex flex-col justify-between"
          >
            {/* Icon */}
            <div className="mb-6">
              <div
                ref={(el: HTMLDivElement | null) => {
                  iconsRef.current[index] = el;
                }}
                className="w-16 h-16 mx-auto bg-emerald-100 rounded-2xl flex items-center justify-center
                           group-hover:bg-emerald-200 transition-colors duration-300"
              >
                <feature.Icon
                  size={28}
                  strokeWidth={1.5}
                  className="text-emerald-600"
                />
              </div>
            </div>

            {/* Content */}
            <div className="space-y-3">
              <h3 className="font-semibold text-lg text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default KeyFeatures;
