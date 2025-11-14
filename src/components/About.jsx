import React from 'react'
import AboutBackground from "../assets/about-background.png";
import AboutBackgroundImage from "../assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs"

const About = () => {
  return (
  <div id="about" className='about-section-container'>
      <div className='about-background-image-container'>
        <img src={AboutBackground} alt='' />
      </div>
      <div className='about-section-image-container'>
        <img src={AboutBackgroundImage} alt='' />
      </div>
  <div className='about-section-text-container'>
           <p className='primary-subheading'>About Us</p>
           <h1 className='primary-heading'>
            Fresh, flavorful & Healthy dishes crafted daily.
            </h1>
            <p className='primary-text'>
         Our chef crafts flavors with passion, using fresh ingredients, creating memorable dishes and warm hospitality, delivering exceptional dining experiences always.
            </p>
            <div className='about-buttons-container'>
              <button className='secondary-button'>Learn More</button>
              <a
                href="https://drive.google.com/drive/folders/1MwQr02FBVBvhlx09F5us-6xSbK6w45Sf?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className='watch-video-button'
              >
                <BsFillPlayCircleFill /> Pervious Orders
              </a>
            </div>
      </div>
      
    </div>
  )
}

export default About
