import React from "react";
import Foxcroft from "../../ByLaws/Walled Lake/Foxcroft/foxcroft.pdf";
import LakeVillageByLaws from "../../ByLaws/Walled Lake/Lake Village ByLaws/Lake-Village-II-Exhibit-A-Bylaws.pdf";
import LakeVillageMasterDeed from "../../ByLaws/Walled Lake/Lake Village Master Deed/Lake-Village-II-MasterDeed.pdf";
import LakeVillageNoisePolicy from "../../ByLaws/Walled Lake/Lake Village Noise Policy/Lake-Village-II-Noise-Policy.pdf";
import LakeVillageParkingPolicy from "../../ByLaws/Walled Lake/Lake Village Parking Policy/Lake-Village-II-Parking-Policy.pdf";
import LakeVillagePetPolicy from "../../ByLaws/Walled Lake/Lake Village Pet Policy/Lake-Village-II-Pet-policy.pdf";
import LakeVillageSatellitePolicy from "../../ByLaws/Walled Lake/Lake Village Satellite Policy/Lake-Village-II-Satellite-Policy.pdf";
import TrailWindsBylaws from "../../ByLaws/Walled Lake/Trail Winds Bylaws/Trail_Winds_ByLaws.pdf";

export default function WalledLake () {

    return(
        <div>
            <a href={Foxcroft}>Foxcroft</a>
            <a href={LakeVillageByLaws}>Walled Lake/Lake Village ByLaws</a>
            <a href={LakeVillageMasterDeed}>Lake Village Master Deed</a>
            <a href={LakeVillageNoisePolicy}>Lake Village Noise Policy</a>
            <a href={LakeVillageParkingPolicy}>Lake Village Parking Policy</a>
            <a href={LakeVillagePetPolicy}>Lake Village Pet Policy</a>
            <a href={LakeVillageSatellitePolicy}>Lake Village Satellite Policy</a>
            <a href={TrailWindsBylaws}>Trail Winds Bylaws</a> 
        </div>
    )
}