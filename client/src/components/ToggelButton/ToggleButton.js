import React, {useState} from 'react';
import './ToggleButton.css';



import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const ToggleButton = props => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

   
    

    return(

        <Dropdown className="toggle_button" isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle className="toggle_color" color="light" caret>
            <FontAwesomeIcon icon={faBars} size="2x"/>
        </DropdownToggle>
        <DropdownMenu right>
         
          
          
         <DropdownItem><a href="https://www.soldbycermak.com/">Home</a></DropdownItem>
         <DropdownItem><a href="https://www.soldbycermak.com/search/advanced_search/">Advanced Search</a></DropdownItem>
         <DropdownItem><a href="https://www.soldbycermak.com/search/market_report_search/">Market Reports</a></DropdownItem>
         <DropdownItem><a href="https://www.soldbycermak.com/buying/">Buying</a></DropdownItem>
         <DropdownItem><a href="https://www.soldbycermak.com/selling/">Selling</a></DropdownItem>
         <DropdownItem><a href="https://www.soldbycermak.com/foreclosures/">Foreclosures</a></DropdownItem>
         <DropdownItem><a href="https://www.soldbycermak.com/about/">About Us</a></DropdownItem>
         <DropdownItem><a href="/">By Laws</a></DropdownItem>
          
        </DropdownMenu>
      </Dropdown>
      
    )
}


export default ToggleButton;