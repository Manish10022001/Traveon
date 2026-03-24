import { useState } from "react";
import destination from "../data/destination.json";
import "../styles/destination.css";
import { useNavigate } from "react-router-dom";
const tagColors = {
  Romantic: "#e8a0bf",
  Cultural: "#a0c4e8",
  Adventure: "#a0e8b0",
  Luxury: "#e8d5a0",
  Exotic: "#e8b0a0",
};

// get all tags including 'All'
const allTags = ["All", ...new Set(destination.map((d) => d.tag))];

// single destination card component
function DestinationCard({ dest }) {
  const navigate = useNavigate();
  return (
    <div className="card">
      <div className="cardImgWrap">
        <img
          src={dest.img}
          alt={dest.name}
          className="cardImg"
          loading="lazy"
        />
        <div className="cardImgOverlay" />
        <span
          className="cardTag"
          style={{ background: tagColors[dest.tag] || "#c9a84c" }}
        >
          {dest.tag}
        </span>
        <div className="cardDays">{dest.days}</div>
      </div>

      <div className="cardBody">
        <p className="cardCountry">{dest.country}</p>
        <h3 className="cardName">{dest.name}</h3>
        <p className="cardDesc">{dest.desc}</p>
        <div className="cardFooter">
          <div>
            <span className="cardFrom">from</span>
            <span className="cardPrice">{dest.price}</span>
          </div>
          <button
            className="cardCta"
            onClick={() => navigate(`/trip/${dest.id}`)}
          >
            View Trip →
          </button>
        </div>
      </div>
    </div>
  );
}

// main destinations section
export default function Destination() {
  const [activeTag, setActiveTag] = useState("All");
  const [searchVal, setSearchVal] = useState("");

  // filter destinations by tag and search input
  const filtered = destination.filter((d) => {
    const matchTag = activeTag === "All" || d.tag === activeTag;
    const matchSearch =
      d.name.toLowerCase().includes(searchVal.toLowerCase()) ||
      d.country.toLowerCase().includes(searchVal.toLowerCase());
    return matchTag && matchSearch;
  });

  return (
    <section className="section" id="destination">
      <div className="sectionHeader">
        <p className="eyebrow">Where to next?</p>
        <h2 className="title">Curated Destinations</h2>
        <p className="desc">
          Every journey is designed with obsessive attention to detail, local
          expertise, and a belief that travel should change you.
        </p>
      </div>

      <div className="filterBar">
        {/* Search */}
        <div className="searchWrap">
          <span className="searchIcon">⌕</span>
          <input
            type="text"
            placeholder="Search destinations..."
            className="searchInput"
            value={searchVal}
            onChange={(e) => setSearchVal(e.target.value)}
          />
        </div>

        {/* Tag filters */}
        <div className="tags">
          {allTags.map((tag) => (
            <button
              key={tag}
              className={`tagBtn ${activeTag === tag ? "tagBtnActive" : ""}`}
              onClick={() => setActiveTag(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Cards grid */}
      <div className="grid">
        {filtered.length > 0 ? (
          filtered.map((dest, i) => (
            <div key={dest.id} style={{ animationDelay: `${i * 0.07}s` }}>
              <DestinationCard dest={dest} />
            </div>
          ))
        ) : (
          <p className="noResults">
            No destinations found. Try a different search.
          </p>
        )}
      </div>
    </section>
  );
}
