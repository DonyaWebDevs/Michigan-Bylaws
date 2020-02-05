import React from "react";
import BridgePointe from "../../ByLaws/Commerce/Bridge Pointe 1st restated Bylaws/Bridge-Pointe-1st-Restated-By-Laws.pdf";
import ColonyFarms from "../../ByLaws/Commerce/Colony Farms ByLaws/Colony-Farms-By-Laws.pdf";
// import GreenbriarCondo from "../../ByLaws/Commerce/Greenbriar Condominium Commerce/Greenbriar_Condominium_commerce.pdf";
import GreenbriarMaster from "../../ByLaws/Commerce/Greenbriar Master Deed/Greenbriar_Master_Deed.pdf";
import HillsofBogie from "../../ByLaws/Commerce/Hills of Bogie Lake Bylaws/Hills-of-Bogie-Lake-By-Laws.pdf";
import MapleCrossing from "../../ByLaws/Commerce/Maple Crossing Master Deed/Maple-Crossing-Master-Deed.pdf";
import OakbrookPointe from "../../ByLaws/Commerce/Oakbrook Pointe Bylaws/Oakbrook-Pointe-By-Laws.pdf";
import OakbrookPointeAmended from "../../ByLaws/Commerce/Oakbrook Pointe Bylaws Amended 2007/Oakbrook-Pointe-By-Laws-Amended-2007.pdf";

export default function Commerce () {

    return(
        <div>
            <a href={BridgePointe}>Bridge Pointe 1st Restated Bylaws</a>
            <a href={ColonyFarms}>Colony Farms ByLaws</a>
            {/* <a href={GreenbriarCondo}>Greenbriar Condominium Commerce</a> */}
            <a href={GreenbriarMaster}>Greenbriar Master Deed</a>
            <a href={HillsofBogie}>Hills of Bogie Lake Bylaws</a>
            <a href={MapleCrossing}>Maple Crossing Master Deed</a>
            <a href={OakbrookPointe}>/Oakbrook Pointe Bylaws</a>
            <a href={OakbrookPointeAmended}>Oakbrook Pointe Bylaws Amended 2007</a>

        </div>
    )
}
