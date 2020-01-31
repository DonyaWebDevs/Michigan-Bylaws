import { useEffect, useState } from 'react';


export const useToggle = () =>{
    const [someValue, setSomeValue] = useState()

    useEffect(() => {
        const element = window.document.body;

        if(someValue) {
            element.classList.add("show")
        } else {
            element.classList.remove("show")
        }
    }, [someValue])

    return [someValue, setSomeValue]
}