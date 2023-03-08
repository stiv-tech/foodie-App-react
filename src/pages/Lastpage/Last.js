import React from 'react'
import "./last.css"
import Facebooklogo from "../../assests/facebook.png"
import Instagram from "../../assests/instagram.png"
import twitter from "../../assests/twitter.png"
import Bellaimg from "../../assests/Bella Olonje logo 111 1.png"


function Last() {
  return (
    <div className='container mt-5'>
        <div className='row last-top'>
            <div className='col-sm-12 col-md-12 col-lg-4'>
                <div>
                <img src={Bellaimg} alt="" className='last-logo'/>
                </div>
            </div>
            <div className='col-sm-12 col-md-12 col-lg-4'>
            <div className='mt-4'>
                <img src={twitter} alt="" className='image1 mr-4'/>
                <img src={Facebooklogo} alt="" className='image-2 mr-4'/>
                <img src={Instagram} alt="" className='image-3 mr-4'/>
                </div>
            </div>
            <div className='col-sm-12 col-md-12 col-lg-4 mt-4'>
                <p className='last-para'>Copywright 2020 Bella Onojie.com</p>
            </div>
        </div>
      
    </div>
  )
}

export default Last
