import './Contact.css';

function Contact(){
  return (
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
  );
};

export default Contact;