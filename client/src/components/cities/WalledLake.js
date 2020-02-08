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
            <a style={{color: 'black', display: 'flex', margin: '2%'}}href={Foxcroft}>Foxcroft</a>
            <a style={{color: 'black', display: 'flex', margin: '2%'}}href={LakeVillageByLaws}>Walled Lake/Lake Village ByLaws</a>
            <a style={{color: 'black', display: 'flex', margin: '2%'}}href={LakeVillageMasterDeed}>Lake Village Master Deed</a>
            <a style={{color: 'black', display: 'flex', margin: '2%'}}href={LakeVillageNoisePolicy}>Lake Village Noise Policy</a>
            <a style={{color: 'black', display: 'flex', margin: '2%'}}href={LakeVillageParkingPolicy}>Lake Village Parking Policy</a>
            <a style={{color: 'black', display: 'flex', margin: '2%'}}href={LakeVillagePetPolicy}>Lake Village Pet Policy</a>
            <a style={{color: 'black', display: 'flex', margin: '2%'}}href={LakeVillageSatellitePolicy}>Lake Village Satellite Policy</a>
            <a style={{color: 'black', display: 'flex', margin: '2%'}}href={TrailWindsBylaws}>Trail Winds Bylaws</a> 
        </div>
    )
}