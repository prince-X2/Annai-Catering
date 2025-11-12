import React from 'react'
import profile1 from '../assets/profile1.jpg'
import {AiFillStar} from "react-icons/ai"

const Testimonals = () => {
  return (
    <div className='work-section-wrapper'>
        <div className='work-section-top'>
            <p className='primary-subheading'>Testimonals</p>
            <h1 className='primary-heading'>What they are Saying</h1>
            <p className='primary-text'>
                Hear how our food and service made their moments special.
            </p>
        </div>
        <div className='testimonial-section-bottom'>
            <p>“The catering was excellent, flavorful dishes and warm service throughout By Master Chef.”</p>
            <img src= {profile1} alt='Profile' />
            
            <div className='testimonials-stars-container'>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
            </div>
            <h2>Durai Selvi. J</h2>
        </div>

    </div>
  )
}

export default Testimonals
