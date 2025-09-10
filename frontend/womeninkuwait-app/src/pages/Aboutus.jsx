import React, { useState } from 'react';
import '../Aboutus.css'; // Make sure the CSS file is named correctly

// --- IMPORTANT ---
// The background image for the mission section is now set in the CSS file.
// You can keep this import if you use it elsewhere, or remove it.
import missionImage from '../assets/static2.jpg'; // Example path
import founderImage from '../assets/founder.png'; // Example path for founder image
import founderSignature from '../assets/sign.png';

const valuesData = [
  {
    title: 'Community Focus',
    description: 'We are committed to fostering a non-competitive environment where women support and inspire one another. We work tirelessly to exceed the expectations of our members, the core of our community.',
  },
  {
    title: 'Integrity',
    description: 'Our core values reflect our commitment to our community, a display of integrity and authenticity in everything we do, collaboration among our members and partners, and a pledge to build members’ skills to support their professional and personal aspirations.',
  },
  {
    title: 'Leadership Development',
    description: 'Our mission and actions are authentic, and we are passionate in providing women with a safe, positive environment that encourages personal and professional growth.',
  },
   {
    title: 'Authenticity',
    description: 'We believe in the power of being genuine. We encourage our members to bring their whole selves to the table, fostering an environment of trust and open communication.',
  },
   {
    title: 'Empowerment',
    description: 'We are dedicated to empowering women by providing them with the resources, connections, and confidence they need to take control of their careers and achieve their goals.',
  },
];
const testimonialsData = [
    {
        quote: "In TWN, I’ve gained the confidence to put myself out there in order to succeed both in and out of the professional world. I’ve truly found a community where everyone is welcoming, accepting, and wants others to succeed.",
        author: "Amil Lieberman, TWN-University of Wisconsin-Madison"
    },
    {
        quote: "I love the feeling of pride I get when advising female peers and connecting them with seasoned professionals in a variety of industries.",
        author: "Julia Reichel, TWN-Barnard College of Columbia University"
    },
    {
        quote: "My first TWN meeting, I felt like I had finally found a place that celebrated my academic and career ambitions.",
        author: "Taylor Reed, TWN-San Diego State University"
    }
];

