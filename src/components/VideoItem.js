import React from 'react'
import { Grid, Paper, Typography } from "@material-ui/core"
function VideoItem({ video }) {

    return (
        <Grid item xs={12}>
            <h1>cc?</h1>
            <Paper style={{ display: 'flex', alignItems: 'center' }}>
                <img style={{ marginRight: '20px' }} alt="thumbnail"
                    src={video.snippet.thumbnails.medium.url}
                />
                <Typography variant="subtitle1">
                    <b>{video.snippet.title}</b>
                </Typography>
            </Paper>
        </Grid>
    )
}

export default VideoItem
