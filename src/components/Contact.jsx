import emailjs from '@emailjs/browser';
import React, { useEffect, useState } from 'react';

const Contact = () => {
  const [showModal, setShowModal] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const handleSubmit = async (event) => {
    event.preventDefault();
    const typedPhoneNumber = phoneNumber.trim();
    const cleanedNumber = phoneNumber.replace(/\D/g, '');

    if (cleanedNumber.length < 10) {
      setError('Please enter a valid phone number (minimum 10 digits)');
      return;
    }

    if (!serviceId || !templateId || !publicKey) {
      setError('EmailJS config is missing. Add VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY.');
      return;
    }

    try {
      setIsSubmitting(true);
      setError('');
      const templateParams = {
        phone_number: typedPhoneNumber,
        phone_number_clean: cleanedNumber,
        message: `New Customer's Phone Number: ${typedPhoneNumber}`,
      };

      await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        { publicKey }
      );

      setShowModal(true);
      setPhoneNumber('');
    } catch (submitError) {
      setError(submitError?.text || submitError?.message || 'Unable to submit right now. Please try again in a moment.');
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
      <form className='contact-form-container' onSubmit={handleSubmit}>
        <input
          type='tel'
          name='phone_number'
          placeholder='Your Phone Number'
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          autoComplete='tel'
          minLength={10}
          maxLength={15}
          required
          disabled={isSubmitting}
        />
        <button type='submit' className='secondary-button' disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>

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
