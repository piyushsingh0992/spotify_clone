import React from 'react';
import "./RateCard.css";
import { accessUrl } from "../spotify";
function RateCard(props) {
    return (
        <div className="ratecard">

            <div className="ratecard_top">
                <button>1 Month free</button>
                <h3>{props.packageName}</h3>
                <p>{props.packageRate}</p>
                <hr/>  
    
            </div>

            <div className="ratecard_center">
                 
                <br/>
                <ul>
                {props.packageFeatures?.map(feature=>{
                    return<li>{feature}</li>
                })}

                </ul>
            </div>
                
            <div className="ratecard_bottom">
            <a href={ accessUrl }>
                <p><strong>GET STARTED</strong></p></a>
            </div>
            
                            

            
            
        </div>
    )
}

export default RateCard
