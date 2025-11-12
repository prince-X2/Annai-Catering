import React from 'react'
import { BsTwitter } from 'react-icons/bs';
import { BsYoutube } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footer-wrapper'>
        <div className='footer-section-one'>
            <div>
                <h1 className='primary-header'>Annai Catering Services</h1>
            </div>
            <div className='footer-icons'>
                <BsTwitter />
                <BsYoutube />
                <FaFacebookF />
            </div>
        </div>
        <div className='footer-section-two'>
            <div className='footer-section-columns'>
                <span>Quality</span>
                <span>Help</span>
                <span>Share</span>
                <span>Carrer</span>
                <span>Testimonials</span>
                <span>Work</span>
            </div>
            <div className='footer-section-columns'>
                <span>+91 7639125616</span>
                <span>duraiselvi@gmail.com</span>
                <span>annaicateringg@gmail.com</span>
            </div>
            <div className='footer-section-columns'>
                <span>Terms & Conditions</span>
                <span>Privacy Policy</span>
            </div>
        </div>
    </div>
  )
}

export default Footer;
