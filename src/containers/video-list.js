import React, { Component } from 'react';
import VideoListItem from '../components/video-list-item';

const VideoList = (props) => {
    
    const {movieList} = props;
    
    // Version similaire au const ci-dessus
    // let movieList = props.movieList;
    
    return(
        <div>
            <h1>Films à voir</h1>
            <ul>
                {
                    movieList.map(movie => {
                        return <VideoListItem key={movie.id} movie={movie} callback={receiveCallback} />
                    })
                }
                
            </ul>
        </div>
    )

    function receiveCallback(movie) {
        // console.log("Je suis le film reçu dans le parent : ", movie);
        props.callback(movie);
    }
    
}

export default VideoList;