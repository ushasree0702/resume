import { useNavigate } from "react-router-dom";
import "./Contact.css";

function Contact() {
  const navigate = useNavigate();
  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        {/* Section Header */}
        <div className="contact-header">
          <p>GET IN TOUCH</p>

          <h2>Let's Work Together</h2>

          <span>
            Have a project, opportunity, or just want to connect? I'd love to
            hear from you.
          </span>
        </div>

        <div className="contact-content">
          {/* Contact Information */}
          <div className="contact-info">
            <h3>Contact Information</h3>

            <div className="contact-card">
              <div className="contact-icon">✉</div>

              <div>
                <small>Email</small>

                <a href="mailto:ushamandhakalla@gmail.com">
                  ushamandhakalla@gmail.com
                </a>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon">☎</div>

              <div>
                <small>Phone</small>

                <a href="tel:+919705650276">+91 9705650276</a>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon">📍</div>

              <div>
                <small>Location</small>

                <p>Bangalore, India</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="social-links">
              <a
                href="https://www.linkedin.com/in/usha-m-971758229/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>

              <a
                href="https://github.com/ushasree0702/resume"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* ==================================================
              CONTACT FORM - TEMPORARILY COMMENTED
              Enable this when you connect EmailJS / Backend API
              ================================================== */}

          {/*
          <div className="contact-form">

            <h3>Send Me a Message</h3>

            <div className="form-group">
              <label>Name</label>

              <input
                type="text"
                placeholder="Enter your name"
              />
            </div>

            <div className="form-group">
              <label>Email</label>

              <input
                type="email"
                placeholder="Enter your email"
              />
            </div>

            <div className="form-group">
              <label>Message</label>

              <textarea
                rows="5"
                placeholder="Write your message..."
              ></textarea>
            </div>

            <button className="send-btn">
              Send Message →
            </button>

          </div>
          */}
        </div>
      </div>
    </section>
  );
}

export default Contact;
