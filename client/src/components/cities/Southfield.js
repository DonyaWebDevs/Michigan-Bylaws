import React from "react";
import GreenbrookArticles from "../../soldbycermak/Southfield/Greenbrook Park Association Articles of Incorp Originals and Amendments/Greenbrook Park Association   Articles of Incorp Originals and Amendments.pdf";
import Greenwood2n from "../../soldbycermak/Southfield/Greenwood Park Association 2nd Amendment and Restated Bylaws/Greenwood Park Association  2nd Amended and Restated Bylaws  Exhibit A to Master Deed.PDF";
import GreenwoodAmended from "../../soldbycermak/Southfield/Greenwood Park Association Amended and Restated Mster Deed/Geenwood Park Associated  Amended and Restated Master Deed - 2010.pdf"


export default function Southfield () {


    return(
        <div className="Southfield">
            <a style={{color: 'black', display: 'flex', margin: '2%'}}href={GreenbrookArticles}>Greenbrook Park Association Articles of Incorp Originals and Amendments</a>
            <a style={{color: 'black', display: 'flex', margin: '2%'}}href={Greenwood2n}>Greenwood Park Association 2nd Amendment and Restated Bylaws</a>
            <a style={{color: 'black', display: 'flex', margin: '2%'}}href={GreenwoodAmended}>Greenwood Park Association Amended and Restated Mster Deed</a>

        </div>
    )
}