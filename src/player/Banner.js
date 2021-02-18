import React from 'react';
import "./Banner.css";



function Banner({playlistName,playlistDescription,playlistImg}) {
    return (
        <div className="banner">
            
            <img src={playlistImg}/>
            <div>
                <p>PLAYLIST</p>
                <h1>{playlistName}</h1>
                <p>{playlistDescription}</p>
            </div>
        </div>
    )
}

export default Banner
