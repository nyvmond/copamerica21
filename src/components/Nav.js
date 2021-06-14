import { Link } from "react-router-dom";
import "../styles/Nav.css";

function Nav() {
  return (
    <div className="navbar">
      <Link to="/equipos">Participan</Link>
      <Link to="/partidos">Partidos</Link>
      <Link to="/resultados">Resultados</Link>
    </div>
  );
}

export default Nav;
