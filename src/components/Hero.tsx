import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <div id='hero' className='min-h-screen bg-no-repeat bg-[url(/profile-pic.jpg)] bg-left lg:bg-[15%] bg-cover'
    style={{backgroundSize: "20%"}}
    >
      <Navbar/>
      <div className='container grid lg: grid-cols-2 h-[calc(90vh-50px)]'>
       <div className='hidden lg:block'></div>
          <div className='text-[80px] sm:text-[80px] font-bold leading-tight flex justify-center items-center'>
              <div className=''>
                 <p data-aos="zoom-in-up" className='text-fuchsia-600'>I'm</p>
                 <p data-aos="zoom-in-up">Muneeb</p>
                 <p data-aos="zoom-in-up" className='text-pink-500'>Ahmed</p>

              </div>
          </div>
       </div>
     </div>
  )
}

export default Hero
