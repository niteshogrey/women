import React from 'react';
import '../Join.css'; // Don't forget to import the CSS file

const Join = () => {
  return (
    <div className="join-page-container">
      <div className="join-content">
        <h1 className="join-title">
          Become a Women Kuwait
          <br />
          <span className="title-highlight">Member</span>
        </h1>
        <p className="join-description">
          Your journey starts here !!
        </p>
        
        <form className="join-form">
          <div className="form-group">
            <input type="text" id="firstName" placeholder="First Name" required />
            <input type="text" id="lastName" placeholder="Last Name" required />
          </div>
          <div className="form-group">
            <input type="email" id="email" placeholder="Email Address" required />
          </div>

          {/* UPDATED: Wrapped in a form-group for consistency */}
          <div className="form-group">
            <div className="phone-input-group">
              <select id="countryCode" name="countryCode" required>
                <option value="+965" selected>+965</option>
                <option value="+966">+966</option>
                <option value="+971">+971</option>
                <option value="+973">+973</option>
                <option value="+974">+974</option>
                <option value="+968">+968</option>
              </select>
              <input 
                type="tel" 
                id="mobileNumber" 
                placeholder="Mobile Number" 
                pattern="[0-9]{8}" 
                title="Please enter an 8-digit Kuwaiti mobile number."
                required 
              />
            </div>
          </div>

          <button type="submit" className="submit-button">
            Become a Member
          </button>
        </form>
      </div>
      
      {/* Decorative background elements */}
      <div className="decorative-circle circle-1"></div>
      <div className="decorative-circle circle-2"></div>
      <div className="decorative-circle circle-3"></div>
      <div className="decorative-circle circle-4"></div>
      <div className="decorative-circle circle-5"></div>
    </div>
  );
};

export default Join;

