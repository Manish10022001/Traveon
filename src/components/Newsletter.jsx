import { useState } from "react";
import "../styles/newsletter.css";
export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (email.trim() === "") return;
    setSubmitted(true);
    setEmail("");
  };

  return (
    <section className="newsletter-section">
      <div className="newsletter-inner">
        <p className="newsletter-eyebrow">Stay Inspired</p>
        <h2 className="newsletter-title">Never miss a journey</h2>
        <p className="newsletter-desc">
          Early access to deals, hidden gems, and travel inspiration — delivered
          to your inbox.
        </p>

        <div className="newsletter-form">
          <input
            type="email"
            className="newsletter-input"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="newsletter-btn" onClick={handleSubmit}>
            Subscribe ✦
          </button>
        </div>

        {submitted && (
          <p className="newsletter-successMsg">
            ✦ &nbsp; You're on the list! We'll be in touch soon.
          </p>
        )}
      </div>
    </section>
  );
}
