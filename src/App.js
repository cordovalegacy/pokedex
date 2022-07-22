import { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [pokemon, setPokemon] = useState([])

  useEffect(() => {
    console.log("use Effect running")
    fetch ('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=347')
    .then((results) => {
      console.log(results)
      return results.json()
    }).then((res) => {
      console.log(res)
      return setPokemon(res.results)
    }).catch(error => {
      console.log(error)
    })
  }, [])

  return (
    <div className="App">
      {
      pokemon.map((pokemans) => {
        return <ul><li>{pokemans.name}</li></ul>
      })
    }
    </div>
  );
}

export default App;
