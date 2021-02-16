import React from 'react';
import RateCard from "./RateCard.js";

import "./PremiumPage.css";

import { accessUrl } from "../spotify";


function PremiumPage() {
    return (
        <div className="premiumPage">
        <div className="premiumPage_hero">
            <h1>Get Premium free for 2 months</h1>
            
            <h6> Just $9.99/month after. Cancel anytime.</h6>
            
            <div className="premiumPage_hero_btn_container">
                <a className="primary" href={ accessUrl }>
                    GET STARTED
                </a> 
                <a className="secondary" href={ accessUrl }>
                    VIEW PLANS
                </a>
            </div>
        </div>
        <div className="premiumPage_why_premium">
            <h1>Why go Premium?</h1>
            <div className="premiumPage_features">
                <div className="premiumPage_feature">
                    <img src="images/1.png"/>  
                    <h6>Download music.</h6>
                    <p>Listen anywhere.</p>
                </div>

                <div className="premiumPage_feature">
                    <img src="images/2.png"/>
                    
                    <h6>No ad interruptions.</h6>
                    <p>Enjoy uninterrupted music.</p>
                </div>

                <div className="premiumPage_feature">
                    <img src="images/3.png"/>
                    <h6>Play Any song</h6>
                    <p>Even on mobile.</p>
                </div>

                <div className="premiumPage_feature">
                    <img src="images/4.png"/>
                    <h6>Unlimited Skips</h6>
                    <p>Just Hit next.</p>
                </div>
            </div>
        </div>

        <div className="premiumPage_ratecards">
                <h1>
                Pick your Premium.
                </h1>
                <p>
                Listen without limits on your phone, speaker, and other device
                </p>
                <div className="premiumPage_ratecards_grid">
                      <RateCard 
                      packageName="Individual" 
                      packageRate=" $ 9.99/month after offer period  account"
                      packageFeatures={["Listen to music ad-free","Play anywhere - even offline","On-demand playback"]  }  
                      />
                      <RateCard 
                      packageName="Duo" 
                      packageRate=" $ 12.99/month after offer period 2 account"
                      packageFeatures={["2 Premium accounts for a couple under one roof","Duo Mix: a playlist for two, regularly updated with music you both enjoy","Ad-free music listening, play offline, on-demand playback"]  }  
                      />
                      <RateCard 
                      packageName="Family" 
                      packageRate=" $ 14.99/month after offer period 6 account"
                      packageFeatures={["6 Premium accounts for family members living under one roof","Family Mix: a playlist for your family, regularly updated with music you all enjoy","Block explicit music","Ad-free music listening, play offline, on-demand playback","Spotify Kids: a separate app made just for kids"]  }  
                      />
                      <RateCard 
                      packageName="Student" 
                      packageRate=" $ 4.99/month after offer period 1 account"
                      packageFeatures={["Hulu (ad-supported) plan","SHOWTIME","Listen to music ad-free","Play anywhere - even offline","On-demand playback"]  }
                      />  
                </div>
            </div>
        </div>
    )
}

export default PremiumPage
