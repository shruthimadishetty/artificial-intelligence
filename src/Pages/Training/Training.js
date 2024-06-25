import React from 'react'
import img_1 from '../../assets/training_img_1.gif';
import img_2 from '../../assets/training_img_2.gif';
import img_3 from '../../assets/training_img_3.gif';
import img_4 from '../../assets/training_img_4.gif';
import img_5 from '../../assets/training_img_5.gif';
import img_6 from '../../assets/training_img_6.gif';
import img_7 from '../../assets/training_img_7.gif';
import img_8 from '../../assets/training_img_8.gif';
import video from '../../assets/Ai-video.mp4';

import { useState } from 'react';

import './Training.css';


const Training = () => {
  const [display, setDisplay]= useState(false);

  const handleClick = ()=>{

  setDisplay(!display);
    
  }
  return (
    <div className='training_info'>
      <h1>TRAINING</h1>
      <div className='training_container'>
          <div className='training_cards'>
              <img src={img_1} alt="" />
              <h2>figure-1</h2>
          </div>
          <div className='training_cards'>
              <img src={img_2} alt="" />
              <h2>figure-2</h2>
          </div>
          <div className='training_cards'>
              <img src={img_3} alt="" />
              <h2>figure-3</h2>
          </div>
          <div className='training_cards'>
              <img src={img_4} alt="" />
              <h2>figure-4</h2>
          </div>
          <div className='training_cards'>
              <img src={img_5} alt="" />
              <h2>figure-5</h2>
          </div>
          <div className='training_cards'>
              <img src={img_6} alt="" />
              <h2>figure-6</h2>
          </div>
          <div className='training_cards'>
              <img src={img_7} alt="" />
              <h2>figure-7</h2>
          </div>
          <div className='training_cards'>
              <img src={img_8} alt="" />
              <h2>figure-8</h2>
          </div>   
      </div>
      <h2>ARTIFICIAL INTELLIGENCE</h2>
      <div className='video_container'>
        {!display &&  
          <video src={video} controls pause className="video_ai" />}
         {!display && <button
            id="button1"
            className='button_play'
            onClick={handleClick}
          >
            PLAY
          </button>}
          {display &&  
          <video src={video} controls autoPlay className="video_ai" />}
          {display &&
          <button
            id="button2"
            className='button_play'
            onClick={handleClick}
          >
            STOP
          </button>
          }
      </div>
    </div>
  )
}
export default Training
