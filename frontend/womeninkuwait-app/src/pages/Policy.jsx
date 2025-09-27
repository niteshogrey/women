import React from 'react';
import '../Policy.css'; 
const Policy = () => {
  return (
    <div className="policy-page">
      <header className="policy-header">
        <div className="policy-header-container">
          <h1>Privacy Policy</h1>
        </div>
      </header>

      <main className="policy-content-container">
        <div className="policy-content">
          <p className="last-updated">Last Updated: September 8, 2025</p>

          {/* Section 1 */}
          <div className="policy-section">
            <div className="section-header">
              <div className="section-number">1</div>
              <h2>Our Commitment to Your Privacy</h2>
            </div>
            <div className="section-content">
              <ul>
                <li>At Women Kuwait, your privacy matters. This policy explains how we collect, use, and protect your personal information when you interact with our website, events, and services.</li>
                <li>By using our services, you agree to the terms described here.</li>
              </ul>
            </div>
          </div>

          {/* Section 2 */}
          <div className="policy-section">
            <div className="section-header">
              <div className="section-number">2</div>
              <h2>Information We Collect</h2>
            </div>
            <div className="section-content">
              <ul>
                <li><strong>Personal Data:</strong> When you sign up, register for events, or contact us, we may collect information like your name, email address, and professional details.</li>
                <li><strong>Usage Data:</strong> We may automatically collect technical details such as your IP address, browser type, and how you interact with our website.</li>
                <li><strong>Cookies:</strong> We use cookies to track activity, improve site performance, and provide a smoother experience. You can disable cookies in your browser settings if you prefer.</li>
              </ul>
            </div>
          </div>
          
          {/* Section 3 */}
          <div className="policy-section">
            <div className="section-header">
              <div className="section-number">3</div>
              <h2>How We Use Your Information</h2>
            </div>
            <div className="section-content">
              <ul>
                <li>To provide and maintain our services, events, and community platform.</li>
                <li>To keep you updated about upcoming gatherings, workshops, and opportunities.</li>
                <li>To offer member support and respond to your inquiries.</li>
                <li>To monitor and improve our services through analysis and feedback.</li>
              </ul>
            </div>
          </div>

          {/* Section 4 */}
          <div className="policy-section">
            <div className="section-header">
              <div className="section-number">4</div>
              <h2>Data Security</h2>
            </div>
            <div className="section-content">
              <ul>
                <li>Protecting your data is important to us. We use industry-standard measures to keep your personal information safe.</li>
                <li>However, please note that no method of online transmission or storage is 100% secure. While we work hard to safeguard your data, we cannot guarantee absolute security.</li>
              </ul>
            </div>
          </div>

          {/* Section 5 */}
          <div className="policy-section">
            <div className="section-header">
              <div className="section-number">5</div>
              <h2>Changes to This Privacy Policy</h2>
            </div>
            <div className="section-content">
              <ul>
                <li>We may update this Privacy Policy from time to time.</li>
                <li>If changes are made, we will post the revised version here. Please review it periodically to stay informed.</li>
              </ul>
            </div>
          </div>

          {/* Section 6 */}
          <div className="policy-section">
            <div className="section-header">
              <div className="section-number">6</div>
              <h2>Contact Us</h2>
            </div>
            <div className="section-content">
              <p>
                If you have any questions about this Privacy Policy, please contact us at <a href="mailto:Info@womenkuwait.com">Info@womenkuwait.com</a>.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Policy;