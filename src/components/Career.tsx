import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Research Data Analyst</h4>
                <h5>Concentrix</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
            As a Data Research Analyst, I support data-driven decision-making by conducting in-depth research, analyzing large datasets, and delivering actionable insights.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Campus Ambassador</h4>
                <h5>Geeks For Geeks</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
            Engaged with the campus community to promote events, initiatives, and programs. Facilitated communication, encouraged participation, and supported outreach efforts effectively.
            </p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Career;
