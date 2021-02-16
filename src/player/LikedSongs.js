import React from 'react';
import "./LikedSongs.css" ;
import Header from "./Header.js";
import Banner from "./Banner.js";
import SongRow from "./SongRow.js";
import AccessTimeIcon from '@material-ui/icons/AccessTime';

import { useStateValue } from "../StateProvider";

function LikedSongs() {

    const [{spotify, playlists }, dispatch] = useStateValue();
    

    playlists?.items?.map(playlist=>{
        console.log("playlists.id -> ",playlists);
        spotify.getPlaylistTracks("3qfSUMYG1O22SvplZ6rglQ").then(tracks=>{
            console.log(tracks);
        }).catch("error");
        // <SongCard audioname={playlist.name} img={playlist.images[0].url}/>    
    })
    return (
        <div className="likedSongs">
        <Header/>
            <Banner/>
            <div className="likedSongs_body">
            <div className="songRow">
                    <div className="songRow_left">
                        <p>1 &nbsp;</p>    
                        <p>Title</p> 
                    </div>
                    <div className="songRow_center">
                        <p>Album Name</p>
                    </div>
                    <div className="songRow_right">
                        <AccessTimeIcon style={{    fontSize:"25px", color:"grey"}}/>
                    </div>
            </div>
            <hr/>
            <br/>
            <SongRow/>
            <SongRow/>
            <SongRow/>
            <SongRow/>
            <SongRow/> 
            </div>
            
        </div>
    )
}

export default LikedSongs
