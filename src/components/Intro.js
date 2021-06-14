import logo from "../copa_logo.png";
import {Link} from "react-router-dom"

function Intro() {
  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Datos de <code>Copa America</code> 2021.
        </p>

        <div><Link to='/home'>Estadísticas y resultados</Link></div>

    </div>
  );
}

export default Intro;
