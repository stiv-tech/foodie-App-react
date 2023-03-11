import React from 'react'
import "./footer.css"

function Footer() {
  return (
    <div>
       <div className='footer-pg'>
         <h2 className='footer-item'>Download the app now.</h2>
         <p className='footer-para'>Available on your favorite store. Start your premium experience now</p>
         <p className='footer-para1'>Most calendars are <br/> designed for teams. </p>

         <div className='footer-btn'>
            <button className='foot-btn1'>Playstore</button>
            <button className='foot-btn11'>App store</button>
            
         </div>
         <div className='footer-btnn'>
            <button className='foot-btn1'>Buy now</button>
            <button className='foot-btn11'>Try for free</button>
            
         </div>
       </div> 
      
    </div>
  )
}

export default Footer
