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

import BellCreek from "../../soldbycermak/Livonia2/Bell Creek Bylaws/BellCreekBylaws.pdf";
import LaurelPark from "../../soldbycermak/Livonia2/Laurel Park South Bylaws/Laurel Park South Bylaws.pdf";
import MysticCreek from "../../soldbycermak/Livonia2/Mystic Creek Master Deed Part 2/Mystic Creek Master Deed Part 2 Recorded.pdf";
import LaurelWoods2 from "../../soldbycermak/Livonia2/Restated Master Deed and Bylaws/Restated Master Deed and Bylaws.pdf";


export default function Livonia () {

    return(
        <div>
            <a style={{color: 'black', display: 'flex', margin: '2%'}}href={AspenPlace}>Aspen Place</a>
            <a style={{color: 'black', display: 'flex', margin: '2%'}}href={BellCreek}>Bell Creek Bylaws</a>

            <a style={{color: 'black', display: 'flex', margin: '2%'}}href={Brookside}>Brookside Bylaws Livonia</a>
            <a style={{color: 'black', display: 'flex', margin: '2%'}}href={CaliburnDec}>Caliburn Declaration of Restrictions</a>
            <a style={{color: 'black', display: 'flex', margin: '2%'}}href={CaliburnSub}>Caliburn Sub Bylaws</a>
            <a style={{color: 'black', display: 'flex', margin: '2%'}}href={Camden}>Camden Park</a>
            <a style={{color: 'black', display: 'flex', margin: '2%'}}href={GolfRidgeBylaws}>Golf Ridge Villas Bylaws</a>
            <a style={{color: 'black', display: 'flex', margin: '2%'}}href={GolfRidgeMaster}>Golf Ridge Villas Master Deed</a>
            <a style={{color: 'black', display: 'flex', margin: '2%'}}href={IdyleHills}>Idyle Hills Estates Civic Association Bylaws</a>
            <a style={{color: 'black', display: 'flex', margin: '2%'}}href={LaurelPark}>Laurel Park South Bylaws</a>
            <a style={{color: 'black', display: 'flex', margin: '2%'}}href={LaurelWoods}>Laurel Woods Bylaws</a>
            <a style={{color: 'black', display: 'flex', margin: '2%'}}href={LaurelWoods2}>Laurel Woods Restate Amended and  Mater Deed</a>
            <a style={{color: 'black', display: 'flex', margin: '2%'}}href={MysticCreek}>Mystic Creek Master Deed Part 2 Recorded</a>
            <a style={{color: 'black', display: 'flex', margin: '2%'}}href={NewburghLaws}>Newburgh Park Bylaws</a>
            <a style={{color: 'black', display: 'flex', margin: '2%'}}href={NewburghMaster}>Newburgh Park Master Deed</a>
            <a style={{color: 'black', display: 'flex', margin: '2%'}}href={Nottingham}>Nottingham Village</a>
            <a style={{color: 'black', display: 'flex', margin: '2%'}}href={ValleyWood}>Valley Wood</a>
            <a style={{color: 'black', display: 'flex', margin: '2%'}}href={Woods}>Woods</a>

        </div>
    )
}