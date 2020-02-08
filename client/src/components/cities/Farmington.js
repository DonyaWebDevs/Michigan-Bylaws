import React from "react";

import DrakesCrossing from "../../ByLaws/Farmington/Drakes Crossing Bylaws/Drakes-Crossing-bylaws.pdf";
import HuntersGrove from "../../ByLaws/Farmington/Hunters Grove Farmington/Hunters-Grove-Farmington.pdf";
import RiverPines from "../../ByLaws/Farmington/River Pines of Farmington Bylaws/River_Pines_of_Farmington_Bylaws.pdf";
import StamanAcres from "../../ByLaws/Farmington/Staman Acres/staman_acres.pdf";


export default function Farmington () {

    return(
        <div>
            <a style={{color: 'black', display: 'flex', margin: '2%'}}href={DrakesCrossing}>Drakes Crossing Bylaws</a>
            <a style={{color: 'black', display: 'flex', margin: '2%'}}href={HuntersGrove}>Hunters Grove Farmington</a>
            <a style={{color: 'black', display: 'flex', margin: '2%'}}href={RiverPines}>River Pines of Farmington Bylaws</a>
            <a style={{color: 'black', display: 'flex', margin: '2%'}}href={StamanAcres}>Staman Acres</a>
        </div>
    )
}