import React from "react";

import AspenPlace from "../../ByLaws/Livonia/Aspen Place/aspen-place.pdf"
import Brookside from "../../ByLaws/Livonia/Brookside Bylaws Livonia/Brookside-Bylaws-Livonia.pdf"
import CaliburnDec from "../../ByLaws/Livonia/Caliburn Declaration of Restrictions/Caliburn_Declaration_of_Restrictions.pdf"
import CaliburnSub from "../../ByLaws/Livonia/Caliburn Sub Bylaws/Caliburn_Sub_By-Laws.pdf"
import Camden from "../../ByLaws/Livonia/Camden-Park/camden-park.pdf"
import GolfRidgeBylaws from "../../ByLaws/Livonia/Golf Ridge Villas Bylaws/Golf-Ridge-Villas-Bylaws.pdf"
import GolfRidgeMaster from "../../ByLaws/Livonia/Golf Ridge Villas Master Deed/Golf-Ridge-Villas-MasterDeed.pdf"
import IdyleHills from "../../ByLaws/Livonia/Idyle Hills Estates Civic Association Bylaws/IDYLE-HILLS-ESTATES-CIVIC-ASSOCIATION-BY-LAWS-June2016.pdf"
import LaurelWoods from "../../ByLaws/Livonia/Laurel Woods/laurel-woods.pdf"
import NewburghLaws from "../../ByLaws/Livonia/Newburgh Park Bylaws/Newburgh-Park-By-Laws.pdf"
import NewburghMaster from "../../ByLaws/Livonia/Newburgh Park Master Deed/Newburgh-Park-Master-Deed.pdf"
import Nottingham from "../../ByLaws/Livonia/Nottingham Village/nottingham-village.pdf"
import ValleyWood from "../../ByLaws/Livonia/Valley Wood/Valley-Wood.pdf"
import Woods from "../../ByLaws/Livonia/Woods/woods.pdf"


export default function Livonia () {

    return(
        <div>
            <a href={AspenPlace}>Aspen Place</a>
            <a href={Brookside}>Brookside Bylaws Livonia</a>
            <a href={CaliburnDec}>Caliburn Declaration of Restrictions</a>
            <a href={CaliburnSub}>Caliburn Sub Bylaws</a>
            <a href={Camden}>Camden Park</a>
            <a href={GolfRidgeBylaws}>Golf Ridge Villas Bylaws</a>
            <a href={GolfRidgeMaster}>Golf Ridge Villas Master Deed</a>
            <a href={IdyleHills}>Idyle Hills Estates Civic Association Bylaws</a>
            <a href={LaurelWoods}>Laurel Woods</a>
            <a href={NewburghLaws}>Newburgh Park Bylaws</a>
            <a href={NewburghMaster}>Newburgh Park Master Deed</a>
            <a href={Nottingham}>Nottingham Village</a>
            <a href={ValleyWood}>Valley Wood</a>
            <a href={Woods}>Woods</a>

        </div>
    )
}