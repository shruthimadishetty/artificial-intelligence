import React from 'react'
import './Hero.css';
import img_1 from '../../assets/training_img_1.gif';
import img_2 from '../../assets/hero_img.gif';

const Hero = () => {
  return (
    <div className='hero_section'>
       <img src={img_1} alt="" />
       <img src={img_2} alt="" />
    </div>
  )
}

export default Hero
