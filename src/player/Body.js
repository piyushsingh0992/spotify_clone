import React from 'react';
import "./Body.css";

import Playlist from "./Playlist.js";
import Home from "./Home.js";
import Search from "./Search.js";
import Library from "./Library.js";
import CreatePlaylist from "./CreatePlaylist.js";
import LikedSongs from "./LikedSongs.js";
import { BrowserRouter as Router,Switch, Route, Link } from "react-router-dom";
function Body() {
    return (
        <div className="body">
        <Route path="/" exact component={Home}/>
        <Route path="/search"  component={Search}/>
        <Route path="/library"  component={Library}/>
        <Route path="/createPlaylist"  component={CreatePlaylist}/>
        <Route path="/likedsongs"  component={LikedSongs}/>
        <Route path="/playlist"  component={Playlist}/>
        </div>
    )
}

export default Body
