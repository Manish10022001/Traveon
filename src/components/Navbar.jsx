import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = ["Destination", "Experience", "Stories", "Contact"];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav className={`nav ${scrolled ? "navScrolled" : ""}`}>
      <div className="navInner">
        {/* Logo */}
        <a href="#" className="logo">
          <span className="logoIcon">✦</span>
          <span className="logoText">TraveOn</span>
        </a>

        {/* Links */}
        <div className="desktopLinks">
          {navLinks.map((item) => (
            <a key={item} href={`${item.toLowerCase()}`} className="navLink">
              {item}
            </a>
          ))}
          <button className="bookBtn">Book Now</button>
        </div>

        {/* Burger button */}
        <button className="burger" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "✕" : "☰"}
        </button>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="mobileMenu">
            {navLinks.map((item) => (
              <a
                key={item}
                href={`${item.toLowerCase()}`}
                className="mobileLink"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
