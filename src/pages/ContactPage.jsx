import portrait from "../../images/regine.png";

const socialLinks = [
  {
    icon: "fab fa-facebook-f",
    label: "Facebook",
    value: "Regine Quimbo Tayrus",
    href: "https://www.facebook.com/regine.quimbo.tayrus",
  },
  {
    icon: "fab fa-instagram",
    label: "Instagram",
    value: "rgntyrs",
    href: "https://www.instagram.com/rgntyrs?igsh=MTk3dmVrNTB4ZjZncw==",
  },
  {
    icon: "fab fa-tiktok",
    label: "TikTok",
    value: "rgn_tyrs💋",
    href: "https://www.tiktok.com/@regine_tayrus?lang=en",
  },
  {
    icon: "fab fa-threads",
    label: "Threads",
    value: "rgntyrs",
    href: "https://www.threads.com/@rgntyrs",
  },
  {
    icon: "fas fa-envelope",
    label: "Gmail",
    value: "tayrusregine21@gmail.com",
    href: "mailto:reginetayrus@gmail.com",
  },
  {
    icon: "fas fa-phone",
    label: "Contact Number",
    value: "+63 9708912472",
    href: "tel:+639708912472",
  },
];

export default function ContactPage() {
  return (
    <main>
      <section className="contact">
        <div className="contact-container">
          <div className="contact-left">
            <span className="subtitle">Let&apos;s Connect</span>
            <h2>Get In Touch</h2>
            <span className="subtitle">Let&apos;s Connect</span>
            <div className="line" />
            <p>
              I&apos;m always open to new opportunities, collaborations, or
              just a friendly hello. Feel free to reach out through any of the
              platforms below!
            </p>

            <div className="social-list">
              {socialLinks.map((social) => (
                <a
                  className="social-card"
                  href={social.href}
                  key={social.label}
                  target={
                    social.href.startsWith("https://") ? "_blank" : undefined
                  }
                  rel={
                    social.href.startsWith("https://")
                      ? "noreferrer"
                      : undefined
                  }
                >
                  <i className={social.icon} aria-hidden="true" />
                  <div>
                    <h4>{social.label}</h4>
                    <span>{social.value}</span>
                  </div>
                </a>
              ))}
            </div>

            <h3 className="thanks">Thank you for visiting! ♡</h3>
          </div>

          <div className="contact-right">
            <img className="main-img" src={portrait} alt="Regine Tayrus" />
          </div>
        </div>
      </section>

      <section className="message-section">
        <div className="message-box">
          <div className="message-left">
            <div className="icon">
              <i className="far fa-paper-plane" aria-hidden="true" />
            </div>
            <div>
              <h3>Have a project in mind?</h3>
              <p>
                I&apos;d love to hear about it. Let&apos;s work together and
                create something amazing!
              </p>
            </div>
          </div>
          <a className="send-btn" href="mailto:reginetayrus@gmail.com">
            SEND MESSAGE <i className="fas fa-arrow-right" aria-hidden="true" />
          </a>
        </div>
      </section>
    </main>
  );
}
