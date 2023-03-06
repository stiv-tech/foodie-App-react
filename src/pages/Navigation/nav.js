import React from 'react'
import "./nav.css"
import LOGO from "../../assests/Bella Olonje logo 111 1.png"

const nav = () => {
  return (
    <div className='container mt-3'>
      <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
      <a className="navbar-brand" href="#"><img src={LOGO}/></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
     </button>

 <div className="collapse navbar-collapse" id="navbarSupportedContent">
     <ul className="navbar-nav ml-auto">
      <li className="nav-item active ml-5">
        <a className="nav-link home" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li className="nav-item ml-5">
        <a className="nav-link pro" href="#">product</a>
      </li>
      <li className="nav-item ml-5">
        <a className="nav-link pro" href="#">Faq</a>
      </li>
      <li className="nav-item ml-5">
        <a className="nav-link pro" href="#">Contact</a>
      </li>    
    </ul>
   
  </div>
</nav>
    </div>
  )
}

export default nav
