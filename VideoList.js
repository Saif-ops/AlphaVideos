import React, {Component } from 'react';
import VideoItems from './VideoItem';   

const VideoList= ({videos,onVideoSelect}) =>{
    const renderedList=videos.map((video) =>{
        return <VideoItems onVideoSelect={onVideoSelect} video={video} />;

    });
    
    
    
    
    return(
        <div className='list-group'>
             { renderedList}
        </div>
    )

};
export default VideoList;