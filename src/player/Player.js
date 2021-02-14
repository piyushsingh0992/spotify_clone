import React from 'react';
import SideNav from "./SideNav";
import Body from "./Body.js";
import MusicPlayer from "./MusicPlayer.js";
import "./Player.css"
function Player() {

    
    return (
        <div className="player">
        <div className="player_body">
            <SideNav/>
            <Body/>
        </div>

          <MusicPlayer/>  
        </div>
    )
}

export default Player
