import React from 'react';
import Navigationbar from './components/Navigationbar/NavBar';
import Footer from './components/footer/Footer';
import Toggle from './components/Toggle/Toggle';
import Wheel from './components/carousel/Carousel';
import Canton from './components/cities/Canton';
import Commerce from './components/cities/Commerce';
import Farmington from './components/cities/Farmington';
import FarmingtonHills from './components/cities/FarmingtonHills';
import GreenOak  from './components/cities/GreenOak';
import Livonia from './components/cities/Livonia';
import Milford from './components/cities/Milford';
import NewHudson from './components/cities/NewHudson';
import Novi from './components/cities/Novi';
import Plymouth from './components/cities/Plymouth';
import SouthLyon from './components/cities/SouthLyon';
import WalledLake from './components/cities/WalledLake';
import WaterFord from './components/cities/Waterford';
import Westland from './components/cities/Westland';
import Wixom from './components/cities/Wixom';
import { Route } from 'react-router-dom';




export default function App () {
 
    return (
      <div className="App">
        
          <Navigationbar  />
          
          
        
        <div>
          {/* Routing below */}
          <Route exact path="/" component={Wheel}/>
          <Route path="/canton" component={Canton} />
          {/* <Route path="/commerce" component={Commerce} />
          <Route path="/farmington" component={Framington} />
          <Route path="/farmington-hills" component={FarmingtonHills} />
          <Route path="/green-oak-township" component={GreenOak} />
          <Route path="/livonia" component={Livonia} />
          <Route path="/milford" component={Milford} />
          <Route path="/new-hudson" component={NewHudson} />
          <Route path="/novi" component={Novi} />
          <Route path="/plymouth" component={Plymouth} />
          <Route path="/south-lyon" component={SouthLyon} />
          <Route path="/walled-lake" component={WalledLake} />
          <Route path="/waterford" component={Waterford} />
          <Route path="/westland" component={Westland} />
          <Route path="/wixom" component={Wixom} /> */}


        </div>
        
        <Footer />
      </div>
    
   
  );
 }


