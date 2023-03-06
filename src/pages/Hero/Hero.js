import React from 'react'
import "./Hero.css"
import PhoneImg1 from "../../assests/Group 53.png"


function Hero() {
  return (
    <div>
      <div className='mt-3'>
        <div className='foodie'>
            <h6 className=''>Food app</h6>
            <h5 className='mb-4'>Why stay hungry when <br/> you can order form Bella Onojie</h5>
            <p className='mb-4'>Download the bella onoje’s food app now on</p>

            <div className='hero-btn-btn'>
            <button className='hero-btn'>Playstore</button>
            <button className='hero-btn-2'>App store</button>
            </div>

            <div className='phoneimgs'>
                <img src={PhoneImg1} alt="" className='img11'/>
            </div>
        </div>
      </div>

     
    </div>
  )
}

export default Hero
