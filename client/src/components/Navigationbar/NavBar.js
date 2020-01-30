import React from 'react';
import './NavBar.css';
import ToggleButton from '../ToggelButton/ToggleButton';
import Kevin from './KEVIN_REAL-ESTATE.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'


const NavBar = props => (
    <header className="navigationbar">
        <nav className="navbar">
            <div className="navbar_logo"><img src={Kevin} alt="Logo"/><a href="/"></a></div>
            <div className="spacer"></div>
            <div className="navbar_items">
           
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Advanced Search</a></li>
                    <li><a href="/">Market Reports</a></li>
                    <li><a href="/">Buying</a></li>
                    <li><a href="/">Selling</a></li>
                    <li><a href="/">Foreclosures</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Contact Us</a></li>
                    <li><a href="/">By Laws</a></li>
                    <a href="mailto:soldbycermak@gmail.com">
                        <FontAwesomeIcon icon={faEnvelope} size="2x"/>
                    </a >
                    <a href="tel:248-658-8445">
                        <FontAwesomeIcon icon={faPhoneAlt}  size="2x" />
                    </a>
                    <div>
                        <FontAwesomeIcon icon={faUser} size="2x"/>
                    </div>    

                    <div classname="toggle">
                       <ToggleButton />
                   </div>
               
                </ul>
                
            </div>
        </nav>
    </header>

);


export default NavBar;