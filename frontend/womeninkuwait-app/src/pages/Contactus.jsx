import React from 'react';
import '../Contactus.css';

const Contactus = () => {
  const [result, setResult] = React.useState("");
  const [showPopup, setShowPopup] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    const formData = new FormData(event.target);
    formData.append("access_key", "dbf7794c-3abd-4ebd-b924-5de5f8d0b0df");
    formData.append("subject", "New Contact Form Submission");
    formData.append("from_name", "Women Kuwait Website");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    setIsLoading(false);

    if (data.success) {
      setResult("✅ Message Sent Successfully");
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
    <div className="contact-page">
      <header className="contact-header">
        <div className="contact-header-container">
          <h1>Contact Us</h1>
          <p>We'd love to hear from you! Feel free to reach out with any feedback, questions, or inquiries.</p>
        </div>
      </header>

      <main className="contact-form-container">
        <form className="contact-form" onSubmit={onSubmit}>
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
            <button type="submit" className="submit-btn" disabled={isLoading}>
              {isLoading ? <span className="spinner"></span> : "SEND"}
            </button>
          </div>

          <p className="terms-text">
            By clicking, you agree to our{' '}
            <a href="/terms" target="_blank" rel="noopener noreferrer">Terms & Conditions</a>,{' '}
            <a href="/policy" target="_blank" rel="noopener noreferrer">Privacy</a> and{' '}
            <a href="/faq" target="_blank" rel="noopener noreferrer">Data Protection Policy</a>.
          </p>
        </form>
      </main>

      {showPopup && (
        <div className={`popup ${result.startsWith("✅") ? "success" : "error"}`}>
          {result}
        </div>
      )}
    </div>
  );
};

export default Contactus;
