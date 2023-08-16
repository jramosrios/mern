import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [pokemon, setPokemon] = useState([])
  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
      .then(res => setPokemon(res.data.results))
      .catch(err => console.log(err))
  }, [])
  return (
    <>
      <h1>Pokemon</h1>
      {
        pokemon.map((pokemonObj, idx) => (
          <p key={idx}>Name: {pokemonObj.name}</p>
        ))
      }
    </>
  )
}

export default App
