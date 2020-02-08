import React from "react";

import BrownstoneofWestlandBylaws from "../../ByLaws/Westland/Brownstone of Westland Bylaws/Brownstones-of-Westland-Bylaws.pdf";
import CastlewoodBylaws from "../../ByLaws/Westland/Castlewood Bylaws/Castlewood-bylaws.pdf";
import CastlewoodMasterDeed from "../../ByLaws/Westland/Castlewood Master Deed/Castlewood-Master-Deed.pdf";
import RiverParkCourtBylaws from "../../ByLaws/Westland/River Park Court Bylaws/River-Park-Court-Bylaws.pdf";
import RiverParkCourtMasterDeed from "../../ByLaws/Westland/River Park Court Master Deed/River-Park-Court-Master-Deed.pdf";

export default function Westland () {

    return(
        <div>
           <a style={{color: 'black', display: 'flex', margin: '2%'}}href={BrownstoneofWestlandBylaws}>Brownstone of Westland Bylaws</a>
           <a style={{color: 'black', display: 'flex', margin: '2%'}}href={CastlewoodBylaws}>Castlewood Bylaws</a>
           <a style={{color: 'black', display: 'flex', margin: '2%'}}href={CastlewoodMasterDeed}>Castlewood Master Deed</a>
           <a style={{color: 'black', display: 'flex', margin: '2%'}}href={RiverParkCourtBylaws}>River Park Court Bylaws</a>
           <a style={{color: 'black', display: 'flex', margin: '2%'}}href={RiverParkCourtMasterDeed}>River Park Court Master Deed</a>
           
        </div>
    )
}