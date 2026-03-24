import "../styles/footer.css";
export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer-section" id="contact">
      <div className="footer-top">
        <div>
          <div className="footer-logo">
            <span className="footer-logoIcon">✦</span>
            <span className="footer-logoText">TRAVEON</span>
          </div>
          <p className="footer-desc">
            Crafting extraordinary journeys since 2026. Travel is not a hobby —
            it's a philosophy.
          </p>
        </div>

        {[
          {
            label: "Explore",
            links: ["Destinations", "Experiences", "Blog", "Offers"],
          },
          { label: "Company", links: ["About Us", "Team", "Careers", "Press"] },
          { label: "Support", links: ["Contact", "FAQ", "Privacy", "Terms"] },
        ].map((col) => (
          <div key={col.label}>
            <p className="footer-colTitle">{col.label}</p>
            {col.links.map((l) => (
              <a key={l} href="#" className="footer-link">
                {l}
              </a>
            ))}
          </div>
        ))}
      </div>

      <div className="footer-bottom">
        <span>© {currentYear} TraveOn. All rights reserved.</span>
      </div>
    </footer>
  );
}
