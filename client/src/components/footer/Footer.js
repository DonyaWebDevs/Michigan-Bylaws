import React from 'react';
import "../footer/Footer.css";
import NRC from "../images/NRClogo.jpg";
import MLS from "../images/realtor-equal.png";


const Footer = () => {

    return (
        <div>
            <footer className="footer-container">
                <div className="footer-top">
                    <div className="footer-image">
                        <div className="footer-image_NRC">
                            <img src={NRC} alt="National Retail Centers "></img>
                        </div>
                        <div className="footer-image_MLS">
                            <img src={MLS} alt="MLS logo"></img>
                        </div>
                    </div>
                    <div className="footer-name">
                        <p>KEVIN CERMAK REAL ESTATE GROUP</p>
                    </div>
                    <div className="footer-address">
                        <p>Northville/ Birmingham/ Livonia</p>
                        <p>116 W. Main Street</p>
                        <p>Northville, MI 48167</p>
                    </div>
                    <div className="footer-number">
                        <p>(248)658-8445</p>
                    </div>
                        <p className="footer-copyright">&copy; All Rights Reserved</p>
                </div>
                <div className="list-container">
                  <ul className="list">
                    <li> <a href="/">Ann Arbor</a></li>
                    <li> <a href="/">Berkley</a></li>
                    <li> <a href="/">Birmingham</a></li>
                    <li> <a href="/">Bloomfield</a></li>
                    <li> <a href="/">Brighton</a></li>
                    <li> <a href="/">Canton</a></li>
                    <li> <a href="/">Clarkstone</a></li>
                    <li> <a href="/">Commerce</a></li>
                    <li> <a href="/">Farmington Hills</a></li>
                    <li> <a href="/">Ferndale</a></li>
                    <li> <a href="/">Livonia</a></li>
                    <li> <a href="/">Madison Heights</a></li>
                    <li> <a href="/">Milford</a></li>
                    <li> <a href="/">Northville</a></li>
                    <li> <a href="/">Novi</a></li>
                    <li> <a href="/">Plymouth</a></li>
                    <li> <a href="/">Rochester</a></li>
                    <li> <a href="/">Rochester Hills</a></li>
                    <li> <a href="/">Royal Oak</a></li>
                    <li> <a href="/">South Lyon</a></li>
                    <li> <a href="/">Westland</a></li>
                    <li> <a href="/">Wixom</a></li>
                  </ul>
                   
                    
                </div>
            </footer>
        </div>
    )
}

export default Footer;