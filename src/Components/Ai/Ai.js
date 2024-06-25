import React, { useState } from 'react'
import img_1 from '../../assets/ai_img_1.gif';
import img_2 from '../../assets/ai_img_2.gif';
import './Ai.css'

function Ai() {

    const [img,setImg]=useState(false)

    const handleClick=()=>{
        setImg(!img)
    }
  return (
    <>
    <div className='ai_container'>
      <h1>ARTIFICIAL INTELLIGENCE</h1>
      { !img && <img src={img_1} alt="" /> }
    
    <div className='ai_gif'>
      {img && <img src={img_2} className="image_2" alt="" />}
    </div>
    <div>
        {!img &&  <button onClick={handleClick}>Face Recognition</button>}
        {img &&  <button  onClick={handleClick}>DONE</button>}
    </div>
    </div>
    </>

  )
}

export default Ai
