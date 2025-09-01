import './Projects.css';

function Projects(){
  const projects = [
    {
      title: "Real-time Log Analysis using Splunk",
      description: "Designed and deployed a Splunk-based SIEM system to collect, normalize, and index logs from IDS tools. Simulated ICMP-based DoS attacks to assess detection and response efficiency."
    },
    {
      title: "Wazuh EDR Implementation",
      description: "Implemented Wazuh EDR in a virtualized environment with agents on Windows 11 and Kali Linux endpoints. Performed file integrity monitoring, security configuration assessment, and centralized log analysis."
    },
    {
      title: "Agentic AI Assistant",
      description: "Integrated AI agents (Gemini-Flash, Anthropic, OpenAI) to engineer a multi-functional assistant with human-readable explainability. Enabled capabilities including CRUD operations, SSH connectivity, YARA rule creation, and email dispatch."
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="content-container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;