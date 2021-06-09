import React, { Component } from 'react';

const YOUTUBE_URL = 'https://www.youtube.com/embed/';

const Video = ({videoId}) => {
    
    return(
        <div className="embed-responsive embed-responsive-16by9">
            <h1>Trailer</h1>
            <iframe classname="embed-responsive-item" height="300px" width="600px" src={`${YOUTUBE_URL}${videoId}`}></iframe>
        </div>
    )
}

export default Video;