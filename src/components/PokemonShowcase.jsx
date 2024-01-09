// import squirtle from '../assets/squirtle.png'
import './PokemonShowcase.css'
function PokemonShowcase () {
    console.log("Pokemon Showcase Rendered")
    const favPokemon = "Squirtle"
    const pokeCharacteristics = {level:'5', type:"Water"}
    return(
        <div>
            <h1 style={{color:'blue'}}>{favPokemon}&apos;s Pokemon Showcase Component</h1>
            <h3>Pokemon Characteristics</h3>
            <div className='poke-characteristics-div'>Level: {pokeCharacteristics.level} Type: {pokeCharacteristics.type}</div>
            <img src='./squirtle.png' alt="Image of the pokemon Squirtle"/>
        </div>
    )
}

export default PokemonShowcase
