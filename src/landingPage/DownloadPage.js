import React from 'react';
import "./DownloadPage.css";
import { accessUrl } from "../spotify";
function DownloadPage() {
    return (
        <div className="downloadPage">
        <h1>Download Spotify</h1>
        <div className="downloadPage_box1">
            <div>
                <img className="downloadPage_spotifylogo" src="./images/spotify-logo.png"/>
                <h3>Spotify: Music and podcasts</h3>
                <p>Play millions of songs and podcasts on your desktop for free.</p>
                <a href={ accessUrl }>DOWNLOAD</a>
            </div>
            <img src="./images/download-img1.JPG"/>
        </div>

        <h2>Bring your music to mobile and tablet, too.</h2>
        <div className="downloadPage_box2">
            <img src="./images/download-img2.JPG"/>
            <div>
                <img  className="downloadPage_spotifylogo" src="./images/spotify-logo.png"/>
                <h3>Spotify: Music and podcasts</h3>
                <p>Play millions of songs and podcasts on your desktop for free.</p>
                <img className="downloadPage_playstore"src="./images/download-img3.JPG"/>
            </div>
        </div>

        <h2>One account, listen everywhere.</h2>
        <p>Explore all the ways you can listen to Spotify at home, in the car, and on the move. <a>Learn more about Spotify Everywhere.</a></p>
        <div className="downloadPage_grid">
            <div><p>Mobile</p></div>
            <div><p>Tablet</p></div>
            <div><p>Gaming</p></div>
            <div><p>Speakers</p></div>
            <div><p>Car</p></div>
            <div><p>TV</p></div>
            <div><p>Wearables</p></div>
            <div><p>Webplayer</p></div>
        </div>
        </div>
    )
}

export default DownloadPage
