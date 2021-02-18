import React from 'react';
import "./LikedSongs.css" ;
import Header from "./Header.js";
import Banner from "./Banner.js";
import SongRow from "./SongRow.js";
import AccessTimeIcon from '@material-ui/icons/AccessTime';

import { useStateValue } from "../StateProvider";

function LikedSongs() {

    const [{spotify, playlists,user,usertoptracks }, dispatch] = useStateValue();

    console.log('usertoptracks -> ',usertoptracks);
    console.log('usertoptracks -> ',usertoptracks);
    console.log('usertoptracks -> ',usertoptracks);
    console.log('usertoptracks -> ',usertoptracks);
    usertoptracks?.items.slice(0,5).map((track,index)=>{
            console.log("index -> ",index); 
            console.log("track.album.name -> ", track.album.name); 
            console.log("track.artists[0].name -> ", track.artists[0].name); 
            console.log("track.artists[0].name -> ", track.album.images[0].url);
    })

    return (
        <div className="likedSongs">
        <Header/>
            <Banner playlistName ="LIKED SONGS" playlistDescription={user?.display_name} playlistImg="images/likedsongs.jpg"/>
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

            {usertoptracks?.items.slice(0,5).map((track,index)=>{
                return <SongRow key={index} index={index} audioName={track.album.name} artistName={track.artists[0].name} audioImg={track.album.images[0].url}/>
            })}
            </div>
            
        </div>
    )
}

export default LikedSongs
