import React, { useState, useEffect } from 'react'
import './Results.css'
import VideoCard from './VideoCard'
import axios from '../data/axios'
import FlipMove from 'react-flip-move'

function Results({ selectedOption }) {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        async function fetchData() {
            const req = await axios.get(selectedOption)
            setMovies(req.data.results)
            return req
        }

        fetchData()
    }, [selectedOption])

    return (
        <div className='results' >
            <FlipMove>
                {movies.map(movie => <VideoCard key={movie.id} movie={movie} />)}
            </FlipMove>
        </div>
    )
}

export default Results
