import React,{forwardRef} from 'react';
import './VideoCard.css';
import TextTruncate from 'react-text-truncate';
import {ThumbUpSharp} from '@material-ui/icons';


const base_url = "https://image.tmdb.org/t/p/original/"

const VideoCard = forwardRef(({movie}, ref) =>{
   return (
        <div ref={ref} className="videoCard">
            <img
            src={`${base_url}${movie.backdrop_path || movie.poster_path} `}
            alt='img'
            />
            <TextTruncate
              line={2}
              element="p"
              truncateText='...'
              text={movie.overview}
              textTruncateChild={<a href="#">Read on</a>}
            />
            
            <h2>{movie.title || movie.original_name}</h2>
            <div className="videoCardFooter">
                Release date: {movie.release_date} 
            
            <div><ThumbUpSharp/>{movie.vote_count}</div></div>
               
           
        </div>
    )
})

export default VideoCard
