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
              We offer a number of ways companies can partner with Women in Kuwait, including sponsorship of our professional development workshops, networking events, and speaker events. We join forces with companies to create new ways to network and offer our members employment opportunities.
            </p>
          </section>

          <section className="sponsors-section">
            <h2>Corporate Sponsors</h2>
            <p>
              Reach an audience of ambitious and recently graduated women in Kuwait. We partner with advertisers to build brand awareness and align brands with the largest professional women's networking organization in the nation. Your company will be able to market products and services directly.
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
