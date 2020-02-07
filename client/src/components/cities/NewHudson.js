import React from "react";
import PondsAmend from "../../ByLaws/New Hudson/Ponds Bylaws 2nd Amend"
import PondsBylaw from "../../ByLaws/New Hudson/Ponds Bylaws Min"

export default function NewHudson () {

    return(
        <div>
            <a href={PondsAmend}>Ponds Bylaws 2nd Amend</a>
            <a href={PondsBylaw}>Ponds Bylaws Min</a>
        </div>
    )
}