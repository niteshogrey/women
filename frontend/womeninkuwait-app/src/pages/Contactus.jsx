import React from 'react';
import '../Contactus.css';

const Contactus = () => {
  return (
    <div className="contact-page">
      <header className="contact-header">
        <div className="contact-header-container">
          <h1>Contact Us</h1>
          <p>We'd love to hear from you! Feel free to reach out with any feedback, questions, or inquiries.</p>
        </div>
      </header>

      <main className="contact-form-container">
        <form className="contact-form">
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="fullName">Full Name*</label>
              <input type="text" id="fullName" name="fullName" placeholder="Jane Doe" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email*</label>
              <input type="email" id="email" name="email" placeholder="abc@email.com" required />
            </div>
          </div>

          <div className="form-group checkbox-group">
            <label>I am a</label>
            <div className="checkbox-options">
              <div className="checkbox-item"><input type="checkbox" id="member" name="role" value="Current Member" /> <label htmlFor="member">Current Member</label></div>
              <div className="checkbox-item"><input type="checkbox" id="student" name="role" value="College Student" /> <label htmlFor="student">College Student</label></div>
              <div className="checkbox-item"><input type="checkbox" id="grad" name="role" value="Recent Grad" /> <label htmlFor="grad">Recent Grad</label></div>
              <div className="checkbox-item"><input type="checkbox" id="sponsor" name="role" value="Sponsor" /> <label htmlFor="sponsor">Sponsor</label></div>
              <div className="checkbox-item"><input type="checkbox" id="speaker" name="role" value="Speaker" /> <label htmlFor="speaker">Speaker</label></div>
              <div className="checkbox-item"><input type="checkbox"id="recruiter" name="role" value="Recruiter" /> <label htmlFor="recruiter">Recruiter</label></div>
              <div className="checkbox-item"><input type="checkbox" id="other" name="role" value="Other" /> <label htmlFor="other">Other</label></div>
            </div>
          </div>
           
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="6" placeholder="Your Message Here"></textarea>
          </div>

          <div className="form-actions">
            <button type="submit" className="submit-btn">SEND</button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default Contactus;
