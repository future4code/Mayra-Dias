import React, { Component } from 'react';
import YoutubeService from '../../services/api'
import VideoPlayerPage from '../../components/VideoPlayerPage/VideoPlayerPage'
import { NavLink } from 'react-router-dom';
import * as Styled from './styles'

export default class VideosPage extends Component {

    constructor() {
        super();
        this.YoutubeService = new YoutubeService();

        const queryStringParams = new URLSearchParams(window.location.search);
        this.videoId = queryStringParams.get('id');
        this.lastSearch = queryStringParams.get('lastSearch')
    }


    render() {
        return (
            <>
                <NavLink to={"/?search=" + this.lastSearch} style={{
                    width: '20vw'
                }}>
                    <Styled.Arrow  style={{
                        width: '40px',
                        height: '40px'}}/>
                </NavLink>
                <VideoPlayerPage id={this.videoId} style={{
                    width: '80vw'
                }} />
            </>
        );
    }
}
