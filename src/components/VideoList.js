import React from 'react'
import { Grid, Paper, Typography } from "@material-ui/core"


function VideoList({ videos, onVideoSelect }) {



    return (
        <React.Fragment>
            { videos.map((video, i) =>

                <Grid key={i} item xs={12} >
                    {console.log('video item', video)}
                    <Paper style={{ display: 'flex', alignItems: 'center' }} cursor="poiter" onClick={() => onVideoSelect(video)}>
                        <img style={{ marginRight: '20px' }} alt="thumbnail"
                            src={video.snippet.thumbnails.medium.url}
                        />
                        <Typography variant="subtitle1">
                            <b>{video.snippet.title}</b>
                        </Typography>
                    </Paper>
                </Grid>
            )}
        </React.Fragment>
    )

}

export default VideoList
