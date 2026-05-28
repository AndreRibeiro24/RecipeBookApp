// src/pages/AboutPage.jsx
import { Link } from "react-router-dom";
import '../styles/App.css'

const team = [
  {
    initials: "AR",
    name: "Andre Ribeiro",
    role: "Frontend developer",
    bio: "Add a short bio about yourself here.",
    github: "https://github.com/andreriibeiro",
    githubLabel: "github.com/andreriibeiro",
    avatarClass: "avatar-blue",
  },
  {
    initials: "JH",
    name: "Jeronimo De Haro",
    role: "Frontend developer",
    bio: "Add a short bio about yourself here.",
    github: "https://github.com/jeronimodeharo",
    githubLabel: "github.com/jeronimodeharo",
    avatarClass: "avatar-teal",
  },
];

export default function AboutPage() {
  return (
    <div className="about-page">
      <h1>About this app</h1>
      <p className="about-sub">A recipe book app to manage and save your favourite recipes.</p>

      <h2>The team</h2>
      <div className="cards-grid">
        {team.map((person) => (
          <div key={person.name} className="card">
            <div className={`avatar ${person.avatarClass}`}>{person.initials}</div>
            <p className="card-name">{person.name}</p>
            <p className="card-role">{person.role}</p>
            <p className="card-bio">{person.bio}</p>
            <hr className="card-divider" />
            <a href={person.github} target="_blank" rel="noreferrer" className="github-link">
              {person.githubLabel}
            </a>
          </div>
        ))}
      </div>

      <Link to="/">
        <button className="back-btn">Back to home</button>
      </Link>
    </div>
  );
}
