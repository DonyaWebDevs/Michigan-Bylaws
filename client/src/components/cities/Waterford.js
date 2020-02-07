import React from "react";

import ForestbrookBylaws from "../../ByLaws/Waterford/Forestbrook Bylaws/Forestbrook_Bylaws.pdf";
import ForestbrookHandbook from "../../ByLaws/Waterford/Forestbrook Handbook/Forestbrook-Handbook.pdf";

export default function Waterford () {

    return(
        <div>
           <a href={ ForestbrookBylaws}>Forestbrook Bylaws</a>
           <a href={ForestbrookHandbook}>Forestbrook Handbook</a>
           
        </div>
    )
}