function StatsComponent({ baseStats }) {
    console.log("stats component rendered")
    console.log("Base Stats in stats component", baseStats)
    function handleClick () {
        alert(`Special Attack is ${baseStats.spAtk}, Special Defense is ${baseStats.spDef}`)
    }
    return (
        <div>
            <h1>Stats Component</h1>
            <table>
                <tbody>
                    <tr>
                        <td>Hit Points</td>
                        <td>{baseStats.hp}</td>
                    </tr>
                    <tr>
                        <td>Attack</td>
                        <td>{baseStats.attack}</td>
                    </tr>
                    <tr>
                        <td>Defense</td>
                        <td>{baseStats.def}</td>
                    </tr>
                    <tr>
                        <td>Speed</td>
                        <td>{baseStats.speed}</td>
                    </tr>
                </tbody>
            </table>
            <button onClick={() => handleClick()}>Show Special Stats</button>
        </div>
    )
}

export default StatsComponent
