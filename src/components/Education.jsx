import './Education.css';

function Education(){
  return (
    <section id="education" className="education">
      <div className="content-container">
        <h2 className="section-title">Education</h2>
        <div className="education-item">
          <h3>Karunya Institute of Technology and Sciences</h3>
          <div className="education-details">Pursuing Master's Degree in Cyber Security | GPA: 8.45 | 2024 – 2026</div>
        </div>
        <div className="education-item">
          <h3>Velalar College of Engineering and Technology</h3>
          <div className="education-details">Bachelor's in Information Technology | GPA: 7.48 | 2017 – 2021</div>
        </div>
      </div>
    </section>
  );
};

export default Education;