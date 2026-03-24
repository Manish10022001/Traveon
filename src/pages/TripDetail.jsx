import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import destination from "../data/destination.json";
import "../styles/tripdetail.css";

const tagColors = {
  Romantic: "#e8a0bf",
  Cultural: "#a0c4e8",
  Adventure: "#a0e8b0",
  Luxury: "#e8d5a0",
  Exotic: "#e8b0a0",
};

export default function TripDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    date: "",
    guests: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const dest = destination.find((d) => d.id === parseInt(id));

  if (!dest) {
    return (
      <div className="trip-notFound">
        <p>Trip not found.</p>
        <button onClick={() => navigate("/")}>← Go back home</button>
      </div>
    );
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.date || !form.guests) return;
    setSubmitted(true);
  };

  return (
    <div className="trip-page">
      {/* Hero */}
      <div className="trip-hero">
        <img src={dest.img} alt={dest.name} className="trip-heroImg" />
        <div className="trip-heroOverlay" />

        <button className="trip-backBtn" onClick={() => navigate("/")}>
          ← Back
        </button>

        <div className="trip-heroContent">
          <span
            className="trip-tag"
            style={{ background: tagColors[dest.tag] || "#c9a84c" }}
          >
            {dest.tag}
          </span>
          <h1 className="trip-heroTitle">{dest.name}</h1>
          <p className="trip-heroCountry">{dest.country}</p>
        </div>
      </div>

      {/* Body */}
      <div className="trip-body">
        {/* Left */}
        <div className="trip-left">
          <div className="trip-metaRow">
            <div className="trip-metaItem">
              <span className="trip-metaLabel">Duration</span>
              <span className="trip-metaValue">{dest.days}</span>
            </div>
            <div className="trip-metaItem">
              <span className="trip-metaLabel">Starting from</span>
              <span className="trip-metaValue">{dest.price}</span>
            </div>
            <div className="trip-metaItem">
              <span className="trip-metaLabel">Category</span>
              <span className="trip-metaValue">{dest.tag}</span>
            </div>
          </div>

          <h2 className="trip-sectionTitle">About this trip</h2>
          <p className="trip-desc">{dest.desc}</p>

          <h2 className="trip-sectionTitle">Trip Highlights</h2>
          <ul className="trip-highlights">
            {dest.highlights.map((h) => (
              <li key={h} className="trip-highlightItem">
                <div className="trip-highlightDot" />
                {h}
              </li>
            ))}
          </ul>
        </div>

        {/* Right */}
        <div className="trip-right">
          <div className="trip-bookingCard">
            <p className="trip-bookingTitle">Book this trip</p>
            <p className="trip-bookingPrice">
              {dest.price}
              <span className="trip-bookingPriceSub"> / person</span>
            </p>

            <div className="trip-formGroup">
              <label className="trip-formLabel">Full Name</label>
              <input
                className="trip-formInput"
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
              />
            </div>

            <div className="trip-formGroup">
              <label className="trip-formLabel">Email</label>
              <input
                className="trip-formInput"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
              />
            </div>

            <div className="trip-formGroup">
              <label className="trip-formLabel">Travel Date</label>
              <input
                className="trip-formInput"
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
              />
            </div>

            <div className="trip-formGroup">
              <label className="trip-formLabel">Guests</label>
              <input
                className="trip-formInput"
                type="number"
                name="guests"
                value={form.guests}
                onChange={handleChange}
              />
            </div>

            <button className="trip-bookBtn" onClick={handleSubmit}>
              Request Booking ✦
            </button>

            {submitted && (
              <p className="trip-successMsg">
                ✦ Request sent! We'll contact you soon.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
