import React from "react";

import ForestbrookBylaws from "../../ByLaws/Waterford/Forestbrook Bylaws/Forestbrook_Bylaws.pdf";
import ForestbrookHandbook from "../../ByLaws/Waterford/Forestbrook Handbook/Forestbrook-Handbook.pdf";

export default function Waterford () {

    return(
        <div>
           <a style={{color: 'black', display: 'flex', margin: '2%'}}href={ ForestbrookBylaws}>Forestbrook Bylaws</a>
           <a style={{color: 'black', display: 'flex', margin: '2%'}}href={ForestbrookHandbook}>Forestbrook Handbook</a>
           
        </div>
    )
}