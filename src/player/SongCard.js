import React from 'react';
import "./SongCard.css";
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
function SongCard() {
    return (
        <div className="songCard">
            <div className="songCard_img">
                <img src="./images/album-art.JPG"/>
                <PlayCircleFilledIcon className="songCard_playbutton" style={{color:"#1db954" ,fontSize:"50px"}}/>
            </div>

            <div className="songCard_songdetails">
                <h3>song name </h3>
                <p>artistart istartista rtistartist artistart </p>     
            </div>
        </div>
    )
}

export default SongCard
