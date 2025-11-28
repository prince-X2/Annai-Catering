import React, { useState } from 'react'

const Contact = () => {
  const [showModal, setShowModal] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = () => {
    if (phoneNumber.length >= 10) {
      setShowModal(true);
      setPhoneNumber('');
      setError('');
      setTimeout(() => setShowModal(false), 3000);
    } else {
      setError('Please enter a valid phone number (minimum 10 digits)');
    }
  };


  return (
    <div id="contact" className='contact-page-wrapper'>
      <h1 className='primary-heading'>Have a Question In Mind?</h1>
      <h1 className='primary-heading'>Let us Help You</h1>
      <p className='primary-text'>Drop Down Your Contact Our Personal Chef will contact You in SHORTLY!</p>
      <div className='contact-form-container'>
        <input 
          type='tel'
          placeholder='Your Phone Number'
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <button className='secondary-button' onClick={handleSubmit}>
          Submit
        </button>
      </div>


      {showModal && (
        <div className='modal-overlay'>
          <div className='modal-content'>
            <div className='modal-icon'>✓</div>
            <h2>Thank You!</h2>
            <p>We will contact you shortly!</p>
          </div>
        </div>
      )}
    </div>
  )
}
export default Contact;
