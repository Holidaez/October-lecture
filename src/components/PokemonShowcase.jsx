// import squirtle from '../assets/squirtle.png'
import { Component, useContext } from 'react'
import './PokemonShowcase.css'
import { StatsContext } from '../context/StatsContext'


// function PokemonShowcase () {
//     console.log("Pokemon Showcase Rendered")

//     const {stats} = useContext(StatsContext)



//     const favPokemon = "Squirtle"
//     const pokeCharacteristics = {level:'5', type:"Water", highestStat:stats.def}



//     return(
//         <div>
//             <h1 style={{color:'blue'}}>{favPokemon}&apos;s Pokemon Showcase Component</h1>
//             <h3>Pokemon Characteristics</h3>
//             <div className='poke-characteristics-div'>Level: {pokeCharacteristics.level} Type: {pokeCharacteristics.type} Highest Stat: {pokeCharacteristics.highestStat} </div>
//             <img src='./squirtle.png' alt="Image of the pokemon Squirtle"/>
//         </div>
//     )
// }

// export default PokemonShowcase

class PokemonShowcase extends Component {
    constructor(props) {
        super(props)
        this.state = {
            test: false
        }
    }

    componentDidMount() {
        console.log("Inside on mount", this.state.test)
        this.setState(() => this.state.test = true)
    }

    componentDidUpdate() {
        console.log("Component updated fired", this.state.test)
        if(this.state.test === true) {
            console.log("the state is truthy")
        }
    }

    componentWillUnmount() {
        console.log("Component Unmounted")
    }

    render() {
        return (
            <div>
                {console.log(this.props)}
                <div>
                    {this.props.stats.def}
                </div>

            </div>
        )
    }
}

export default PokemonShowcase