export default function AboutUs() {
  const [openValue, setOpenValue] = useState(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const toggleValue = (index) => {
    if (openValue === index) {
      setOpenValue(null); // Close it if it's already open
    } else {
      setOpenValue(index); // Open the new one
    }
  };

  return (
    <div className="about-page">
      {/* --- OUR MISSION HERO SECTION --- */}
      {/* The structure is simplified. The background image is now applied via CSS. */}
      <section className="mission-section">
        <div className="mission-content-container">
          <h1 className="mission-title">Our Mission</h1>
          <p className="mission-description">
            To cultivate and celebrate the ambition of women in Kuwait by connecting members with industry leaders, professional development resources, and transformative career opportunities.
          </p>
        </div>
      </section>

      {/* --- THREE PILLARS SECTION --- */}
      <section className="pillars-section">
        <div className="pillars-container">
          <div className="pillar-card">
            <h3 className="pillar-title">Networking</h3>
            <p className="pillar-description">
              We are revolutionizing networking in Kuwait by building a supportive community where ambitious women forge powerful, lasting connections.
            </p>
          </div>
          <div className="pillar-card">
            <h3 className="pillar-title">Development</h3>
            <p className="pillar-description">
              Women Kuwait offers professional and personal development opportunities, from leadership workshops to mentorship programs, designed to build confidence and expand your skills.
            </p>
          </div>
          <div className="pillar-card">
            <h3 className="pillar-title">Career</h3>
            <p className="pillar-description">
              We connect members with exclusive internship and career opportunities, helping you navigate your professional journey and land your dream role in Kuwait.
            </p>
          </div>
        </div>
      </section>

      {/* --- WOMAN BEHIND THE VISION SECTION --- */}
      <section className="vision-section">
        <div className="vision-content">
          <div className="vision-text-content">
            <h2 className="vision-title">Woman Behind the Vision</h2>
            <p className="founder-bio">
              I have been living in Kuwait for over two decades. Most of my life here was dedicated to my family, raising my children and making sure they had the best of me. As they grew up and became busy in their own worlds, I suddenly felt a gap in mine.
              <br /><br />
              That’s when I began to rediscover myself. I turned my passion for baking into a small home business, creating treats that first started in my kitchen for my children. I also joined Toastmasters, even though I was shy and unsure of myself. There, I learned to speak up, to lead, and most importantly—to believe in myself again.
              <br /><br />
              My journey has taught me that it’s never too late to start something new, to find your own voice, and to create meaning beyond your comfort zone. This is who I am today—a woman who once doubted herself, but chose growth, connection, and courage instead.
            </p>
          </div>
          {/* Container for the founder's image and caption */}
          <div className="founder-profile-container">
            <div className="vision-image-container">
              <img src={founderImage} alt="Maimuna, Founder & CEO" className="founder-image" /> 
            </div>
            <div className="founder-caption">
              <img src={founderSignature} alt="Maimuna's Signature" className="founder-signature" />
              <h3 className="founder-name">Maimuna Yusuf</h3>
              <p className="founder-role">Founder & CEO</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- OUR TEAM SECTION --- */}
      <section className="team-section">
        <h2 className="team-title">Our Team</h2>
        <div className="team-grid">
          <div className="team-card">
            <div className="team-photo-placeholder">TM</div>
            <div className="team-name">Team Member 1</div>
            <div className="team-role">Role</div>
          </div>
          <div className="team-card">
            <div className="team-photo-placeholder">TM</div>
            <div className="team-name">Team Member 2</div>
            <div className="team-role">Role</div>
          </div>
          <div className="team-card">
            <div className="team-photo-placeholder">TM</div>
            <div className="team-name">Team Member 3</div>
            <div className="team-role">Role</div>
          </div>
          <div className="team-card">
            <div className="team-photo-placeholder">TM</div>
            <div className="team-name">Team Member 4</div>
            <div className="team-role">Role</div>
          </div>
        </div>
      </section>
      {/* --- VALUES & TESTIMONIALS SPLIT SECTION --- */}
      <section className="values-testimonials-section">
        <div className="split-container">
          {/* --- OUR VALUES (LEFT SIDE) --- */}
          <div className="values-container">
            <h2 className="values-title">Our Values</h2>
            <p className="values-intro">
              Our core values reflect our commitment to our community, a display of integrity and authenticity in everything we do.
            </p>
            <div className="values-accordion">
              {valuesData.map((value, index) => (
                <div className="value-item" key={index}>
                  <button className="value-header" onClick={() => toggleValue(index)}>
                    <span className="value-item-title">{value.title}</span>
                    <span className="value-icon">{openValue === index ? '−' : '+'}</span>
                  </button>
                  <div className={`value-content ${openValue === index ? 'open' : ''}`}>
                    <p className="value-description">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* --- TESTIMONIALS (RIGHT SIDE) --- */}
          <div className="testimonials-container">
             <h2 className="testimonials-title">What Our Members Are Saying</h2>
             <div className="testimonial-card">
                <p className="testimonial-quote">"{testimonialsData[currentTestimonial].quote}"</p>
                <p className="testimonial-author">{testimonialsData[currentTestimonial].author}</p>
             </div>
             <div className="testimonial-nav">
                <button onClick={prevTestimonial} className="nav-arrow prev-arrow">‹</button>
                <div className="nav-dots">
                    {testimonialsData.map((_, index) => (
                        <span key={index} className={`dot ${currentTestimonial === index ? 'active' : ''}`}></span>
                    ))}
                </div>
                <button onClick={nextTestimonial} className="nav-arrow next-arrow">›</button>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}

