import { useState, useEffect } from "react";
import "../styles/testimonial.css";
const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Mumbai, India",
    text: "Voyara turned our dream Santorini trip into the most magical week of our lives. Every detail was perfect.",
    avatar: "PS",
  },
  {
    id: 2,
    name: "James Okafor",
    location: "Lagos, Nigeria",
    text: "The Kyoto itinerary was extraordinary. They knew exactly which hidden temples to visit. Unforgettable.",
    avatar: "JO",
  },
  {
    id: 3,
    name: "Sofia Mendes",
    location: "São Paulo, Brazil",
    text: "Patagonia with Voyara was life-changing. Expert guides, seamless logistics, breathtaking views.",
    avatar: "SM",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  // Auto rotate every 4.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="testimonial-section" id="stories">
      <div className="testimonial-header">
        <p className="testimonial-eyebrow">Traveler Stories</p>
        <h2 className="testimonial-title">Voices from the road</h2>
      </div>

      <div className="testimonial-grid">
        {testimonials.map((t, i) => (
          <div
            key={t.id}
            className={`testimonial-card ${
              i === active ? "testimonial-cardActive" : ""
            }`}
            onClick={() => setActive(i)}
          >
            <div className="testimonial-avatar">{t.avatar}</div>
            <p className="testimonial-text">"{t.text}"</p>
            <p className="testimonial-name">{t.name}</p>
            <p className="testimonial-location">{t.location}</p>
          </div>
        ))}
      </div>

      {/* Dot indicators */}
      <div className="testimonial-dots">
        {testimonials.map((_, i) => (
          <button
            key={i}
            className={`testimonial-dot ${
              i === active ? "testimonial-dotActive" : ""
            }`}
            onClick={() => setActive(i)}
          />
        ))}
      </div>
    </section>
  );
}
