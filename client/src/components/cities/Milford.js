import React from "react";
import MilfordHeights from "../../ByLaws/Milford/Milford Heights in Milford/milford_heights_by_laws.pdf";
import MilfordHidden from "../../ByLaws/Milford/Milford's Hidden Valley/MHVA_Bylaws.pdf";

export default function Milford () {

    return(
        <div>
            <a href={MilfordHeights}>Milford Heights in Milford</a>
            <a href={MilfordHidden}>Milford's Hidden Valley</a>
        </div>
    )
}