import React from 'react';
import './VideoCard.css';

function VideoCard({movie}) {
    return (
        <div className="videoCard">
            <img
            src='https://st.hzcdn.com/simgs/9291f8780c54792c_3-9917/rendering.jpg'
            alt='img'
            />
            <h2>Olga PUSTOVALOVA</h2>
            <p>Interior designer</p>
        </div>
    )
}

export default VideoCard
