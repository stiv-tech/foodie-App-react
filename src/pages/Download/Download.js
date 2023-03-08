import React from 'react'
import "./download.css"
import phone3 from "../../assests/phone3.png"
import phone4 from "../../assests/phone4.png"
import phone5 from "../../assests/phone5.png"

function Download() {
  return (
    <div className='container dide'>
      <div className='row'>
        <div className='col-sm-12 col-md-12 col-lg-6 shithole'>
           <div className='download-img'>
             <img src={phone3} alt="" className='phone3-img'/>
           </div>
        </div>
        <div className='col-sm-12 col-md-12 col-lg-6 holeshit'>
            <div className='download-page'>
                <p className='down-para1'>Create an account</p>
                <h3>Create/login to an existing <br/> account to get started</h3>
                <p className='down-para3'>An account is created with your email <br/> and a desired password</p>
            </div>
        </div>
        
      </div>

      <div className='row'>
        <div className='col-sm-12 col-md-12 col-lg-6 mmm'>
            <div className='download-page'>
                <p className='down-para1'>Explore varieties</p>
                <h3>Shop for your favorites <br/> meal as e dey hot.</h3>
                <p className='down-para3'>Shop for your favorite meals or drinks <br/> and enjoy while doing it.</p>
            </div>
        </div>

        <div className='col-sm-12 col-md-12 col-lg-6 mma shithole'>
           <div className='download-img'>
             <img src={phone4} alt="" className='phone3-img'/>
           </div>
        </div> 
      </div>


      <div className='row'>
        <div className='col-sm-12 col-md-12 col-lg-6 mma holeshit'>
           <div className='download-img'>
             <img src={phone5} alt="" className='phone3-img'/>
           </div>
        </div>
        <div className='col-sm-12 col-md-12 col-lg-6 mma'>
            <div className='download-page'>
                <p className='down-para1'>Checkout</p>
                <h3>When you done check out <br/> and get it delivered</h3>
                <p className='down-para3'>When you done check out and get it <br/> delivered with ease</p>
            </div>
        </div>
      </div>

    </div>



  )
}

export default Download
