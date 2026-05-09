import {Link} from "react-router-dom";

export default function AboutPage() {
  return (
    <div className = "about-page">
        <h1>About This App</h1>
        <p>A recipe book app to browse, manage and discorver recipes</p>

        <h2>Team</h2>
        <div className="team-member">
            <h3>Andre Ribeiro</h3>
            <p> add info or images later</p>

            <h3>Jeronimo De Haro</h3>
            <p> add info or images later</p>
        </div>

        <Link to="/">
        <button>Back to Home</button>
        </Link>
    </div>
  );
}
