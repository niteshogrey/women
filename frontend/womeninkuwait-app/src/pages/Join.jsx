import React from 'react';
import '../Join.css';

const Join = () => {
  const [result, setResult] = React.useState("");
  const [showPopup, setShowPopup] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    const formData = new FormData(event.target);
    formData.append("access_key", "dbf7794c-3abd-4ebd-b924-5de5f8d0b0df");
    formData.append("subject", "New Membership Request");
    formData.append("from_name", "Women Kuwait Website");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    setIsLoading(false);

    if (data.success) {
      setResult("✅ Form Submitted Successfully");
      setShowPopup(true);
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult("❌ " + data.message);
      setShowPopup(true);
    }

    setTimeout(() => {
      setShowPopup(false);
    }, 4000);
  };

  return (
    <div className="join-page-container">
      <div className="join-content">
        <h1 className="join-title">
          Become a Women Kuwait
          <br />
          <span className="title-highlight">Member</span>
        </h1>
        <p className="join-description">Your journey starts here !!</p>
        
        <form className="join-form" onSubmit={onSubmit}>
          <div className="form-group">
            <input type="text" name="firstName" placeholder="First Name" required />
            <input type="text" name="lastName" placeholder="Last Name" required />
          </div>
          <div className="form-group">
            <input type="email" name="email" placeholder="Email Address" required />
          </div>

          <div className="form-group">
            <div className="phone-input-group">
              <select name="countryCode" required>
                <option value="+965" defaultValue>+965</option>
                <option value="+966">+966</option>
                <option value="+971">+971</option>
                <option value="+973">+973</option>
                <option value="+974">+974</option>
                <option value="+968">+968</option>
              </select>
              <input 
                type="tel" 
                name="mobileNumber" 
                placeholder="Mobile Number" 
                pattern="[0-9]{8}" 
                title="Please enter an 8-digit Kuwaiti mobile number."
                required 
              />
            </div>
          </div>

          <button type="submit" className="submit-button" disabled={isLoading}>
            {isLoading ? <span className="spinner"></span> : "Become a Member"}
          </button>

          <p className="terms-text">
            By clicking, you agree to our{' '}
            <a href="/terms" target="_blank" rel="noopener noreferrer">Terms & Conditions</a>,{' '}
            <a href="/policy" target="_blank" rel="noopener noreferrer">Privacy</a> and{' '}
            <a href="/faq" target="_blank" rel="noopener noreferrer">Data Protection Policy</a>.
          </p>
        </form>
      </div>

      {showPopup && (
        <div className={`popup ${result.startsWith("✅") ? "success" : "error"}`}>
          {result}
        </div>
      )}

      <div className="decorative-circle circle-1"></div>
      <div className="decorative-circle circle-2"></div>
      <div className="decorative-circle circle-3"></div>
      <div className="decorative-circle circle-4"></div>
      <div className="decorative-circle circle-5"></div>
    </div>
  );
};

export default Join;
