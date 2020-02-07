import React from "react";
import MilfordHeights from "../../ByLaws/Milford/Milford Heights in Milford"
import MilfordHidden from "../../ByLaws/Milford/Milford's Hidden Valley"

export default function Milford () {

    return(
        <div>
            <a href={MilfordHeights}>Milford Heights in Milford</a>
            <a href={MilfordHidden}>Milford's Hidden Valley</a>
        </div>
    )
}