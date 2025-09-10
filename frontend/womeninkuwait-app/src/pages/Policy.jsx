import React from 'react';
import '../Policy.css'; // Make sure to create and link this CSS file

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

          <h2>Our Commitment to Your Privacy</h2>
          <ul>
            <li>This Privacy Policy explains how Women in Kuwait ("we," "us," "our") collects, uses, and protects your personal information when you use our Service.</li>
            <li>By using our services, you agree to the collection and use of information in accordance with this policy.</li>
          </ul>

          <h2>Information We Collect</h2>
          <ul>
            <li><strong>Personal Data:</strong> When you register or interact with us, we may ask for information like your name, email address, and professional details.</li>
            <li><strong>Usage Data:</strong> We automatically collect information such as your IP address, browser type, and how you interact with our website.</li>
            <li><strong>Cookies:</strong> We use cookies to track activity on our Service and hold certain information to improve your experience.</li>
          </ul>

          <h2>How We Use Your Information</h2>
          <ul>
            <li>To provide and maintain our Service and network.</li>
            <li>To notify you about upcoming events, workshops, and opportunities.</li>
            <li>To provide member support and respond to your inquiries.</li>
            <li>To monitor the usage of our Service and gather analysis to improve it.</li>
          </ul>

          <h2>Data Security</h2>
          <ul>
            <li>The security of your data is important to us, but no method of transmission over the Internet is 100% secure.</li>
            <li>We use commercially acceptable means to protect your Personal Data, but we cannot guarantee its absolute security.</li>
          </ul>

          <h2>Changes to This Privacy Policy</h2>
          <ul>
            <li>We may update our Privacy Policy from time to time.</li>
            <li>We will notify you of any changes by posting the new Privacy Policy on this page.</li>
          </ul>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at <a href="mailto:info@womeninkuwait.com">info@womeninkuwait.com</a>.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Policy;
