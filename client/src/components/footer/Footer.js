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
                    <li> <a href="https://www.soldbycermak.com/ann-arbor-mi-homes-for-sale/">Ann Arbor</a></li>
                    <li> <a href="https://www.soldbycermak.com/berkley-mi-homes-for-sale/">Berkley</a></li>
                    <li> <a href="https://www.soldbycermak.com/birmingham-mi-homes-for-sale/">Birmingham</a></li>
                    <li> <a href="https://www.soldbycermak.com/bloomfield-mi-homes-for-sale/">Bloomfield</a></li>
                    <li> <a href="https://www.soldbycermak.com/brighton-mi-homes-for-sale/">Brighton</a></li>
                    <li> <a href="https://www.soldbycermak.com/canton-mi-homes-for-sale/">Canton</a></li>
                    <li> <a href="https://www.soldbycermak.com/clarkston-mi-homes-for-sale/">Clarkstone</a></li>
                    <li> <a href="https://www.soldbycermak.com/commerce-mi-homes-for-sale/">Commerce</a></li>
                    <li> <a href="https://www.soldbycermak.com/farmington-hills-mi-homes-for-sale/">Farmington Hills</a></li>
                    <li> <a href="https://www.soldbycermak.com/ferndale-mi-homes-for-sale/">Ferndale</a></li>
                    <li> <a href="https://www.soldbycermak.com/livonia-mi-homes-for-sale/">Livonia</a></li>
                    <li> <a href="https://www.soldbycermak.com/madison-heights-mi-homes-for-sale/">Madison Heights</a></li>
                    <li> <a href="https://www.soldbycermak.com/milford-mi-homes-for-sale/">Milford</a></li>
                    <li> <a href="https://www.soldbycermak.com/northville-mi-homes-for-sale/">Northville</a></li>
                    <li> <a href="https://www.soldbycermak.com/novi-mi-homes-for-sale/">Novi</a></li>
                    <li> <a href="https://www.soldbycermak.com/plymouth-mi-homes-for-sale/">Plymouth</a></li>
                    <li> <a href="https://www.soldbycermak.com/rochester-mi-homes-for-sale/">Rochester</a></li>
                    <li> <a href="https://www.soldbycermak.com/rochester-hills-mi-homes-for-sale/">Rochester Hills</a></li>
                    <li> <a href="https://www.soldbycermak.com/royal-oak-mi-homes-for-sale/">Royal Oak</a></li>
                    <li> <a href="https://www.soldbycermak.com/south-lyon-mi-homes-for-sale/">South Lyon</a></li>
                    <li> <a href="https://www.soldbycermak.com/westland-mi-homes-for-sale/">Westland</a></li>
                    <li> <a href="https://www.soldbycermak.com/wixom-mi-homes-for-sale/">Wixom</a></li>
                  </ul>
                   
                    
                </div>
            </footer>
        </div>
    )
}

export default Footer;