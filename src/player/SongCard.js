import React from 'react';
import "./SongCard.css";
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import { BrowserRouter as Router,Switch, Route, Link } from "react-router-dom";
function SongCard({artistname,audioname,img}) {
    return (<Link to="/playlist">
        <div className="songCard">
            <div className="songCard_img_container">
                <img src={img}/>
                <PlayCircleFilledIcon className="songCard_playbutton" style={{color:"#1db954" ,fontSize:"50px"}}/>
            </div>

            <div className="songCard_songdetails">
                <p className="songCard_audio">{audioname?.slice(0,20)}</p>
               {artistname && <p className="songCard_artist">{artistname?.slice(0,10)}</p>}      
            </div>
        </div>
        </Link>
    )
}

export default SongCard;
