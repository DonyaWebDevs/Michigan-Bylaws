import React from "react";

import MilfordHeights from "../../ByLaws/Milford/Milford Heights in Milford/milford_heights_by_laws.pdf";
import MilfordHidden from "../../ByLaws/Milford/Milford's Hidden Valley/MHVA_Bylaws.pdf";
import OakPark from "../../soldbycermak/Milford 2/OakPark Covenants and Restriction/OakParkCovenantsandRestrictions.pdf";

export default function Milford () {

    return(
        <div>
            <a style={{color: 'black', display: 'flex', margin: '2%'}}href={MilfordHeights}>Milford Heights in Milford</a>
            <a style={{color: 'black', display: 'flex', margin: '2%'}}href={MilfordHidden}>Milford's Hidden Valley</a>
            <a style={{color: 'black', display: 'flex', margin: '2%'}}href={OakPark}>Oak Park Covenants and Restrictions</a>

        </div>
    )
}