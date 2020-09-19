import React from 'react'
import './VideoCard.css'

function VideoCard({ movie }) {
    return (
        <div className='videoCard' >
            <img src='https://fondosmil.com/fondo/12733.jpg' alt='' />
            <p>This is a film about coding</p>
            <h2>Movie title</h2>
            <p>Number of likes ...</p>
        </div>
    )
}

export default VideoCard
