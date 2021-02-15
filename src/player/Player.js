import React from 'react';
import SideNav from "./SideNav";
import Body from "./Body.js";
import MusicPlayer from "./MusicPlayer.js";
import "./Player.css";
import { BrowserRouter as Router,Switch, Route, Link } from "react-router-dom";
function Player() {

    
    return (
        <Router>
        <div className="player">
        <div className="player_body">
            <SideNav/>
            <Body/>
        </div>

          <MusicPlayer/>  
        </div>
        </Router>
    )
}

export default Player
