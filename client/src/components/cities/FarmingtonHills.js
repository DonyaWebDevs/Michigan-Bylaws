import React from "react";

import CarrollFarms from "../../ByLaws/Farmington Hills/Carroll Farms Condominium Bylaws/Carroll-Farms-Condominium-By-Laws.pdf";
import Copperwood from "../../ByLaws/Farmington Hills/Copperwood East Bylaws/Copperwood-East-By-laws.pdf";
import EastLincolnshire from "../../ByLaws/Farmington Hills/East Lincolnshire/East-Lincolnshire.pdf";
import EastLincolnshireBylaws from "../../ByLaws/Farmington Hills/East Lincolnshire Bylaws/East-Lincolnshire-By-laws.pdf";
import GoldviewPointe from "../../ByLaws/Farmington Hills/Golfview Pointe at Copper Creek/Golfview-Pointe-at-Copper-Creek.pdf";
import OldHomestead from "../../ByLaws/Farmington Hills/Old Homestead Bylaws/Old_Homestead_bylaws.pdf";
import QuakerValley from "../../ByLaws/Farmington Hills/Quaker Valley Bylaws/QuakerValleyByLaws.pdf";
import RiverPines from "../../ByLaws/Farmington Hills/River Pines Farmington Hills/RiverPines_farmingtonhills.pdf";
import Saratoga from "../../ByLaws/Farmington Hills/Saratoga Master Deed/Saratoga-Master-Deed.pdf";
import TanaHillBylaws from "../../ByLaws/Farmington Hills/Tana Hill Bylaws/Tana_Hill_Bylaws.pdf";
import TanaHilMaster from "../../ByLaws/Farmington Hills/Tana Hill Master Deed/Tana_Hill_Master_Deed.pdf";
import WoodlandPines from "../../ByLaws/Farmington Hills/Woodland Pines Bylaws/Woodland-Pines-Bylaws.pdf";

export default function FarmingtonHills () {

    return(
        <div>
            <a style={{color: 'black', display: 'flex', margin: '2%'}}href={CarrollFarms}>Carroll Farms Condominium Bylaws</a>
            <a style={{color: 'black', display: 'flex', margin: '2%'}}href={Copperwood}>Copperwood East Bylaws</a>
            <a style={{color: 'black', display: 'flex', margin: '2%'}}href={EastLincolnshire}>East Lincolnshire</a>
            <a style={{color: 'black', display: 'flex', margin: '2%'}}href={EastLincolnshireBylaws}>East Lincolnshire Bylaws</a>
            <a style={{color: 'black', display: 'flex', margin: '2%'}}href={GoldviewPointe}>Golfview Pointe at Copper Creek</a>
            <a style={{color: 'black', display: 'flex', margin: '2%'}}href={OldHomestead}>Old Homestead Bylaws</a>
            <a style={{color: 'black', display: 'flex', margin: '2%'}}href={QuakerValley}>Quaker Valley Bylaws</a>
            <a style={{color: 'black', display: 'flex', margin: '2%'}}href={RiverPines}>River Pines Farmington Hills</a>
            <a style={{color: 'black', display: 'flex', margin: '2%'}}href={Saratoga}>Saratoga Master Deed</a>
            <a style={{color: 'black', display: 'flex', margin: '2%'}}href={TanaHillBylaws}>Tana Hill Bylaws</a>
            <a style={{color: 'black', display: 'flex', margin: '2%'}}href={TanaHilMaster}>Tana Hill Master Deed</a>
            <a style={{color: 'black', display: 'flex', margin: '2%'}}href={WoodlandPines}>Woodland Pines Bylaws</a>

        </div>
    )
}