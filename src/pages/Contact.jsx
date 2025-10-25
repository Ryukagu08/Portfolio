import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });
    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_s9pagj2';
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_fxdwqht';
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'zRSdQBtAvEFnJ_mWA';

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          setStatus({ 
            type: 'success', 
            message: 'Thank you for your message! I will get back to you soon.' 
          });
          setFormData({ name: '', email: '', message: '' });
          setTimeout(() => {
            setStatus({ type: '', message: '' });
          }, 5000);
        },
        (error) => {
          console.error('FAILED...', error);
          setStatus({ 
            type: 'error', 
            message: 'Oops! Something went wrong. Please try again or email me directly.' 
          });
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="contact-intro">
          Have a question or want to work together? Feel free to reach out!
        </p>
        <div className="contact-content">
          <form ref={form} onSubmit={handleSubmit} className="contact-form">
            {status.message && (
              <div className={`form-status ${status.type}`}>
                {status.message}
              </div>
            )}
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
                disabled={isSubmitting}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
                disabled={isSubmitting}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                placeholder="Your message here..."
                disabled={isSubmitting}
              ></textarea>
            </div>
            <button type="submit" className="submit-button" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
          <div className="contact-info">
            <h3>Let's Connect</h3>
            <p>I'm always open to discussing new projects, creative ideas, or opportunities.</p>
            <div className="info-item">
              <strong>Email:</strong>
              <a href="mailto:ryu.businesscontact@gmail.com">ryu.businesscontact@gmail.com</a>
            </div>
            <div className="info-item">
              <strong>Location:</strong>
              <span>Spain</span>
            </div>
            <div className="info-item">
              <strong>Availability:</strong>
              <span>Open to opportunities</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
