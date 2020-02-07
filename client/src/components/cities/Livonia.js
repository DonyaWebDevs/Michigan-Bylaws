import React from "react";
import AspenPlace from "../../ByLaws/Livonia/Aspen Place/aspen-place.pdf"
import Brookside from "../../ByLaws/Livonia/Brookside Bylaws Livonia"
import CaliburnDec from "../../ByLaws/Livonia/Caliburn Declaration of Restrictions"
import CaliburnSub from "../../ByLaws/Livonia/Caliburn Sub Bylaws"
import Camden from "../../ByLaws/Livonia/Camden Park"
import GolfRidgeBylaws from "../../ByLaws/Livonia/Golf Ridge Villas Bylaws"
import GolfRidgeMaster from "../../ByLaws/Livonia/Golf Ridge Villas Master Deed"
import IdyleHills from "../../ByLaws/Livonia/Idyle Hills Estates Civic Association Bylaws"
import LaurelWoods from "../../ByLaws/Livonia/Laurel Woods"
import NewburghLaws from "../../ByLaws/Livonia/Newburgh Park Bylaws"
import NewburghMaster from "../../ByLaws/Livonia/Newburgh Park Master Deed"
import Nottingham from "../../ByLaws/Livonia/Nottingham Village"
import ValleyWood from "../../ByLaws/Livonia/Valley Wood"
import Woods from "../../ByLaws/Livonia/Woods"


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