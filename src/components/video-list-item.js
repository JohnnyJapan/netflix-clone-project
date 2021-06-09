import React, { Component } from 'react';

const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

const VideoListItem = (props) => {

    const { movie } = props;

    return(
        <li className="list-group-item" onClick={handleClick}>
            <div className="media">
                <div className="media-left">    
                    <img className="media-object img-rounded" height="100px" width="100px" src={`${IMAGE_URL}${movie.poster_path}`} />
                </div>
                <div className="media-body">
                    <h5>{movie.title}</h5>
                </div>
            </div>
        </li>
    )

    function handleClick() {
        // console.log("Je suis le film que tu dois envoyer au parent : ", movie);
        props.callback(movie);
    }
}

export default VideoListItem;