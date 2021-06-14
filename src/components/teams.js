import { useState, useEffect } from "react";

function Teams() {
  const [hasError, setErrors] = useState(false);
  const [teams, setTeams] = useState({});
  
  async function fetchData() {
    const res = await fetch("http://cursohenry.ddns.net:3001/teams");
    res
      .json()
      .then(res => setTeams(res))
      .catch(err => setErrors(err));
  }

  useEffect(() => {
    fetchData();
  },[]);

  return (
    <div>
      <div>Equipos</div>
            <div>
        {
        teams && teams.map(equip => {return <div key={equip.idTeam}>{equip.team}</div> }) 
      }
      </div>
      <hr />
      <span>Has error: {JSON.stringify(hasError)}</span>
    </div>
  );
}

export default Teams;
