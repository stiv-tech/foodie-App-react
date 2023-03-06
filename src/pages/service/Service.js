import React from 'react'
import lineImg from "../../assests/HR.png"
import "./service.css"

const Service = () => {
  return (
    <div className='lineee'>
       <div className='imglin'>
        <img src={lineImg} alt="" className='linng'/>
      </div>

      <div className='mt-5 imgword'>
        <h2>How the app works</h2>
      </div>
    </div>
  )
}

export default Service
