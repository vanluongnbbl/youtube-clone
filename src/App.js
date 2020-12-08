
import { Grid } from '@material-ui/core';
import youtube from './api/youtube';
import './App.css';
import SearchBar from './components/SearchBar';
import VideoDetail from './components/VideoDetail';
import VideoList from './components/VideoList';
import React, { useState, useEffect } from 'react'
function App() {
  const [videos, setVideo] = useState([])
  const [selectedVideo, setSelectedVideo] = useState(null)

  const onVideoSelect = (video) => {
    setSelectedVideo(video)
  }


  const handleSubmit = async (searchTerm) => {
    const res = await youtube.get('search', {
      params: {
        part: 'snippet',
        maxResults: 5,
        key: 'AIzaSyAwbRWkx_9nG24p_pqr0dBvmn2XLD9d_u0',
        q: searchTerm
      },


    })
    setVideo(res.data.items)
    setSelectedVideo(res.data.items[0])
    console.log(res.data)
  }


  useEffect(() => {
    {
      handleSubmit("Blackpink jisoo")
    }
  })
  return (
    <Grid justify="center" container spacing={10}>
      <Grid item xs={12}>
        <Grid container spacing={10}>
          <Grid item xs={12}>
            <SearchBar
              onFormSubmit={handleSubmit}
            />
          </Grid>
          <Grid item xs={8}>
            <VideoDetail selectedVideo={selectedVideo} />
          </Grid>
          <Grid item xs={4}>
            <VideoList
              videos={videos}
              onVideoSelect={onVideoSelect}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
