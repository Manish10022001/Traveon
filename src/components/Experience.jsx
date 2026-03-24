import "../styles/experience.css";
const features = [
  {
    icon: "🗺",
    title: "Expert Curation",
    desc: "Each itinerary is built by local specialists who live these destinations.",
  },
  {
    icon: "🛡",
    title: "Fully Protected",
    desc: "100% financial protection and 24/7 emergency concierge support.",
  },
  {
    icon: "♻",
    title: "Sustainable Travel",
    desc: "We partner only with ethical, eco-conscious operators worldwide.",
  },
  {
    icon: "✨",
    title: "Bespoke Service",
    desc: "No two journeys are the same. Every detail tailored to you.",
  },
];

export default function Experience() {
  return (
    <section className="experience-section" id="experience">
      {/* overlay for background */}
      <div className="experience-overlay" />

      <div className="experience-inner">
        <p className="experience-eyebrow">The Voyara Difference</p>
        <h2 className="experience-title">Not a tour. An experience.</h2>

        <div className="experience-grid">
          {features.map((f) => (
            <div key={f.title} className="experience-card">
              <div className="experience-icon">{f.icon}</div>
              <h3 className="experience-cardTitle">{f.title}</h3>
              <p className="experience-cardDesc">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
