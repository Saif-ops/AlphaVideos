import React, { Component } from 'react';
import './videoItem.css';
const VideoItems=({video,onVideoSelect})=>{
    return(
        <div onClick={()=>onVideoSelect(video)} className="video-item">
        <div className="list-group-item">
            <img className='mr-3'src={video.snippet.thumbnails.medium.url}/>
            <div className='container'>
                <div className='header'>
                
                <h2>{video.snippet.title}</h2>
                </div>
                </div>
                </div>
            
        </div>

    )
}

export default VideoItems;