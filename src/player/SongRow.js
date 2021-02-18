import React from 'react';
import "./SongRow.css"

function SongRow({audioName,artistName,audioImg,index,audioAlbum,audioTime}) {
    let seconds=Math.trunc( audioTime/100000 );
    console.log("seconds -> ",seconds);
    
    return (
        <div className="songRow">
            <div className="songRow_left">
                <span className="songRow_highlight">{index+1}</span>
                <img className="songRow_img" src={audioImg}/>
                <div>
                    <span className="songRow_highlight">{audioName}</span>
                    <p>{artistName}</p>
                </div>
            </div>


            <div className="songRow_center">
                <p>{audioAlbum}</p>
            </div>
            <div className="songRow_right">
                <p>{seconds}:00</p>
            </div>
            
            
         
        </div>
    )
}

export default SongRow
