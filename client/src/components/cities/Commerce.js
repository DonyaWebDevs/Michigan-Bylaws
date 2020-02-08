import React from "react";
import BridgePointe from "../../ByLaws/Commerce/Bridge Pointe 1st restated Bylaws/Bridge-Pointe-1st-Restated-By-Laws.pdf";
import ColonyFarms from "../../ByLaws/Commerce/Colony Farms ByLaws/Colony-Farms-By-Laws.pdf";
import GreenbriarMaster from "../../ByLaws/Commerce/Greenbriar Master Deed/Greenbriar_Master_Deed.pdf";
import HillsofBogie from "../../ByLaws/Commerce/Hills of Bogie Lake Bylaws/Hills-of-Bogie-Lake-By-Laws.pdf";
import MapleCrossing from "../../ByLaws/Commerce/Maple Crossing Master Deed/Maple-Crossing-Master-Deed.pdf";
import OakbrookPointe from "../../ByLaws/Commerce/Oakbrook Pointe Bylaws/Oakbrook-Pointe-By-Laws.pdf";
import OakbrookPointeAmended from "../../ByLaws/Commerce/Oakbrook Pointe Bylaws Amended 2007/Oakbrook-Pointe-By-Laws-Amended-2007.pdf";

export default function Commerce () {

    return(
        <div>
            <a style={{color: 'black', display: 'flex', margin: '2%'}}href={BridgePointe}>Bridge Pointe 1st Restated Bylaws</a>
            <a style={{color: 'black', display: 'flex', margin: '2%'}}href={ColonyFarms}>Colony Farms ByLaws</a>
            <a style={{color: 'black', display: 'flex', margin: '2%'}}href={GreenbriarMaster}>Greenbriar Master Deed</a>
            <a style={{color: 'black', display: 'flex', margin: '2%'}}href={HillsofBogie}>Hills of Bogie Lake Bylaws</a>
            <a style={{color: 'black', display: 'flex', margin: '2%'}}href={MapleCrossing}>Maple Crossing Master Deed</a>
            <a style={{color: 'black', display: 'flex', margin: '2%'}}href={OakbrookPointe}>Oakbrook Pointe Bylaws</a>
            <a style={{color: 'black', display: 'flex', margin: '2%'}}href={OakbrookPointeAmended}>Oakbrook Pointe Bylaws Amended 2007</a>

        </div>
    )
}
