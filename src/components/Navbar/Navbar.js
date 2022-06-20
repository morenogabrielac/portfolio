import React from 'react'
import "./Navbar.css"

function Navbar({isScrolling}) {
    function toTheTop(){
        window.scrollTo({top:0, left:0, behavior: "smooth"})
    }
  return (
    <div className={`navbar ${isScrolling > 20 ? "scrolling" : null}`}>
        <div className='navbar-logo' onClick={toTheTop}>
            JGM
        </div>
    </div>
  )
}

export default Navbar;