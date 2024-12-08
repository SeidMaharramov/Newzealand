import React from 'react'
import './header.scss'
import {FaMagnifyingGlass } from "react-icons/fa6";

const Header = () => {
  return (
    <div className='header'>
      <ul className="gizli">
      <li>Islands</li>
        <li>Beach</li>
        <li>City's</li>
        <li>Hotel's</li>
      </ul>
      <nav><h1>TRAVEL & DESTINATION</h1>
      <ul>
        <li>Islands</li>
        <li>Beach</li>
        <li>City's</li>
        <li>Hotel's</li>
      </ul>
      
      </nav>

      <div className='xetler'>
      <hr  className='ag'/>
      <hr className='qirmizi'/>
      <hr className="ag" />
      
      </div>
      <div className="butoncontainer">
      <div className="button">
        <input type="text" name="" id=""placeholder='Search' />
        <i><FaMagnifyingGlass/></i>
      </div>
      </div>
      <div className="center">
       <h1>VISIT</h1>
       <h1>NEW ZEALEND</h1> 
      <div className="footer">
        <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, deserunt ullam! Tempore, sit odit aperiam quibusdam quos veritatis blanditiis earum?
        </p>
        <div className="footercenter">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, dolorem!</p>
            <button>Start Seeking</button>
        </div>
        <div className="footerright">
            <ul>
                <li>Schedule</li>
                <li>Wishlist</li>
                <li>Tickets</li>
                <li>About</li>
            </ul>
        </div>
      </div>
      </div>
      <div className='xetler2'>
      <hr  className='ag'/>
      <hr className='qirmizi'/>
      <hr className="ag" />
      <button>Recommended Places to Visit</button>
      </div>
    </div>
  )
}

export default Header
