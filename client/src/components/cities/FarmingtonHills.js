import React from "react";
import CarrollFarms from "../../ByLaws/Farmington Hills/Carroll Farms Condominium Bylaws/Carroll-Farms-Condominium-By-Laws.pdf";
// import Canterbury from "../../ByLaws/Farmington Hills/Canterbury Commons/";
import Copperwood from "../../ByLaws/Farmington Hills/Copperwood East Bylaws/Copperwood-East-By-laws.pdf";
import EastLincolnshire from "../../ByLaws/Farmington Hills/East Lincolnshire/East-Lincolnshire.pdf";
import EastLincolnshireBylaws from "../../ByLaws/Farmington Hills/East Lincolnshire Bylaws/East-Lincolnshire-By-laws.pdf";
import GoldviewPointe from "../../ByLaws/Farmington Hills/Golfview Pointe at Copper Creek/Golfview-Pointe-at-Copper-Creek.pdf";
import OldHomestead from "../../ByLaws/Farmington Hills/Old Homestead Bylaws/Old_Homestead_bylaws.pdf";
import QuakerValley from "../../ByLaws/Farmington Hills/Quaker Valley Bylaws/QuakerValleyByLaws.pdf";
import RiverPines from "../../ByLaws/Farmington Hills/River Pines Farmington Hills/RiverPines_farmingtonhills.pdf";
// import RollingOaks from "../../ByLaws/Farmington Hills/Rolling Oaks/"
import Saratoga from "../../ByLaws/Farmington Hills/Saratoga Master Deed/Saratoga-Master-Deed.pdf";
import TanaHillBylaws from "../../ByLaws/Farmington Hills/Tana Hill Bylaws/Tana_Hill_Bylaws.pdf";
import TanaHilMaster from "../../ByLaws/Farmington Hills/Tana Hill Master Deed/Tana_Hill_Master_Deed.pdf";
import WoodlandPines from "../../ByLaws/Farmington Hills/Woodland Pines Bylaws/Woodland-Pines-Bylaws.pdf";

export default function FarmingtonHills () {

    return(
        <div>
            <a href={CarrollFarms}>Carroll Farms Condominium Bylaws</a>
            {/* <a href={Canterbury}>Canterbury Commons</a> */}
            <a href={Copperwood}>Copperwood East Bylaws</a>
            <a href={EastLincolnshire}>East Lincolnshire</a>
            <a href={EastLincolnshireBylaws}>East Lincolnshire Bylaws</a>
            <a href={GoldviewPointe}>Golfview Pointe at Copper Creek</a>
            <a href={OldHomestead}>Old Homestead Bylaws</a>
            <a href={QuakerValley}>Quaker Valley Bylaws</a>
            <a href={RiverPines}>River Pines Farmington Hills</a>
            {/* <a href={RollingOaks}>Rolling Oaks</a> */}
            <a href={Saratoga}>Saratoga Master Deed</a>
            <a href={TanaHillBylaws}>Tana Hill Bylaws</a>
            <a href={TanaHilMaster}>Tana Hill Master Deed</a>
            <a href={WoodlandPines}>Woodland Pines Bylaws</a>

        </div>
    )
}