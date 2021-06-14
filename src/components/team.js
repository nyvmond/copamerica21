import '../styles/Teams.css'


function Team ({team, flag, info}){
    return (
        <div className="boxteam">
        <div className="titteam">{team}</div>
        <div className="flag"><img src={flag} alt="flag" /></div>
        </div>
    )
}

export default Team