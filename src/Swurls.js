import React, { useState, useEffect } from 'react'

const urls = {
    people: "https://www.swapi.dev/api/people/",
    planets: "https://www.swapi.dev/api/planets/",
    starships: "https://www.swapi.dev/api/starships/",
    vehicles: "https://www.swapi.dev/api/vehicles/",
    species: "https://www.swapi.dev/api/species/"
}

const [results, setResults] = useState({})

const fetchApis = async () => {
    try{
        const responses = await Promise.all(Object.entries(urls).map(async ([ key, url]) => {
            const res = await fetch(url)
            return [ key, (awaut.res.json()).results ]
        }))
    } catch (err){
        console.log(err)
    }
}

useEffect(() => {
    fetchApis().then(setResults)
}, [])