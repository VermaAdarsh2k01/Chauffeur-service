import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger only on the client side
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type Vehicle = {
  id?: number;
  name: string;
  image: string | { src: string; alt: string };
  description: string;
  buttonText?: string;
  buttonLink?: string;
};

type VehicleFleetData = {
  subtitle?: string;
  sectionTitle?: string;
  sectionDescription?: string;
  vehicles?: Vehicle[];
};

interface VehicleFleetProps {
  data?: VehicleFleetData;
}

// Default/fallback data
const defaultVehicles: Vehicle[] = [
  // First row - 3 luxury cars
  {
    id: 1,
    name: "BMW",
    image: "/vehicles/bmw.jpg",
    description:
      "Ultimate driving machine with precision engineering and luxury comfort",
  },
  {
    id: 2,
    name: "Porsche",
    image: "/vehicles/porche.jpg",
    description:
      "Iconic sports cars delivering pure driving pleasure and performance",
  },
  {
    id: 3,
    name: "Mercedes",
    image: "/vehicles/mercedes.jpg",
    description:
      "The best or nothing - premium luxury with innovative technology",
  },
  // Second row - 4 premium cars
  {
    id: 4,
    name: "Hyundai",
    image: "/vehicles/suv.jpg",
    description:
      "Modern design meets reliability with exceptional value and features",
  },
  {
    id: 5,
    name: "Audi",
    image: "/vehicles/audi.jpg",
    description:
      "Vorsprung durch Technik - where innovation meets sophisticated design",
  },
  {
    id: 6,
    name: "Toyota",
    image: "/vehicles/fortuner.jpg",
    description:
      "Let's go places with legendary reliability and rugged capability",
  },
  {
    id: 7,
    name: "Suzuki",
    image: "/vehicles/dzire.jpg",
    description:
      "Way of life with compact efficiency and practical functionality",
  },
];

export default function VehicleFleet({ data }: VehicleFleetProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const imagesRef = useRef<(HTMLImageElement | null)[]>([]);

  useGSAP(
    () => {
      const images = imagesRef.current.filter(Boolean);

      gsap.set(images, { scale: 1.1 });

      // Initial scroll animation for all images
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 50%",
        once: true,
        onEnter: () => {
          gsap.to(images, {
            scale: 1,
            duration: 1,
            ease: "power2.out",
          });
        },
      });

      // Individual hover animations
      images.forEach((img) => {
        const card = img?.parentElement;
        if (!card) return;

        card.addEventListener("mouseenter", () => {
          gsap.to(img, {
            scale: 1.05,
            duration: 0.3,
            ease: "power2.out",
          });
        });

        card.addEventListener("mouseleave", () => {
          gsap.to(img, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
          });
        });
      });
    },
    { scope: sectionRef }
  );

  // Use dynamic data or fallback to default
  const vehicles = data?.vehicles || defaultVehicles;
  const subtitle = data?.subtitle || "ONLY THE BEST CARS";
  const sectionTitle = data?.sectionTitle || "Our Vehicle Fleet";
  const sectionDescription = data?.sectionDescription || "We provide our customers with the most incredible driving emotions. That's why we have only world-class cars in our fleet.";

  // Add IDs to vehicles if they don't have them (for Sanity data)
  const vehiclesWithIds = vehicles.map((vehicle, index) => ({
    ...vehicle,
    id: vehicle.id || index + 1,
  }));

  // Split vehicles into two rows
  const firstRow = vehiclesWithIds.slice(0, 3);
  const secondRow = vehiclesWithIds.slice(3);

  // Helper function to get image source
  const getImageSrc = (image: string | { src: string; alt: string }): string => {
    return typeof image === 'string' ? image : image.src;
  };

  const getImageAlt = (image: string | { src: string; alt: string }, name: string): string => {
    return typeof image === 'string' ? name : image.alt;
  };

  return (
    <section ref={sectionRef} className="px-4 md:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h4 className="text-sm font-medium tracking-wider text-gray-500 uppercase mb-2">
            {subtitle}
          </h4>
          <h2 className="text-4xl font-bold mb-4">{sectionTitle}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {sectionDescription}
          </p>
        </div>

        {/* First Row - 3 cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {firstRow.map((vehicle) => (
            <div
              key={vehicle.id}
              className="group relative overflow-hidden rounded-2xl bg-gray-100 aspect-[4/3]"
            >
              <img
                ref={(el: HTMLImageElement | null) => {
                  imagesRef.current[vehicle.id - 1] = el;
                }}
                src={getImageSrc(vehicle.image)}
                alt={getImageAlt(vehicle.image, vehicle.name)}
                className="w-full h-full object-cover"
              />
              {/* Overlay content that appears on hover for desktop, always visible on mobile */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-2 left-2 lg:bottom-6 lg:left-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{vehicle.name}</h3>
                  <p className="text-sm text-gray-200 mb-3">
                    {vehicle.description}
                  </p>
                  <button className="px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-200 transition-colors duration-200 text-sm font-semibold">
                    {vehicle.buttonText || 'Book Now'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Second Row - 4 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-0 md:px-4 lg:px-8">
          {secondRow.map((vehicle) => (
            <div
              key={vehicle.id}
              className="group relative overflow-hidden rounded-2xl bg-gray-100 aspect-[4/3]"
            >
              <img
                ref={(el: HTMLImageElement | null) => {
                  imagesRef.current[vehicle.id - 1] = el;
                }}
                src={getImageSrc(vehicle.image)}
                alt={getImageAlt(vehicle.image, vehicle.name)}
                className="w-full h-full object-cover"
              />
              {/* Overlay content that appears on hover for desktop, always visible on mobile */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{vehicle.name}</h3>
                  <p className="text-sm text-gray-200 mb-3">
                    {vehicle.description}
                  </p>
                  <button className="px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-200 transition-colors duration-200 text-sm font-semibold">
                    {vehicle.buttonText || 'Book Now'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
