import logo from "./copa_logo.png";
import { Link, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Teams from './components/Teams'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Datos de <code>Copa America</code> 2021.
        </p>
        <div>
      </div>
      <div>
        <Link to='/home'>Copa América</Link>
        <Route exact path='/home'><Home /></Route>     
        <Route exact path='/equipos'><Teams /></Route>  
        <Route exact path='/partidos'><Home /></Route>  
        <Route exact path='/resultados'><Home /></Route>  
              </div>
      </header>
    </div>
  );
}

export default App;
