import './Portfolio.css';

const Portfolio = () => {
  return (
    <div className="portfolio">
      <header className="header">
        <div className="nav-container">
          <nav className="nav">
            <div className="logo">NJ</div>
            <div className="nav-links">
              <a href="#about">About</a>
              <a href="#projects">Projects</a>
              <a href="#skills">Skills</a>
              <a href="#contact">Contact</a>
            </div>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="content-container">
          <h1>NANTHAGOPAL J</h1>
          <h2>Cybersecurity Practitioner</h2>
          <p>
            Results-driven cybersecurity professional with practical experience in implementing security protocols. 
            Committed to continuous learning and staying ahead in a fast-evolving tech environment.
          </p>
          <a href="#contact" className="btn">Get in Touch</a>
        </div>
      </section>
      
      <section id="about" className="about">
        <div className="content-container">
          <h2 className="section-title">About Me</h2>
          <p>
            I am a cybersecurity professional with hands-on experience in implementing day-to-day security protocols. 
            My expertise includes real-time log analysis, EDR implementation, and developing AI-assisted security tools. 
            I'm passionate about safeguarding critical data and digital assets through robust security strategies.
          </p>
        </div>
      </section>
      
      <section id="projects" className="projects">
        <div className="content-container">
          <h2 className="section-title">Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <h3>Real-time Log Analysis using Splunk</h3>
              <p>Designed and deployed a Splunk-based SIEM system to collect, normalize, and index logs from IDS tools. Simulated ICMP-based DoS attacks to assess detection and response efficiency.</p>
            </div>
            <div className="project-card">
              <h3>Wazuh EDR Implementation</h3>
              <p>Implemented Wazuh EDR in a virtualized environment with agents on Windows 11 and Kali Linux endpoints. Performed file integrity monitoring, security configuration assessment, and centralized log analysis.</p>
            </div>
            <div className="project-card">
              <h3>Agentic AI Assistant</h3>
              <p>Integrated AI agents (Gemini-Flash, Anthropic, OpenAI) to engineer a multi-functional assistant with human-readable explainability. Enabled capabilities including CRUD operations, SSH connectivity, YARA rule creation, and email dispatch.</p>
            </div>
          </div>
        </div>
      </section>
      
      <section id="skills" className="skills">
        <div className="content-container">
          <h2 className="section-title">Technical Skills</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Knowledge Areas</h3>
              <ul>
                <li>Computer Networks</li>
                <li>NIST Incident Response</li>
                <li>SANS Incident Response</li>
                <li>Vulnerability Management</li>
                <li>Source Code Review</li>
                <li>Reverse Engineering</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>Programming</h3>
              <ul>
                <li>Python</li>
                <li>SQL</li>
                <li>BASH</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>Tools & Platforms</h3>
              <ul>
                <li>Splunk</li>
                <li>Suricata</li>
                <li>Snort</li>
                <li>Wazuh EDR</li>
                <li>Ghidra</li>
                <li>GDB (PWNDBG)</li>
                <li>Wireshark</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>Soft Skills</h3>
              <ul>
                <li>Communication</li>
                <li>Customer Service</li>
                <li>Teamwork</li>
                <li>Operational Coordination</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
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
      
      <section id="contact" className="contact">
        <div className="content-container">
          <h2 className="section-title">Contact</h2>
          <div className="contact-info">
            <div className="contact-item">
              <span className="icon">📱</span>
              <span>+91 82483 32398</span>
            </div>
            <div className="contact-item">
              <span className="icon">📧</span>
              <span>nanthagopal@karunya.edu.in</span>
            </div>
            <div className="contact-item">
              <span className="icon">📧</span>
              <span>nanthagopalj5@gmail.com</span>
            </div>
            <div className="contact-item">
              <span className="icon">🔗</span>
              <span>linkedin.com/in/j-nanthagopal</span>
            </div>
            <div className="contact-item">
              <span className="icon">🐱</span>
              <span>github.com/ethanhunt009</span>
            </div>
          </div>
        </div>
      </section>
      
      <footer className="footer">
        <div className="content-container">
          <p>&copy; 2023 NANTHAGOPAL J. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;