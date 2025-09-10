import React from 'react';
import '../Events.css'; // Don't forget to import the CSS file

// --- IMPORTANT ---
// Replace this with the correct path to your image in the assets folder
import eventsHeroImage from '../assets/static3.jpg';

// Placeholder data for events
const upcomingEventsData = [
  {
    image: 'https://placehold.co/600x400/ef512c/white?text=Workshop',
    title: 'Digital Marketing Masterclass',
    date: 'October 12, 2025 at 6:00 PM',
  },
  {
    image: 'https://placehold.co/600x400/de2f91/white?text=Networking',
    title: 'Founder\'s High Tea',
    date: 'November 5, 2025 at 4:00 PM',
  },
];

const pastEventsData = [
  {
    image: 'https://placehold.co/600x400/a9a9a9/white?text=Past+Event',
    title: 'Investment Readiness Bootcamp',
    date: 'August 20, 2025',
  },
  {
    image: 'https://placehold.co/600x400/a9a9a9/white?text=Past+Event',
    title: 'Personal Branding Workshop',
    date: 'July 15, 2025',
  },
];


const Events = () => {
  return (
    <div className="events-page">
      {/* --- HERO SECTION --- */}
      <section className="events-hero-section">
        <div className="events-hero-content">
          <h1 className="events-hero-title">Upcoming Events</h1>
          <p className="events-hero-description">
            Take part in exclusive events that connect our members with
            Kuwait's industry leaders, professional development resources, and
            transformative career opportunities.
          </p>
        </div>
        <img 
          src={eventsHeroImage} 
          alt="Women in Kuwait networking at an event" 
          className="events-hero-bg-image"
        />
      </section>

      {/* --- EVENT LISTING SECTIONS --- */}
      <section className="events-list-section">
        <div className="events-list-container">
          <h2 className="events-list-title">Next Up</h2>
          <div className="events-grid">
            {upcomingEventsData.map((event, index) => (
              <div className="event-card upcoming" key={index}>
                <div className="event-card-image-container">
                  <img src={event.image} alt={event.title} className="event-card-image" />
                </div>
                <div className="event-card-content">
                  <h3 className="event-card-title">{event.title}</h3>
                  <p className="event-card-date">{event.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="events-list-section">
        <div className="events-list-container">
          <h2 className="events-list-title">Past Events</h2>
          <div className="events-grid">
            {pastEventsData.map((event, index) => (
              <div className="event-card" key={index}>
                <div className="event-card-image-container">
                  <img src={event.image} alt={event.title} className="event-card-image" />
                </div>
                <div className="event-card-content">
                  <h3 className="event-card-title">{event.title}</h3>
                  <p className="event-card-date">{event.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;

