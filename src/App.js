import { Route } from "react-router-dom";
import "./App.css";
// Imposrts components to route
import Home from "./components/Home";
import Teams from "./components/Teams";
import Intro from "./components/Intro";
import Matches from "./components/Matches";
import Results from './components/Results'
import Groups from './components/Groups'

function App() {
  return (
    <div>
      <Route exact path="/"><Intro /></Route>
      <Route path="/home">
        
        <Home />
      </Route>
      <Route path="/equipos">
        
        <Teams />
      </Route>
      <Route path="/partidos">
        
        <Matches />
      </Route>
      <Route path="/resultados">
        
        <Results />
      </Route>
      <Route path="/posiciones">
        
        <Groups />
      </Route>
    </div>
  );
}

export default App;
