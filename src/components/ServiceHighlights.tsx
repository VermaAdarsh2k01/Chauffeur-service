import React from 'react';

export default function ServiceHighlights() {
  return (
    <div className=" py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-center text-base/7 font-semibold text-slate-700">We Believe in Premium Experience</h2>
        <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance text-black dark:text-white sm:text-5xl">
            We Believe in Premium Experience
        </p>
        <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-gray-200 lg:rounded-l-4xl" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                <p className="mt-2 text-lg xl:text-2xl xl:font-bold font-medium tracking-tight text-black max-lg:text-center">Luxury Fleet</p>
                <p className="mt-2 max-w-lg text-sm/6 text-black max-lg:text-center">
                  Experience the epitome of luxury with our premium collection of high-end vehicles, from sleek sports cars to elegant sedans.
                </p>
              </div>
              <div className="relative min-h-[400px] w-full grow overflow-hidden">
                <div className="absolute inset-0 w-full h-full">
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-200 via-transparent/40 to-transparent z-10"></div>
                  <img
                    alt="Luxury car fleet"
                    src="/chauffeur.jpg"
                    className="w-full h-full object-cover object-center transform scale-105 hover:scale-125"
                  />
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-white/15 lg:rounded-l-4xl" />
          </div>
          
          <div className="relative max-lg:row-start-1">
            <div className="absolute inset-px rounded-lg bg-gray-800 max-lg:rounded-t-4xl" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-white max-lg:text-center">24/7 Support</p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-400 max-lg:text-center">
                  Round-the-clock assistance for all your rental needs, including roadside support and concierge services.
                </p>
              </div>
              <div className="flex flex-1 items-center justify-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2">
                <img
                  alt="24/7 Support illustration"
                  src="/support-illustration.png"
                  className="w-full max-lg:max-w-xs"
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-white/15 max-lg:rounded-t-4xl" />
          </div>

          <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
            <div className="absolute inset-px rounded-lg bg-gray-800" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-white max-lg:text-center">Insurance Coverage</p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-400 max-lg:text-center">
                  Comprehensive insurance options to ensure your peace of mind throughout your rental period.
                </p>
              </div>
              <div className="@container flex flex-1 items-center max-lg:py-6 lg:pb-2">
                <img
                  alt="Insurance coverage illustration"
                  src="/insurance-illustration.png"
                  className="h-[min(152px,40cqw)] object-cover"
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-white/15" />
          </div>

          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-gray-200 max-lg:rounded-b-4xl lg:rounded-r-4xl" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                <p className="mt-2 text-lg xl:text-2xl xl:font-bold font-medium tracking-tight text-black max-lg:text-center">No Language Barrier</p>
                  <p className="mt-2 max-w-lg text-sm/6 text-black max-lg:text-center">
                    Experience seamless communication with our multilingual team. Our professional chauffeurs and management staff are fluent in English, Hindi, Marathi, Telugu (Andhra), and Tamil, ensuring a comfortable journey regardless of your preferred language.
                  </p>
              </div>
              <div className="relative min-h-[400px] w-full grow overflow-hidden">
                <div className="absolute inset-0 w-full h-full">
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-200 via-transparent/40 to-transparent z-10"></div>
                  <img
                    alt="Digital platform interface"
                    src="/lang.jpg"
                    className="w-full h-full object-cover object-center transform scale-105 hover:scale-125"
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
