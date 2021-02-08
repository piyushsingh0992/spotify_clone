import React from 'react';

import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';


import "./Footer.css";

function Footer() {
    return (
        <div className="footer">
            <div className="footer_left">
                <img src="images/spotify-logo-white.png"/>
            </div>

            <div className="footer_center">
                <div>
                    <h6 className="footer_heading">company</h6>
                    <p>About</p>
                    <p>Jobs</p>
                    <p>For the record</p>
                </div>
                <div>
                    <h6 className="footer_heading">communities</h6>
                    <p>For Artist</p>
                    <p>Developer's</p>
                    <p>Advertising</p>
                    <p>Investor's</p>
                    <p>Vendor</p>
                </div>
                <div>
                    <h6 className="footer_heading">useful links</h6>
                    <p>Support </p>
                    <p>Web Player</p>
                    <p>Free Mobile App</p>
                    <p>2020 Wrapped</p>
                </div>
            </div>

            <div className="footer_right">
                <InstagramIcon className="icon" style={{ fontSize: "3vw" }}/>
                <TwitterIcon className="icon"   style={{ fontSize: "3vw" }} />
                <FacebookIcon className="icon"  style={{ fontSize: "3vw" }}/>
            </div>
        </div>
    )
}

export default Footer
