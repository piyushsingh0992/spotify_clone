import React from 'react';
import "./Playlist.css";
import Header from "./Header.js";
import Banner from "./Banner.js";
import SongRow from "./SongRow.js";
import { useStateValue } from "../StateProvider";
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import FavoriteIcon from '@material-ui/icons/Favorite';
import AccessTimeIcon from '@material-ui/icons/AccessTime';

function Playlist() {

    const [{ spotify ,user}, dispatch] = useStateValue();

    
    return (
        <div className="playlist">
            <Header/>
            <Banner/>
            <div className="playlist_body">
            <div className="playlist_icons"><PlayCircleFilledIcon style={{fontSize:"70px",color:"#1db954"}}/> <FavoriteIcon style={{fontSize:"40px",color:"#1db954"}} />
            
            <MoreHorizIcon style={{fontSize:"30px",color:"white"}}/></div>
            <div className="playlist_songlist">
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
        </div>
    )
}

export default Playlist
