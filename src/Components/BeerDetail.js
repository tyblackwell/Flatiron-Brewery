import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'

function BeerDetail(){
    const [beer, setBeer] = useState([])
    const params = useParams()
    
    console.log(params)
    useEffect(()=> {
        fetch(`https://api.punkapi.com/v2/beers/${params.id}`)
        .then(resp=>resp.json())
        .then(data => setBeer(data[0]))
    },[params.id])

    //add css to display beer information
    return (
    <>
     <h1>{beer.name}</h1>
     <h2>{beer.description}</h2>
     <h2>{beer.tagline}</h2>
     </>
    )
}

export default BeerDetail