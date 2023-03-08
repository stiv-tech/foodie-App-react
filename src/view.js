import React from 'react'
import Navbar from "./pages/Navigation/nav"
import Herosection from "./pages/Hero/Hero"
import Service from './pages/service/Service'
import Download from './pages/Download/Download'
import Footer from './pages/service/Footer/Footer'
import Last from "./pages/Lastpage/Last"
function App() {
  return (
    <div>
      <Navbar/>
      <Herosection/>
      <Service/>
      <Download/>
      <Footer/>
      <Last/>
    </div>
  )
}

export default App