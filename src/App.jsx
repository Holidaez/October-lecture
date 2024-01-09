import PokemonShowcase from './components/PokemonShowcase'
import './App.css'
import StatsComponent from './components/statsComponent'
import PokeMoves from './components/PokeMoves'


function App() {

  const baseStats ={
    hp:44,
    attack:48,
    def:65,
    spAtk:50,
    spDef:64,
    speed:43
  }

  return (
    <div className='background'>
    <PokemonShowcase/>
    <StatsComponent baseStats={baseStats}/>
    <PokeMoves/>
    </div>
  )
}

export default App
