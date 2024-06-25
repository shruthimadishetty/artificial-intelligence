import React, { useState } from 'react'
import {Link} from 'react-router-dom';
import {FaTimes,FaBars} from 'react-icons/fa'
import './Navbar.css';


const Navbar = () => {
  const [click,setClick]=useState(false)

  const handleClick=()=>{
    setClick(!click)
  }

  return (
    <nav>
      <div className='logo'>
         <h1>INKPROG</h1>
      </div>
      <div className= {click ? 'menu active': 'menu'}>
        <Link to='/'><p>Home</p></Link>
        <Link to='/Contact'><p>Contact</p></Link>
        <Link to='/Training'><p>Training</p></Link>
      </div>
      <div className='hamburger' onClick={handleClick}>
        {
          click?(
            <FaTimes style={{color:"white"}} size={25}/>
          ):
          (
            <FaBars style={{color:"white"}} size={25}/>
          ) 
        }
      </div>
    </nav>
  )
}

export default Navbar
