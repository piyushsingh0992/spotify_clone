import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import "./SupportPage.css";
import { accessUrl } from "../spotify";

function Support() {
    return (
        <div className="supportPage">
            <div className="supportPage_hero">
                <h1>How can we help you?</h1>
                <div className="supportPage_searchbar">
                <SearchIcon style={{fontSize:"3vw",color:"grey"}}/><input  placeholder="Search" />
                </div>
                <div className="supportPage_help_type">
                    <div>
                        <p >SUBSCRIPTION OPTIONS</p>
                        <br/>
                        <h3>Start or join family plan</h3>
                    </div>

                    <div>
                        <p className="title">ACCOUNT HELP</p>
                        <br/>
                        <h3>Can't remember login details</h3>
                    </div>
                    
                    <div>
                        <p className="title">ACCOUNT HELP</p>
                        <br/>
                        <h3>Can't remember password</h3>
                    </div>
                    
                    <div>
                        <p className="title">PRIVACY & SECURITY</p>
                        <br/>
                        <h3>Is this spotify email legit</h3>
                    </div>

                </div>
            </div>

        
         <div className="supportPage_category">
                <div>
                    <h1>Account & Payment</h1>
                    <br/>
                    <p>Account Help</p>
                    <p>Payment Help</p>
                    <p>Subscription Options</p>
                    <p>Premium Family</p>
                    <p>Premium Duo</p>
                    <p>Premium Student</p>
                    <p>Privacy & Security</p>
                </div>
                <div>
                    <h1>Using Spotify</h1>
                    <br/>
                    <p>Video Tutorials</p>
                    <p>Getting Started</p>
                    <p>Playlists</p>
                    <p>Features</p>
                    <p>System & Settings</p>
                    <p>Troubleshooting</p>
                </div>
                <div>
                    <h1>Listen Everywhere</h1>
                    <br/>
                    <p>Speakers</p>
                    <p>TVs</p>
                    <p>Cars</p>
                    <p>Gaming</p>
                    <p>Smart Watches</p>
                    <p>Voice Assistants</p>
                </div>
        </div>
        
        
        <div className="supportPage_community">
            <h1>Visit the Community</h1>
            <p>Have questions? Find answers from our worldwide Community of expert fans!</p>
            <a href={ accessUrl }>FIND ANSWERS</a>
        </div>
        
        </div>
    )
}

export default Support
