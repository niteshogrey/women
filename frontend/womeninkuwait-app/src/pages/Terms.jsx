import React from 'react';
import '../Terms.css'; 

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

          {/* Section 1 */}
          <div className="terms-section">
            <div className="section-header">
              <div className="section-number">1</div>
              <h2>Welcome to Women in Kuwait</h2>
            </div>
            <div className="section-content">
              <ul>
                <li>These Terms & Conditions explain how you can use our website, services, events, and resources (together, the “Service”).</li>
                <li>By becoming a member or accessing our Service, you agree to these terms.</li>
              </ul>
            </div>
          </div>

          {/* Section 2 */}
          <div className="terms-section">
            <div className="section-header">
              <div className="section-number">2</div>
              <h2>About the Service</h2>
            </div>
            <div className="section-content">
              <ul>
                <li>Women Kuwait provides information and access to events, workshops, and networking opportunities.</li>
                <li>We also share curated resources, mentorship, and collaborations that help women navigate both personal and professional growth in Kuwait.</li>
              </ul>
            </div>
          </div>

          {/* Section 3 */}
          <div className="terms-section">
            <div className="section-header">
              <div className="section-number">3</div>
              <h2>User Conduct and Responsibilities</h2>
            </div>
            <div className="section-content">
              <ul>
                <li>You are responsible for your interactions with other members.</li>
                <li>Harassment, discrimination, or abusive behavior will not be tolerated and may result in removal from the community.</li>
                <li>Content shared within the community should be respectful and constructive.</li>
              </ul>
            </div>
          </div>

          {/* Section 4 */}
          <div className="terms-section">
            <div className="section-header">
              <div className="section-number">4</div>
              <h2>Intellectual Property</h2>
            </div>
            <div className="section-content">
              <ul>
                <li>All content on the Service is the property of Women Kuwait or its partners and is protected by copyright law.</li>
                <li>You may not reproduce, share, or distribute any content without our written permission.</li>
              </ul>
            </div>
          </div>

          {/* Section 5 */}
          <div className="terms-section">
            <div className="section-header">
              <div className="section-number">5</div>
              <h2>Limitation of Liability</h2>
            </div>
            <div className="section-content">
              <ul>
                <li>Our Service is provided on an “as is” and “as available” basis. While we aim to create the best possible experience, we make no guarantees or warranties of any kind.</li>
                <li>Women Kuwait is not liable for any damages or losses that arise from your use of the Service.</li>
              </ul>
            </div>
          </div>
          
          {/* Section 6 */}
          <div className="terms-section">
            <div className="section-header">
              <div className="section-number">6</div>
              <h2>Changes to These Terms</h2>
            </div>
            <div className="section-content">
              <ul>
                <li>We may update or modify these Terms & Conditions at any time.</li>
                <li>Any changes will be published on this page, and continued use of the Service means you accept those changes.</li>
              </ul>
            </div>
          </div>

          {/* Section 7 */}
          <div className="terms-section">
            <div className="section-header">
              <div className="section-number">7</div>
              <h2>Contact Us</h2>
            </div>
            <div className="section-content">
              <p>
                If you have any questions about these Terms & Conditions, please contact us at <a href="mailto:Info@womenkuwait.com">Info@womenkuwait.com</a>.
              </p>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default Terms;