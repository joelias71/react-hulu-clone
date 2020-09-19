import React, { useState, useEffect } from 'react'
import './Results.css'
import VideoCard from './VideoCard'
import axios from '../data/axios'
import requests from '../data/requests'

function Results() {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        async function fetchData() {
            const req = await axios.get(requests.fetchActionMovies)
            setMovies(req.data.results)
            return req
        }

        fetchData()
    }, [])

    return (
        <div className='results' >
            {movies.map(movie => <VideoCard movie={movie} />)}
        </div>
    )
}

export default Results
