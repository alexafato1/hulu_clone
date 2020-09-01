import React from 'react';
import './VideoCard.css';

const base_url = "https://image.tmdb.org/t/p/original/"

function VideoCard({movie}) {
    return (
        <div className="videoCard">
            <img
            src={`${base_url}${movie.backdrop_path}`}
            alt='img'
            />
            <h2>{movie.title}</h2>
            <p>Interior designer</p>
        </div>
    )
}

export default VideoCard
