import { useContext } from "react"
import { StatsContext } from "../context/StatsContext"

function StatsComponent() {
    console.log("stats component rendered")
    // console.log("Base Stats in stats component", baseStats)

    const {stats, setStats} = useContext(StatsContext)
    // console.log("This is the context provided to my component: ", stats, setStats)


    function handleClick () {
        alert(`Special Attack is ${stats.spAtk}, Special Defense is ${stats.spDef}`)
    }

    const trainPokemon = () => {

        const newObj = {...stats}
        console.log("This is my stats copy: ", newObj)

        newObj.hp = newObj.hp + 5
        newObj.attack = newObj.attack + 5
        newObj.def = newObj.def + 5
        newObj.spAtk = newObj.spAtk + 5
        newObj.spDef = newObj.spDef + 5
        newObj.speed = newObj.speed + 5

        console.log("These are our stats after training", newObj)
        setStats(newObj)
    }

    return (
        <div>
            <h1>Stats Component</h1>
            <table>
                <tbody>
                    <tr>
                        <td>Hit Points</td>
                        <td>{stats.hp}</td>
                    </tr>
                    <tr>
                        <td>Attack</td>
                        <td>{stats.attack}</td>
                    </tr>
                    <tr>
                        <td>Defense</td>
                        <td>{stats.def}</td>
                    </tr>
                    <tr>
                        <td>Speed</td>
                        <td>{stats.speed}</td>
                    </tr>
                </tbody>
            </table>
            <button onClick={() => handleClick()}>Show Special Stats</button>
            <button onClick={() => trainPokemon()}>Train</button>
        </div>
    )
}

export default StatsComponent
