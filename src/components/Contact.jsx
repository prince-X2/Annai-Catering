import React, { useEffect, useState } from 'react';

const Contact = () => {
  const [showModal, setShowModal] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    const cleanedNumber = phoneNumber.replace(/\D/g, '');

    if (cleanedNumber.length < 10) {
      setError('Please enter a valid phone number (minimum 10 digits)');
      return;
    }

    try {
      setIsSubmitting(true);
      setError('');

      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phoneNumber: cleanedNumber }),
      });

      if (!response.ok) {
        throw new Error('Failed to send phone number');
      }

      setShowModal(true);
      setPhoneNumber('');
    } catch {
      setError('Unable to submit right now. Please try again in a moment.');
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (showModal) {
      const timer = setTimeout(() => {
        setShowModal(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [showModal]);

  return (
    <div id='contact' className='contact-page-wrapper'>
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
        <button className='secondary-button' onClick={handleSubmit} disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </div>

      {error && <p className='primary-text'>{error}</p>}

      {showModal && (
        <div className='modal-overlay'>
          <div className='modal-content'>
            <div className='modal-icon'>&#10003;</div>
            <h2>Thank You!</h2>
            <p>We will contact you shortly!</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
