import React from "react";

import WindridgeBylaws from "../../soldbycermak/Brighton/Windridge Bylaws/WINDRIDGE bylaw document.10_2016ocx.pdf";
import WoodridgeHillsCondo from "../../soldbycermak/Brighton/Woodridge Hills Condominum/WoodridgeHillsCondominum.PDF";
import WoodridgeHillsMasterDeed from "../../soldbycermak/Brighton/Woodridge Hills Master Deed/WoodridgeHillsMasterDeed.pdf";

export default function Brighton () {


    return(
        <div className="brighton">
            <a style={{color: 'black', display: 'flex', margin: '2%'}} href={WindridgeBylaws} >Windridge Bylaws</a>
            <a style={{color: 'black', display: 'flex', margin: '2%'}} href={WoodridgeHillsCondo} >Woodridge Hills Condominum</a>
            <a style={{color: 'black', display: 'flex', margin: '2%'}} href={WoodridgeHillsMasterDeed} >Woodridge Hills Master Deed</a>
            
        </div>
    )
}