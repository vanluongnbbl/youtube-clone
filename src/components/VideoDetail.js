import React from 'react'
import { Paper, Typography } from '@material-ui/core'
function VideoDetail({ selectedVideo }) {
    if (!selectedVideo) return <div>Loading....</div>
    console.log(selectedVideo.id.videoId)
    const videoSrc = 'https://www.youtube.com/embed/${selectedVideo.id.videoId}'
    return (
        <React.Fragment>
            <Paper elevation={6} style={{ height: '70%' }}>
                <iframe frameBorder="0" height="100%" width="100%" title="Video Player" src={videoSrc} />
            </Paper>
            <Paper elevation={6} style={{ padding: '15px' }}>
                <Typography variant="h4">{selectedVideo.snippet.title}</Typography>
                <Typography variant="subtitle1">{selectedVideo.snippet.channelTitle}</Typography>
                <Typography variant="subtitle2">{selectedVideo.snippet.description}</Typography>
            </Paper>
        </React.Fragment>
    )
}

export default VideoDetail
