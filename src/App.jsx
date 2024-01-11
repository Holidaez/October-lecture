import PokemonShowcase from './components/PokemonShowcase'
import './App.css'
import StatsComponent from './components/statsComponent'
import PokeMoves from './components/PokeMoves'


function App() {


  return (
    <div className='background'>
    <PokemonShowcase/>
    <StatsComponent/>
    {/* <PokeMoves/> */}
    <PokeMoves>Something</PokeMoves>
    </div>
  )
}

export default App
