import { useState, useEffect } from "react";
import "../styles/hero.css";

const heroWords = ["Discover", "Explore", "Escape", "Wander"];

const marqueeWords = [
  "Greece",
  "Japan",
  "Italy",
  "Morocco",
  "Maldives",
  "Argentina",
  "Peru",
  "Iceland",
  "Thailand",
  "Portugal",
  "Norway",
  "Bhutan",
];

const stats = [
  { value: "50K+", label: "Travelers" },
  { value: "120+", label: "Destinations" },
  { value: "15 Yrs", label: "Experience" },
  { value: "4.9★", label: "Rating" },
];

export default function Hero() {
  // index for changing words
  const [wordIndex, setWordIndex] = useState(0);

  // for animation (in/out effect)
  const [isOut, setIsOut] = useState(false);

  // used for parallax scroll effect
  const [offsetY, setOffsetY] = useState(0);

  //effect for changing the hero text every few seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsOut(true); // first make it go out

      // after small delay change word
      setTimeout(() => {
        setWordIndex((prev) => (prev + 1) % heroWords.length);
        setIsOut(false); // bring new word in
      }, 400);
    }, 2500);

    // cleanup ( preven memory leak)
    return () => clearInterval(interval);
  }, []);

  // effect for parallax background movement on scroll
  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY); // get scroll position
    };

    window.addEventListener("scroll", handleScroll);

    // removing event listener when component unmounts
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* hero section */}
      <section className="hero">
        {/* background image div (moving slightly on scroll) */}
        <div
          className="heroBg"
          style={{ transform: `translateY(${offsetY * 0.3}px)` }}
        />

        {/* dark overlay so text is visible */}
        <div className="heroOverlay" />

        {/* Main ConTent */}
        <div className="heroContent">
          <div className="heroPill">✈ &nbsp; Your world awaits</div>

          {/* main heading */}
          <h1 className="heroTitle">
            <span className={`heroRotating ${isOut ? "out" : ""}`}>
              {/* changing word */}
              {heroWords[wordIndex]}
            </span>
            <br />
            <span className="heroSub">the extraordinary</span>
          </h1>

          {/* description */}
          <p className="heroDesc">
            Curated journeys to the world's most extraordinary places. We don't
            plan trips — we craft stories.
          </p>

          {/* buttons */}
          <div className="heroBtns">
            <button className="btnPrimary">Explore Destinations</button>
            <button className="btnGhost">▶ &nbsp; Watch Our Story</button>
          </div>

          {/* stats section */}
          <div className="heroStats">
            {stats.map((s) => (
              <div key={s.label} className="stat">
                <span className="statVal">{s.value}</span>
                <span className="statLbl">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="scrollHint">scroll ↓</div>
      </section>

      {/* marquee section  */}
      <div className="marqueeWrap">
        <div className="marqueeTrack">
          {/* repeatingg words to make continuous effect */}
          {[...marqueeWords, ...marqueeWords, ...marqueeWords].map(
            (word, i) => (
              <span key={i} className="marqueeItem">
                ✦ {word}
              </span>
            )
          )}
        </div>
      </div>
    </>
  );
}
