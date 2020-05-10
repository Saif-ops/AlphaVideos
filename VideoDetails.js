import React, { Component } from 'react';

const VideoDetails=({video})=>
{
    if (!video)
    {
        return(
            <div> Loading..</div>
        )
    };
    const videosrc=`https://www.youtube.com/embed/${video.id.videoId}`
    return(
        <div>
        <div className='embed-responsive embed-responsive-16by9'>
            <iframe class='embed-responsive-item' src= {videosrc}/>

        </div>
        <div className="jumbotron">
            <h4>{video.snippet.title}</h4>
            <p>{video.snippet.description}</p>
            </div>
            </div>
    )
}
export default VideoDetails;