import PokemonShowcase from './components/PokemonShowcase'
import './App.css'
import StatsComponent from './components/statsComponent'
import PokeMoves from './components/PokeMoves'
import { Component } from 'react'


// function App() {

//   return (
//     <div className='background'>
//     <PokemonShowcase/>
//     <StatsComponent/>
//     {/* <PokeMoves/> */}
//     <PokeMoves>Something</PokeMoves>
//     </div>
//   )
// }

// export default App


class App extends Component {
  constructor() {
    super()
    this.state = {
      name: {
        firstName: 'Keegan',
        lastName: 'Abley'
      }
    }
  }


  render() {
    return (
      <div>
        Hello {this.state.name.firstName} {this.state.name.lastName}
        <PokemonShowcase stats={{def:50}}/>
      </div>
    )
  }
}

export default App
