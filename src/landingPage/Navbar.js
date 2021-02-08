import React from 'react';
import { BrowserRouter as Router,Switch, Route, Link } from "react-router-dom";
import AccountCircleIcon  from '@material-ui/icons/AccountCircle';

import "./Navbar.css";

function Navbar() {


    window.onscroll = function () {
        scrollFunction();
      };
    
      function scrollFunction() {
          console.log(window.pageYOffset);
        if (window.pageYOffset > 20) {
          document.querySelector(".navbar").style.backgroundColor = "rgba(0,0,0,0.6)";
        } else {
          document.querySelector(".navbar").style.backgroundColor = "black";;
        }
      }

      


     
    return (
        <div className="navbar">
        
        <div className="navbar_left">
        <Link to="/">
        <img src="images/spotify-logo-white.png"/>
        </Link>
        </div>
            
        <div className="navbar_right">
        <Link to="/premium">
        Premium
        </Link>

        <Link to="/support">
        Support
        </Link>

        <Link to="/download">
        Download 
        </Link>
        <span >|</span>

        <a>
        <AccountCircleIcon style={{ fontSize:"4vw" }} />
        Profile            
        </a>

        </div>

        </div>
    )
}

export default Navbar;

