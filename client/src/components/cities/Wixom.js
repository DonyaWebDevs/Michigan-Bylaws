import React from "react";

import MapleForesMasterDeed from "../../ByLaws/Wixom/Maple Fores Master Deed/maple-forest-Master-DeedBy-Laws.pdf";
import MapleForestCondominimus from "../../ByLaws/Wixom/Maple Forest Condominimus/Maple_Forest.pdf";
import TributeWixomBylaws from "../../ByLaws/Wixom/Tribute Wixom Bylaws/Tribute-Wixom-ByLaws.pdf";
import WexfordMews from "../../ByLaws/Wixom/Wexford Mews/wexford-mews.pdf";

export default function Wixom () {

    return(
        <div>
            <a href={MapleForesMasterDeed}>Maple Fores Master Deed</a>
            <a href={MapleForestCondominimus}>Maple Forest Condominimus</a>
            <a href={TributeWixomBylaws}>Tribute Wixom Bylaws</a>
            <a href={WexfordMews}>Wexford Mews</a>
        </div>
    )
}