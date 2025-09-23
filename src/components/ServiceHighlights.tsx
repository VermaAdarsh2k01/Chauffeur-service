import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger only on the client side
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}
export default function ServiceHighlights() {
  const containerRef = useRef<HTMLDivElement>(null);
  const counter1Ref = useRef<HTMLDivElement>(null);
  const counter2Ref = useRef<HTMLDivElement>(null);
  const image1Ref = useRef<HTMLImageElement>(null);
  const image2Ref = useRef<HTMLImageElement>(null);

  useGSAP(
    () => {
      if (!counter1Ref.current || !counter2Ref.current) return;

      // Get all images
      const images = [image1Ref.current, image2Ref.current].filter(Boolean);

      // Set initial scale
      gsap.set(images, { scale: 1.1 });

      // Create single scroll trigger for both animations
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "40% 40%",
        once: true,
        toggleActions: "play none none reverse",
        onEnter: () => {
          // Image scale animation
          gsap.to(images, {
            scale: 1,
            duration: 1,
            ease: "power2.out",
          });

          // Counter animations
          gsap.to(counter1Ref.current, {
            duration: 2,
            innerText: 10,
            snap: { innerText: 1 },
            ease: "power2.out",
          });
          gsap.to(counter2Ref.current, {
            duration: 2,
            innerText: 100,
            snap: { innerText: 1 },
            ease: "power2.out",
          });
        },
      });
    },
    { scope: containerRef }
  );
  return (
    <div className="py-0" ref={containerRef}>
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-center text-base/7 font-semibold text-slate-700">
          We Believe in Premium Experience
        </h2>
        <p className="mx-auto mt-2 max-w-lg text-center text-2xl sm:text-4xl font-semibold tracking-tight text-balance text-black dark:text-white lg:text-5xl">
          We Believe in Premium Experience
        </p>
        <div className="mt-6 sm:mt-10 lg:mt-16 grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2">
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-gray-200 lg:rounded-l-4xl" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
              <div className="px-4 sm:px-8 lg:px-10 pt-6 sm:pt-8 lg:pt-10 pb-3 sm:pb-3 lg:pb-0">
                <p className="mt-2 text-lg sm:text-xl lg:text-lg xl:text-3xl font-medium lg:font-medium xl:font-bold tracking-tight text-black text-center lg:text-left">
                  Luxury Fleet
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-black text-center lg:text-left">
                  Experience the epitome of luxury with our premium collection
                  of high-end vehicles, from sleek sports cars to elegant
                  sedans.
                </p>
              </div>
              <div className="relative min-h-[250px] sm:min-h-[300px] lg:min-h-[400px] w-full grow overflow-hidden">
                <div className="absolute inset-0 w-full h-full">
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-200 via-transparent/40 to-transparent z-10"></div>
                  <img
                    ref={image1Ref}
                    alt="Luxury car fleet"
                    src="/chauffeur.jpg"
                    className="w-full h-full object-cover object-center transform hover:scale-125"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-white/15 lg:rounded-l-4xl" />
          </div>

          <div className="relative max-lg:row-start-1">
            <div className="absolute inset-px rounded-lg bg-gray-800 max-lg:rounded-t-4xl" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] md:rounded-t-[calc(2rem+1px)] lg:rounded-t-[calc(var(--radius-lg)+1px)]">
              <div className="px-4 sm:px-8 lg:px-10 pt-6 sm:pt-8 lg:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-white text-center lg:text-left">
                  24/7 Support
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-400 text-center lg:text-left">
                  Round-the-clock assistance for all your rental needs,
                  including roadside support and concierge services.
                </p>
              </div>
              <div className="flex flex-1 items-center justify-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2">
                <div className="w-full max-lg:max-w-xs flex items-center justify-center">
                  <svg
                    width="280"
                    height="200"
                    viewBox="0 0 280 200"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-auto"
                  >
                    {/* Background circle */}
                    <circle
                      cx="140"
                      cy="100"
                      r="85"
                      fill="#1f2937"
                      stroke="#374151"
                      strokeWidth="2"
                      opacity="0.3"
                    />

                    {/* Clock face */}
                    <circle
                      cx="140"
                      cy="100"
                      r="45"
                      fill="#065f46"
                      stroke="#10b981"
                      strokeWidth="3"
                    />
                    <circle
                      cx="140"
                      cy="100"
                      r="40"
                      fill="#064e3b"
                      stroke="#34d399"
                      strokeWidth="1"
                      opacity="0.5"
                    />

                    {/* Clock numbers */}
                    <text
                      x="140"
                      y="70"
                      textAnchor="middle"
                      fill="#10b981"
                      fontSize="12"
                      fontWeight="bold"
                    >
                      12
                    </text>
                    <text
                      x="165"
                      y="107"
                      textAnchor="middle"
                      fill="#10b981"
                      fontSize="12"
                      fontWeight="bold"
                    >
                      3
                    </text>
                    <text
                      x="140"
                      y="135"
                      textAnchor="middle"
                      fill="#10b981"
                      fontSize="12"
                      fontWeight="bold"
                    >
                      6
                    </text>
                    <text
                      x="115"
                      y="107"
                      textAnchor="middle"
                      fill="#10b981"
                      fontSize="12"
                      fontWeight="bold"
                    >
                      9
                    </text>

                    {/* Clock hands */}
                    <line
                      x1="140"
                      y1="100"
                      x2="140"
                      y2="80"
                      stroke="#10b981"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    <line
                      x1="140"
                      y1="100"
                      x2="155"
                      y2="100"
                      stroke="#10b981"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <circle cx="140" cy="100" r="3" fill="#10b981" />

                    {/* Phone icon */}
                    <rect
                      x="70"
                      y="75"
                      width="20"
                      height="35"
                      rx="3"
                      fill="#065f46"
                      stroke="#10b981"
                      strokeWidth="2"
                    />
                    <rect
                      x="73"
                      y="80"
                      width="14"
                      height="20"
                      fill="#10b981"
                      opacity="0.3"
                    />
                    <circle cx="80" cy="105" r="1.5" fill="#10b981" />

                    {/* Support waves */}
                    <path
                      d="M 85 85 Q 95 75 105 85"
                      stroke="#10b981"
                      strokeWidth="2"
                      fill="none"
                      opacity="0.6"
                    />
                    <path
                      d="M 85 95 Q 95 85 105 95"
                      stroke="#10b981"
                      strokeWidth="2"
                      fill="none"
                      opacity="0.6"
                    />
                    <path
                      d="M 85 105 Q 95 95 105 105"
                      stroke="#10b981"
                      strokeWidth="2"
                      fill="none"
                      opacity="0.6"
                    />

                    {/* Headset icon */}
                    <path
                      d="M 195 85 Q 205 75 215 85 L 215 105 Q 205 115 195 105 Z"
                      fill="#065f46"
                      stroke="#10b981"
                      strokeWidth="2"
                    />
                    <rect
                      x="190"
                      y="90"
                      width="8"
                      height="15"
                      rx="2"
                      fill="#10b981"
                    />
                    <rect
                      x="217"
                      y="90"
                      width="8"
                      height="15"
                      rx="2"
                      fill="#10b981"
                    />
                    <path
                      d="M 198 105 Q 205 110 212 105"
                      stroke="#10b981"
                      strokeWidth="2"
                      fill="none"
                    />

                    {/* Stars for 24/7 */}
                    <polygon
                      points="140,30 142,36 148,36 143,40 145,46 140,42 135,46 137,40 132,36 138,36"
                      fill="#fbbf24"
                    />
                    <polygon
                      points="110,45 111,48 114,48 112,50 113,53 110,51 107,53 108,50 106,48 109,48"
                      fill="#fbbf24"
                      opacity="0.7"
                    />
                    <polygon
                      points="170,45 171,48 174,48 172,50 173,53 170,51 167,53 168,50 166,48 169,48"
                      fill="#fbbf24"
                      opacity="0.7"
                    />

                    {/* 24/7 text */}
                    <text
                      x="140"
                      y="175"
                      textAnchor="middle"
                      fill="#10b981"
                      fontSize="18"
                      fontWeight="bold"
                    >
                      24/7
                    </text>
                    <text
                      x="140"
                      y="190"
                      textAnchor="middle"
                      fill="#6b7280"
                      fontSize="12"
                    >
                      Always Available
                    </text>
                  </svg>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-white/15 max-lg:rounded-t-4xl" />
          </div>

          <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
            <div className="absolute inset-px rounded-lg bg-gray-800" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
              <div className="px-4 sm:px-8 lg:px-10 pt-6 sm:pt-8 lg:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-white text-center lg:text-left">
                  Verified Expert Drivers
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-400 text-center lg:text-left">
                  Experienced drivers with 10+ years on road and complete police
                  verification, ensuring your safety at every turn.
                </p>
              </div>
              <div className="flex flex-1 items-center justify-between gap-4 sm:gap-8 py-6 sm:py-8 px-4 sm:px-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">
                    <span ref={counter1Ref}>0</span>
                    <span>+</span>
                  </div>
                  <div className="text-sm text-gray-400">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">
                    <span ref={counter2Ref}>0</span>
                    <span>+</span>
                  </div>
                  <div className="text-sm text-gray-400">Verified Drivers</div>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-white/15" />
          </div>

          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-gray-200 max-lg:rounded-b-4xl lg:rounded-r-4xl" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] md:rounded-b-[calc(2rem+1px)] lg:rounded-b-[calc(var(--radius-lg)+1px)] lg:rounded-r-[calc(2rem+1px)]">
              <div className="px-4 sm:px-8 lg:px-10 pt-6 sm:pt-8 lg:pt-10 pb-3 sm:pb-3 lg:pb-0">
                <p className="mt-2 text-lg sm:text-xl lg:text-lg xl:text-3xl font-medium lg:font-medium xl:font-bold tracking-tight text-black text-center lg:text-left">
                  No Language Barrier
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-black text-center lg:text-left">
                  Our chauffeurs and staff are fluent in English, Hindi,
                  Marathi, Telugu, and Tamil, ensuring smooth communication
                  throughout your journey.
                </p>
              </div>
              <div className="relative min-h-[250px] sm:min-h-[300px] lg:min-h-[400px] w-full grow overflow-hidden">
                <div className="absolute inset-0 w-full h-full">
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-200 via-transparent/40 to-transparent z-10"></div>
                  <img
                    ref={image2Ref}
                    alt="Digital platform interface"
                    src="/lang.jpg"
                    className="w-full h-full object-cover object-center transform hover:scale-125"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-white/15 max-lg:rounded-b-4xl lg:rounded-r-4xl" />
          </div>
        </div>
      </div>
    </div>
  );
}
