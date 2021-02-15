import React from 'react';
import "./LikedSongs.css" ;
import Header from "./Header.js";
import Banner from "./Banner.js";
import SongRow from "./SongRow.js";

function LikedSongs() {
    return (
        <div>
        <Header/>
            <Banner/>
            <hr/>
            <br/>
            <SongRow/>
            <SongRow/>
            <SongRow/>
            <SongRow/>
            <SongRow/> 
            
        </div>
    )
}

export default LikedSongs
