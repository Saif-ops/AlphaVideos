import React, { Component } from 'react';
import SearchBar from './Search';
import youtube from './api';
import VideoList from './VideoList';
import VideoDetails from './VideoDetails';  
const KEY = 'AIzaSyCLYvjTnBr6zCZNQmiIZNXH2d3ssqfBpk0';

class App extends Component{
  state = {videos : [],selectedVideos : null};
  onTermSubmit= async term=>{
    const response = await youtube.get('/search',{
      params:{
        q:term,
        part:'snippet',
        maxResults:5,
        key:KEY
      }
    });
    this.setState({videos : response.data.items});





  };
  onVideoSelect=(video)=>
  {
    console.log('video is : ',video);
    this.setState({selectedVideos:video});
  }

  render(){
    return(

      <div className='container'>
        <SearchBar onFormSubmit={this.onTermSubmit}/>
        <VideoDetails video={this.state.selectedVideos}/>
        <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}/>
        </div>
    )
  }
}



export default App;
