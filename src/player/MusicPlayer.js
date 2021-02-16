import React from 'react';
import "./MusicPlayer.css";


import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import { Slider } from "@material-ui/core";

import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import { useStateValue } from "../StateProvider";
function Footer() {
    

    const [{ spotify }, dispatch] = useStateValue();

    return (
        <div className="musicPlayer">
        
            
            <div className="musicPlayer_left">
                <img src="./images/album-art.JPG"/>
                <div className="musicPlayer_songdetails">
                    <h3>title</h3>
                    <p>discription</p>
                </div>
            </div> 

            <div className="musicPlayer_center">
            
                <div className="musicPlayer_center_controls">
                   
                    <ShuffleIcon  className="icons"  />
                    <SkipPreviousIcon  className="icons"  />
                    <PlayCircleFilledIcon className="icons" style={{fontSize:"45px"}} />
                    <SkipNextIcon className="icons" />
                    <RepeatIcon className="icons" />
                </div>
                <div className="musicPlayer_center_progressbar">      
                    <p>a</p>&emsp;
                    <Slider  className="sliders"  aria-labelledby="continuous-slider" />&emsp;
                    <p>v</p>
                </div>
            </div>

            <div className="musicPlayer_right">
                <PlaylistPlayIcon className="icons"  />
                <VolumeDownIcon className="icons"  />&emsp;&emsp;
                <Slider  className="sliders volume_bar"  aria-labelledby="continuous-slider"  />
            </div> 
        </div>
    )
}

export default Footer
