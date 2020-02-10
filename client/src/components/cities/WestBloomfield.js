import React from "react";

import HiddenPointBylaws from "../../soldbycermak/West Bloomfield/Hidden Pointe Bylaws/HiddenPointeBylaws.pdf";
import HiddenPointeRules from "../../soldbycermak/West Bloomfield/Rules & Regulations/Rules & Regulations.pdf";


export default function WestBloomfield () {


    return(
        <div className="west-bloomfield">
            <a style={{color: 'black', display: 'flex', margin: '2%'}}href={HiddenPointBylaws}>Hidden Point Bylaws</a>
            <a style={{color: 'black', display: 'flex', margin: '2%'}}href={HiddenPointeRules}>Hidden Pointe Condominium Association Rules and Regulations</a>
        </div>
    )
}