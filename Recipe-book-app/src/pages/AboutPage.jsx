// src/pages/AboutPage.jsx
import { Link } from "react-router-dom";
import '../styles/App.css'

const team = [
  {
    initials: "AR",
    name: "Andre Ribeiro",
    role: "Frontend developer (in-progess)",

    github: "https://github.com/AndreRibeiro24",
    githubLabel: "github.com/AndreRibeiro24",
    avatarClass: "avatar-blue",
    photo:"https://avatars.githubusercontent.com/u/242829480?v=4" 
  },
  {
    initials: "JH",
    name: "Jeronimo De Haro",
    role: "Frontend developer (in-progress)",

    github: "https://github.com/momodeharo-dev",
    githubLabel: "github.com/jeronimodeharo",
    avatarClass: "avatar-teal",
  },
];

export default function AboutPage() {
  return (
    <div className="about-page">
      <h1>About this app</h1>
      <p className="about-sub">A recipe app to manage and save your favourite dishes.</p>

      <h2>The team</h2>
      <div className="cards-grid">
        {team.map((person) => (
          <div key={person.name} className="card">
            {person.photo ? <img src={person.photo} alt={person.name} className = "avatar-photo"/> : <div className ={`avatar ${person.avatarClass}`}>{person.initials}</div>

            }
            <p className="card-name">{person.name}</p>
            <p className="card-role">{person.role}</p>
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
