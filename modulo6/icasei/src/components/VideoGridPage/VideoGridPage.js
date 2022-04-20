import React, { Component } from 'react';
import VideoPage from '../VideoPage/VideoPage'
import { Grid } from '@material-ui/core'

export default class VideoGridPage extends Component {

    render() {
        return (
            <Grid container spacing={2}>
                {
                    this.props.videos.map((video) => {
                        return (
                            <Grid key={video.etag} item xl={4} lg={4} md={6} sm={6} xs={12}>
                                <VideoPage video={video} searchText={this.props.searchText} />
                            </Grid>
                        )
                    })
                }
            </Grid>
        )
    }
}
