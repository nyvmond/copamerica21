import { Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Teams from './components/Teams'
import Intro from './components/Intro'

function App() {
      return (
      <div>
        <Route exact path='/'><Intro /></Route> 
        <Route path='/home'><Home /></Route>     
        <Route path='/equipos'><Teams /></Route>
        <Route path='/partidos'><Home /></Route>  
        <Route path='/resultados'><Home /></Route>  
      </div>)
}

export default App;
