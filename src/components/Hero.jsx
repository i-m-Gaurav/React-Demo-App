import React from 'react'

const Hero = () => {
  return (
    <div className='text-white pt'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#00df9a] font-bold p-2'>
          GROWTH WITH DATA ANALYTICS
        </p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold py-4'>
            GROW WITH DATA
        </h1>
       
        <p className='md:text-2xl text-xl font-bold text-gray-400'>
            Monitor your data analytics to increase revenue for BTB, BTC
        </p>
        <button className='bg-[#00df9a] w-[200px] rounded rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
      </div>
    </div>
  )
}

export default Hero
