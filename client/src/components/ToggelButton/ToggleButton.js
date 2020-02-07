import React, {useState} from 'react';
import './ToggleButton.css';

import Toggle from '../Toggle/Toggle';
import { useToggle } from '../hooks/useToggle';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Button from "@material-ui/core/Button"

const ToggleButton = props => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

   
    

    return(

        <Dropdown className="toggle_button" isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle className="toggle_color" color="light" caret>
            <FontAwesomeIcon icon={faBars} size="2x"/>
        </DropdownToggle>
        <DropdownMenu right>
         
          
          <DropdownItem><a href="/">Item </a></DropdownItem>
          <DropdownItem><a href="/">Home</a></DropdownItem>
         <DropdownItem><a href="/">Advanced Search</a></DropdownItem>
         <DropdownItem><a href="/">Market Reports</a></DropdownItem>
         <DropdownItem><a href="/">Buying</a></DropdownItem>
         <DropdownItem><a href="/">Selling</a></DropdownItem>
         <DropdownItem><a href="/">Foreclosures</a></DropdownItem>
         <DropdownItem><a href="/">About</a></DropdownItem>
         <DropdownItem><a href="/">Contact Us</a></DropdownItem>
         <DropdownItem><a href="/">By Laws</a></DropdownItem>
          
        </DropdownMenu>
      </Dropdown>
       
    )
}


export default ToggleButton;