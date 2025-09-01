import './Skills.css';

function skills(){
  const skills = {
    knowledge: ["Computer Networks", "NIST Incident Response", "SANS Incident Response", "Vulnerability Management", "Source Code Review", "Reverse Engineering"],
    programming: ["Python", "SQL", "BASH"],
    tools: ["Splunk", "Suricata", "Snort", "Wazuh EDR", "Ghidra", "GDB (PWNDBG)", "Wireshark"],
    soft: ["Communication", "Customer Service", "Teamwork", "Operational Coordination"]
  };

  return (
    <section id="skills" className="skills">
      <div className="content-container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h3>Knowledge Areas</h3>
            <ul>
              {skills.knowledge.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
          <div className="skill-category">
            <h3>Programming</h3>
            <ul>
              {skills.programming.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
          <div className="skill-category">
            <h3>Tools & Platforms</h3>
            <ul>
              {skills.tools.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
          <div className="skill-category">
            <h3>Soft Skills</h3>
            <ul>
              {skills.soft.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;