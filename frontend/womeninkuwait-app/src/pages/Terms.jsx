import React from 'react';
import '../Terms.css'; // Make sure this CSS file is linked

const Terms = () => {
  return (
    <div className="terms-page">
      <header className="terms-header">
        <div className="terms-header-container">
          <h1>Terms & Conditions</h1>
        </div>
      </header>

      <main className="terms-content-container">
        <div className="terms-content">
          <p className="last-updated">Last Updated: September 8, 2025</p>

          <h2>Welcome to Women in Kuwait</h2>
          <ul>
            <li>These Terms & Conditions govern your use of our website, services, events, and resources (collectively, the "Service").</li>
            <li>By accessing or using our Service, you agree to be bound by these terms.</li>
          </ul>

          <h2>About the Service</h2>
          <ul>
            <li>The Service provides information on events, workshops, and networking opportunities.</li>
            <li>We offer curated resources and mentorship to help you navigate the professional landscape in Kuwait.</li>
          </ul>

          <h2>User Conduct and Responsibilities</h2>
          <ul>
            <li>You agree to use the Service in a lawful, respectful, and professional manner.</li>
            <li>You are solely responsible for your interactions with other members.</li>
            <li>Harassment, discrimination, or abusive behavior will result in termination of your access.</li>
          </ul>

          <h2>Intellectual Property</h2>
          <ul>
            <li>All content on the Service is the property of Women in Kuwait or its suppliers and is protected by copyright laws.</li>
            <li>You may not reproduce or distribute any content without our express written permission.</li>
          </ul>

          <h2>Limitation of Liability</h2>
          <ul>
            <li>The Service is provided on an "as is" and "as available" basis without warranties of any kind.</li>
            <li>We are not liable for any damages arising from the use of this Service.</li>
          </ul>
          
          <h2>Changes to These Terms</h2>
          <ul>
            <li>We reserve the right to modify these Terms & Conditions at any time.</li>
            <li>Changes will be posted on this page, and you are advised to review it periodically.</li>
          </ul>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about these Terms & Conditions, please contact us at <a href="mailto:info@womeninkuwait.com">info@womeninkuwait.com</a>.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Terms;

