import React from 'react';
import './ToggleButton.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const ToggleButton = props => (
    // <button className="toggle_button">
    //     <div className="toggle_button_line" />
    //     <div className="toggle_button_line" />
    //     <div className="toggle_button_line" />
    // </button>
    <button className="toggle_button">
        <FontAwesomeIcon icon={faBars} size="4x"/>
    </button>
);

export default ToggleButton;