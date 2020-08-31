import React from 'react';
import './Results.css';
import VideoCard from './VideoCard.js'


function Results() {
    return (
        <div className='results'>
           <VideoCard movie={movie}/> 
        </div>
    )
}

export default Results
