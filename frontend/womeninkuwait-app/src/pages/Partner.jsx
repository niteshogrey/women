import "../Partner.css";

const Partner = () => {
  return (
    <div className="partner-page">
      <header className="partner-header">
        <div className="partner-header-container">
          <h1>Our Partners</h1>
        </div>
      </header>

      <main className="partner-content-container">
        <div className="partner-content">
          <section className="collaborate-section">
            <h2>Collaborate With Us</h2>
            <p>
              As our partners, you can sponsor our development workshops, rent out studio space for group sessions, or host exclusive dinners. By partnering with us, your brand will be able to reach the brightest minds in Kuwait. 

            </p>
          </section>

          <section className="sponsors-section">
            <h2>Corporate Sponsors</h2>
            <p>
              Our diverse community of women in Kuwait will allow you to reach completely untapped markets. Partner with us to bring brand awareness and reach all demographics, from fresh graduates to established venture owners.
            </p>
            
            {/* <div className="sponsor-tier">
              <h3>Legacy Sponsor</h3>
              <div className="sponsor-logos">
                <img src="https://placehold.co/200x100/f0f0f0/333?text=Sponsor+1" alt="Sponsor 1 Logo" />
              </div>
            </div>

            <div className="sponsor-tier">
              <h3>Premier Sponsor</h3>
              <div className="sponsor-logos">
                <img src="https://placehold.co/200x100/f0f0f0/333?text=Sponsor+2" alt="Sponsor 2 Logo" />
                <img src="https://placehold.co/200x100/f0f0f0/333?text=Sponsor+3" alt="Sponsor 3 Logo" />
              </div>
            </div> 
            */}
          </section>
        </div>
      </main>
    </div>
  );
};

export default Partner;
