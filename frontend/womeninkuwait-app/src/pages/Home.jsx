
import { Link } from 'react-router-dom';
import '../Home.css';
import React, { useState, useEffect, useCallback } from 'react';
// --- IMPORTANT ---
// Replace this with the correct path to your image in the assets folder
import connectImage from '../assets/static4.jpg'; 


const pressQuotes = [
  {
    quote: "Our goal is to capture high-achieving, ambitious young women at the most transformative time of their lives and have a positive impact on them. If we can do that, we can change the world.",
    source: "Syracuse University"
  },
  {
    quote: "The Women's Network succeeded in bridging the gap between interdisciplinary female students and connecting them to various professional opportunities.",
    source: "Kuwait Times"
  },
  {
    quote: "A fantastic initiative empowering the next generation of female leaders in Kuwait through mentorship and networking.",
    source: "Local Business Weekly"
  }
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide(current => (current === pressQuotes.length - 1 ? 0 : current + 1));
  }, []);

  const prevSlide = () => {
    setCurrentSlide(current => (current === 0 ? pressQuotes.length - 1 : current - 1));
  };
  
  const goToSlide = (index) => {
    setCurrentSlide(index);
  }

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    return () => clearInterval(slideInterval);
  }, [nextSlide]);


  return (
    <>
      {/* --- HERO SECTION --- */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Empowering Kuwait's
            <br />
            <span className="title-accent">Female Leaders</span>
          </h1>
          <div className="hero-footer">
            <p className="hero-description">
              The leading network for female entrepreneurs and professionals in
              Kuwait, fostering ambition through connections, resources, and
              career opportunities.
            </p>
            <Link to="/join" className="cta-button">
              Join The Network
            </Link>
          </div>
        </div>
      </section>

      {/* --- AMBITION SECTION --- */}
      <section className="ambition-section">
        <div className="ambition-content">
          <div className="video-placeholder">
            <div className="video-overlay">
              <svg
                className="play-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
              <p>Watch Our Story</p>
            </div>
          </div>
          <div className="ambition-text">
            <h2 className="ambition-title">
              Redefining
              <br />
              <span className="ambition-title-accent">Success</span>
            </h2>
            <p className="ambition-description">
              We are building a powerful, collaborative community where Kuwait's
              most ambitious women thrive.At Women Kuwait, we champion a new
              era of professional achievement—one built on mutual support,
              shared knowledge, and collective growth.
            </p>
            <Link to="/about-us" className="cta-button">
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>

      {/* --- STATS SECTION --- */}
      <section className="stats-section">
        <div className="stats-content">
          <div className="did-you-know-card">
            <h3 className="did-you-know-title">Did you Know?</h3>
            <p className="did-you-know-stat">
              Over <span className="stat-highlight">80%</span>
            </p>
            <p className="did-you-know-text">
              of professional opportunities are discovered through networking.
            </p>
          </div>
          <div className="impact-stats">
            <div className="stat-item">
              <p className="stat-number">500+</p>
              <p className="stat-label">Members</p>
            </div>
            <div className="stat-item">
              <p className="stat-number">25+</p>
              <p className="stat-label">Events Hosted</p>
            </div>
            <div className="stat-item">
              <p className="stat-number">15+</p>
              <p className="stat-label">Industry Partners</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- EVENTS SECTION --- */}
      <section className="events-section">
        <div className="events-content">
          <div className="events-info-left">
            {/* The text content is now wrapped in its own div for better styling */}
            <div className="events-info-text-content">
              <h3 className="events-info-title">Connect & Grow</h3>
              <div className="free-to-join">
                <p>Free to Join</p>
              </div>
              <p className="events-info-description">
                Expand your influence by meeting ambitious women from across
                Kuwait. Learn how to build and leverage your network, boost your
                confidence with new skills, and gain exposure to career-defining
                possibilities. Your journey starts here.
              </p>
              <Link to="/join" className="events-info-link">
                <span>Become a Member</span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.175 12.9167L12.4333 16.6584L13.5 17.725L19 12.225L13.5 6.725L12.4333 7.79167L16.175 11.5333H5V12.9167H16.175Z"
                    fill="currentColor"
                  />
                </svg>
              </Link>
            </div>
            {/* The new image is placed here */}
            <img 
              src={connectImage} 
              alt="A group of professional women in Kuwait" 
              className="events-info-image" 
              />
            
          </div>
          <div className="events-main-right">
            <div className="events-bg-lines"></div>
            <h2 className="events-main-title">
              Upcoming Events
              <br />
              in Kuwait
            </h2>
            <Link to="/events" className="events-cta-button">
              See All Events
            </Link>
          </div>
        </div>
      </section>

      {/* --- ADDED: RESOURCES SECTION --- */}
      <section className="resources-section">
        <div className="resources-content">
          <h2 className="resources-title">Our Resources</h2>
          <p className="resources-description">
            Women Kuwait empowers women to act on their own ambitions while
            recognizing key barriers women often encounter when entering and
            advancing within the workforce. We provide curated resources,
            workshops, and mentorship opportunities designed to help you
            navigate the unique professional landscape in Kuwait and build a
            thriving career.
          </p>
        </div>
      </section>
      <section className="collaboration-press-section">
        <div className="collaboration-press-content">
          <div className="collaboration-content-left">
            <h2 className="collaborate-title">Let's Collaborate</h2>
            <p className="collaborate-description">
              Our partners support TWN's efforts to empower future women leaders. We join forces with companies to create new ways to network, offer our members employment opportunities and our partners recruitment opportunities, and build brand collaborations.
            </p>
            <div className="partnership-grid">
              <div className="partnership-item">
                <h3>Sponsors</h3>
                <p>Sponsor our professional development workshops, networking events, speaker series, and more.</p>
              </div>
               <div className="partnership-item">
                <h3>Recruiters</h3>
                <p>Access our unparalleled talent pool to recruit ambitious, high-achieving women directly.</p>
              </div>
              <div className="partnership-item">
                <h3>Speakers</h3>
                <p>Share your industry experience and inspire the next generation of leaders in Kuwait.</p>
              </div>
              <div className="partnership-item">
                 <Link to="/partner" className="partner-cta-button">
                  Partner With Us
                </Link>
              </div>
            </div>
          </div>
          <div className="press-slider-right">
            <h3 className="press-title">In the Press</h3>
             <div className="press-slider-wrapper">
                <div 
                  className="press-slider-container" 
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {pressQuotes.map((item, index) => (
                    <div className="press-slide" key={index}>
                      <p className="press-quote">"{item.quote}"</p>
                      <p className="press-source">{item.source}</p>
                    </div>
                  ))}
                </div>
            </div>
            <div className="slider-nav">
              <button onClick={prevSlide} className="slider-arrow prev">&lt;</button>
              <button onClick={nextSlide} className="slider-arrow next">&gt;</button>
            </div>
            <div className="slider-dots-container">
              {pressQuotes.map((_, index) => (
                <button 
                  key={index} 
                  className={`slider-dot ${currentSlide === index ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
