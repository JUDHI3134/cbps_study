import React from 'react'
import banner from '../../public/banner.jpg'

const Hero = () => {
  return (
    <>
     <div name="Home" className='max-w-screen-2xl container mx-auto px-4 my-20'>
        <div className='flex flex-col md:flex-row'>
            <img src={banner} alt="" className=' w-[450px] h-[200px] md:w-full md:h-[450px]' />
        </div>       
        </div>
    </>
  )
}

export default Hero
