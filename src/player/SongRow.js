import React from 'react';
import "./SongRow.css"

function SongRow() {
    return (
        <div className="songRow">
            <div className="songRow_left">
                <span className="songRow_highlight">1</span>
                <img className="songRow_img"src="./images/album-art.JPG"/>
                <div>
                    <span className="songRow_highlight">title</span>
                    <p>discription</p>
                </div>
            </div>
            <div className="songRow_center">
                <p>Album Name</p>
            </div>
            <div className="songRow_right">
                <p>time</p>
            </div>
            
            
         
        </div>
    )
}

export default SongRow
