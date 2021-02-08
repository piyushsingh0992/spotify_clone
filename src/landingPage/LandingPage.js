import React from 'react';
import { BrowserRouter as Router,Switch, Route, Link } from "react-router-dom";

import Navbar from "./Navbar.js";
import PremiumPage from "./PremiumPage.js";
import HomePage from "./HomePage.js";
import DownloadPage from "./DownloadPage.js";
import SupportPage from "./SupportPage.js";
import Footer from "./Footer.js";

import "./LandingPage.css";


function LandingPage() {
    return (
        <Router>
        <div className="landingPage">
        <Navbar/>

        
        <Route path="/" exact component={HomePage}/>
        <Route path="/premium" exact component={PremiumPage}/>
        <Route path="/support" exact component={SupportPage}/>
        <Route path="/download" exact component={DownloadPage}/>
        <Footer/>
        </div>
        </Router>
    )
}

export default LandingPage
