import { useState, useEffect } from "react";
import Match from "./Team";
import "../styles/Team.css";

function Teams() {
  const [hasError, setErrors] = useState(false);
  const [matches, setMatches] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  function fetchData() {
    fetch("http://cursohenry.ddns.net:3001/matches")
      .then((response) => response.json())
      .then((json) => {
        setMatches(json);
        setIsLoading(true);
      })
      .catch((err) => setErrors(err));
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (!isLoading) {
    return null;
  }
  if (hasError) {
    return null;
  }

  return (
    <div>  
      <div className="boxcontainer">
        {matches &&
          matches.map((match) => {
            return (
              <div key={match.idMatch}>
                <Match date={match.dateMatch} local={match.teams.team} visitante={match.teams_1.team} />
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Teams;