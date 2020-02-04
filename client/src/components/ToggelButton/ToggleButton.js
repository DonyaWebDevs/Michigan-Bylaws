import React from 'react';
import './ToggleButton.css';
import Toggle from '../Toggle/Toggle';
import { useToggle } from '../hooks/useToggle';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const ToggleButton = props => {
    const [toggle, setToggle] = useToggle(false)

    const handleClick = e => {
        e.preventDefault();
        setToggle(!toggle)
    }

    

    return(
        <div className="toggle_container"> 
                <button className="toggle_button" onClick={handleClick} >
                    <FontAwesomeIcon icon={faBars} size="2x"/>
                </button>
                
                {toggle ? (<Toggle />): (null)}
                
        
        </div>
    )
}


export default ToggleButton;