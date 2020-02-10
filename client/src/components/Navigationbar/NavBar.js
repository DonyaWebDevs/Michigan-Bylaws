import React from 'react';
import './NavBar.css';
import ToggleButton from '../ToggelButton/ToggleButton';
import Kevin from './KEVIN_REAL-ESTATE.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'


const NavBar = props => (
    <header className="navigationbar">
        <nav className="navbar">
            <div className="navbar_logo">
                <a href="https://www.soldbycermak.com/">
                    <img src={Kevin} alt="Logo"/>            
                </a>
            </div>
            
            <div className="nav_icons">
                <div className="size">
                    <a href="mailto:soldbycermak@gmail.com">
                        <FontAwesomeIcon icon={faEnvelope} size="2x"/>
                    </a >
                </div>
                <div className="size">
                    <a href="tel:248-658-8445">
                        <FontAwesomeIcon icon={faPhoneAlt}  size="2x" />
                    </a>
                </div>
                <div className="size">
                    <FontAwesomeIcon icon={faUser} size="2x"/>
                </div>    

                
                <ToggleButton click={props.toggleOpenClickHandler} />
                
            </div>
               
        </nav>
    </header>

);


export default NavBar;