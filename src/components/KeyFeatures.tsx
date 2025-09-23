import React, { useLayoutEffect, useRef } from 'react';
import { Clock, Headphones, Sparkles, Shield } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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
if(typeof window !== 'undefined') {
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
      }
    });

    // Reset initial states
    gsap.set(cards, { y: 100, opacity: 0 });
    gsap.set(icons, { scale: 0 });

    // Animate cards and icons
    tl.to(cards, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out"
    })
    .to(icons, {
      scale: 1,
      duration: 0.6,
      stagger: 0.2,
      ease: "back.out(1.7)"
    }, "-=0.8"); // Start icons animation slightly before cards finish

    return () => {
      tl.kill();
    };
  }, []);
  return (
    <section ref={sectionRef} className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
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
            ref={(el: HTMLDivElement | null) => { cardsRef.current[index] = el }}
            className="bg-white border-2 border-gray-200 rounded-4xl  p-10 flex flex-col items-start  justify-between min-h-[300px] w-full"
            style={{
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
            }}
          >
            <div 
              ref={(el: HTMLDivElement | null) => { iconsRef.current[index] = el }}
              className="relative w-16 h-16 mb-8 "
            >
              {/* Background gradient circle */}
              <div 
                className="absolute inset-0 w-18 h-18 -left-1 -top-1 rounded-full"
                style={{
                  background: 'linear-gradient(135deg, #17d397 0%, #25a87e 40%, #059669 100%)',
                }}
              />
              {/* Icon container */}
              <div 
                className="relative w-full h-full rounded-full bg-[#059669]  flex items-center justify-center"
                style={{
                  boxShadow: '4px 4px 4px rgba(0, 0, 0, 0.05)',
                }}
              >
                <feature.Icon size={28} strokeWidth={1.5} className="text-black" />
              </div>
            </div>
            <h3 className="font-medium text-[18px] leading-tight text-left">{feature.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default KeyFeatures;
