const moves = [{name:'tackle',id:1,damage:40}, {name:'water gun',id:2,damage:50}, {name:'protect',id:3,damage:0}, {name:'iron defense',id:4,damage:0}, {name:'hydro pump',id:5,damage:100}, {name:'scald',id:6,damage:60}]


function PokeMoves () {
    return (
        <div>
            <ul>
                {moves.map (move => (
                    <li key={move.id}>
                        Name: {move.name} Damage: {move.damage}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default PokeMoves
