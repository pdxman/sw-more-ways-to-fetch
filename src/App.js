
import './App.css';
import React, { useState, useEffect } from 'react'

function App() {
  const urls = {
    people: "https://swapi.dev/api/people/?format=json",
    planets: "https://swapi.dev/api/planets/?format=json",
    starships: "https://swapi.dev/api/starships/?format=json",
    vehicles: "https://swapi.dev/api/vehicles/?format=json",
    species: "https://swapi.dev/api/species/?format=json",
    films: "https://swapi.dev/api/films/?format=json"
  }

const [results, setResults] = useState({})

const fetchApis = async () => {
    try{
        const responses = await Promise.all(Object.entries(urls).map(async ([ key, url]) => {
            const res = await fetch(url)
            return [ key, (await res.json()).results ]
        }))

        return Object.fromEntries(responses)
    } catch (err){
        console.log(err)
    }
}

useEffect(() => {
    fetchApis().then(setResults)
    
}, [])

console.log(results)



  return (
    <div className="App">
      <h1>SW URLs</h1>
      
    </div>
  );
}

export default App;
