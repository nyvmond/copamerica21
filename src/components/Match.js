import '../styles/Teams.css'


function Team ({date, local, visitante}){
    return (
        <div className="boxteam">
        <div className="titteam">{date}</div>
        <div>{local} - vs - {visitante}</div>
        </div>
    )
}

export default Team