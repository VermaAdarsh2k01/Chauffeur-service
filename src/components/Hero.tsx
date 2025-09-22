import React from 'react'

const Hero = () => {
  return (
    <div className='max-w-7xl h-screen mx-auto px-4 sm:px-6 lg:px-8 lg:pt-16 flex'>
      <div className='h-full w-full'> 
        <div className='w-full h-[70%] grid grid-cols-2 gap-8'>
            <div className='flex flex-col justify-center'>
                <h1 className='text-6xl font-bold leading-tight mb-6'>
                    Premium
                    <br />
                    Car Rental
                    <br />
                    in New York
                </h1>
                <p className='text-gray-600 text-lg max-w-md'>
                    Don't deny yourself the pleasure of driving the best premium cars from around the world here and now
                </p>
            </div>
            <div className='relative'>
                <img 
                    src="/car-porsche.png" 
                    alt="Premium Porsche Car" 
                  
                    className='w-full h-full object-cover'
                />
            </div>
        </div>
        <div className=''>

        </div>
      </div>
    </div>
  )
}

export default Hero
