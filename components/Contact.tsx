export default function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="container">

        <h2 className="contact-title">Contact Us</h2>

        <div className="contact-grid">

          {/* Form card */}
          <div className="contact-form-card">
            <form
              className="contact-form"
              action="mailto:info@sanctuaryforward.org"
              method="post"
              encType="text/plain"
            >
              <div className="form-row">
                <div className="field">
                  <label htmlFor="firstName">First Name</label>
                  <input type="text" id="firstName" name="firstName" placeholder="First Name" required />
                </div>
                <div className="field">
                  <label htmlFor="lastName">Last Name</label>
                  <input type="text" id="lastName" name="lastName" placeholder="Last Name" required />
                </div>
              </div>

              <div className="form-row">
                <div className="field">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" placeholder="you@example.com" required />
                </div>
                <div className="field">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" name="phone" placeholder="xxx-xxx-xxxx" />
                </div>
              </div>

              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows={5} placeholder="Your Message" required />
              </div>

              <button type="submit" className="btn btn-send">Send!!</button>
            </form>
          </div>

          {/* Visual panel */}
          <div className="contact-visual" role="img" aria-label="Community members joining hands">
            <span className="contact-chip">Make A Change!</span>
            <div className="contact-visual-body">
              <h3>More than shelter.<br />A path forward.</h3>
              <div className="contact-visual-actions">
                <a href="#" className="btn btn-donate">Donate Now</a>
                <div className="contact-socials">
                  <a href="#" className="social-icon" aria-label="Instagram">
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path fill="currentColor" d="M12 2c2.7 0 3 .01 4.07.06 1.06.05 1.79.22 2.42.46.65.25 1.2.59 1.76 1.15.56.56.9 1.11 1.15 1.76.24.63.41 1.36.46 2.42C21.99 9 22 9.3 22 12s-.01 3-.06 4.07c-.05 1.06-.22 1.79-.46 2.42a4.9 4.9 0 01-1.15 1.76c-.56.56-1.11.9-1.76 1.15-.63.24-1.36.41-2.42.46C15 21.99 14.7 22 12 22s-3-.01-4.07-.06c-1.06-.05-1.79-.22-2.42-.46a4.9 4.9 0 01-1.76-1.15 4.9 4.9 0 01-1.15-1.76c-.24-.63-.41-1.36-.46-2.42C2.01 15 2 14.7 2 12s.01-3 .06-4.07c.05-1.06.22-1.79.46-2.42.25-.65.59-1.2 1.15-1.76.56-.56 1.11-.9 1.76-1.15.63-.24 1.36-.41 2.42-.46C9 2.01 9.3 2 12 2zm0 5a5 5 0 100 10 5 5 0 000-10zm0 8.2a3.2 3.2 0 110-6.4 3.2 3.2 0 010 6.4zM17.8 5.6a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z" />
                    </svg>
                  </a>
                  <a href="#" className="social-icon" aria-label="Facebook">
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path fill="currentColor" d="M22 12a10 10 0 10-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0022 12z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact methods */}
        <div className="contact-methods">
          <div className="method">
            <div className="method-icon">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0122 16.92z" />
              </svg>
            </div>
            <h4>Call &amp; WhatsApp</h4>
            <p>+1 (000) 000-0000</p>
            <p>+1 (000) 000-0001</p>
          </div>

          <div className="method">
            <div className="method-icon">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h4>Referral Line</h4>
            <p>referrals@sanctuaryforward.org</p>
            <p>+1 (000) 000-0002</p>
          </div>

          <div className="method">
            <div className="method-icon">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </div>
            <h4>Write to Us</h4>
            <p>info@sanctuaryforward.org</p>
            <p>hello@sanctuaryforward.org</p>
          </div>
        </div>

      </div>
    </section>
  );
}
