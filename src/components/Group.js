import '../styles/Positions.css'

// debe mostrarla tabla de posiciones obtenida en groups

function Group({name, score}) { 
    return (
        <div>
            <div className="table">{name} - {score} pts</div><br></br>
        </div>
    )

}

export default Group