import React from 'react'

const Hero = () => {
  return (
    <div className='max-w-7xl h-screen mx-auto px-4 sm:px-6 lg:px-8 lg:pt-16 flex'>
      <div className='border-2 border-blue-300 h-full w-full'> 
        <div className='w-full h-[70%] grid grid-cols-2'>
            <div className='border-2 border-red-300'>
                <div className='h-full bg-red-200 flex items-center justify-center'> </div>
            </div>
            <div className='border-2 border-green-300'>
                <h1>Hello</h1>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
