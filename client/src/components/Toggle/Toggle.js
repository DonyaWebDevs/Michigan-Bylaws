import React from 'react';
import './Toggle.css';

const Toggle = props => (
    <nav className="toggle">
        <ul>
         <li><a href="/">Home</a></li>
         <li><a href="/">Advanced Search</a></li>
         <li><a href="/">Market Reports</a></li>
         <li><a href="/">Buying</a></li>
         <li><a href="/">Selling</a></li>
         <li><a href="/">Foreclosures</a></li>
         <li><a href="/">About Us</a></li>
         <li><a href="/">Contact Us</a></li>
         <li><a href="/">By Laws</a></li>
        </ul>
    </nav>
);

export default Toggle;