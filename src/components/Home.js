import {Link} from 'react-router-dom'

function Home() {
  return (
    <div>
      <div>Navigatios</div>
      <Link to='/equipos'>Participan</Link>
      <Link to='/partidos'>Partidos</Link>
      <Link to='/resultados'>Resultados</Link>
      <div>Contenido</div>
    </div>
  );
}

export default Home;
