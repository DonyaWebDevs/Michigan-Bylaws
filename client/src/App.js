import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import { Button, Card, CardBody, Collapse} from "reactstrap"
import './App.css';

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
import Northville from './components/cities/Northville';
import NewHudson from './components/cities/NewHudson';
import Novi from './components/cities/Novi';
import Plymouth from './components/cities/Plymouth';
import SouthLyon from './components/cities/SouthLyon';
import WalledLake from './components/cities/WalledLake';
import WaterFord from './components/cities/Waterford';
import Westland from './components/cities/Westland';
import Wixom from './components/cities/Wixom';
import WestBloomfield from './components/cities/WestBloomfield';
import Southfield from './components/cities/Southfield';
import Brighton from './components/cities/Brighton';




export default function App () {


  const [canton, setCanton] = useState(false);
  const [commerce, setCommerce] = useState(false);
  const [farmington, setFarmington] = useState(false);
  const [farmingtonHills, setFargmingtonHills] = useState(false);
  const [greenOak, setGreenOak] = useState(false);
  const [livonia, setLivonia] = useState(false);
  const [milford, setMilford] = useState(false);
  const [newHudson, setNewHudson] = useState(false);
  const [northville, setNorthville] = useState(false);
  const [novi, setNovi] = useState(false);
  const [plymouth, setPlymouth] = useState(false);
  const [southLyon, setSouthLyon] = useState(false);
  const [walledLake, setWalledLake] = useState(false);
  const [waterford, setWaterford] = useState(false);
  const [westland, setWestland] = useState(false);
  const [wixom, setWixom] = useState(false);
  const [brighton, setBrighton] = useState(false);
  const [westBloomfield, setWestBloomfield] = useState(false);
  const [southfield, setSouthfield] = useState(false);

  
  const tCanton = () => setCanton(!canton);
  const tCommerce = () => setCommerce(!commerce);
  const tFarmginton = () => setFarmington(!farmington);
  const tFarmingtonH = () => setFargmingtonHills(!farmingtonHills);
  const tGreenOak = () => setGreenOak(!greenOak);
  const tLivonia = () => setLivonia(!livonia);
  const tMilford = () => setMilford(!milford);
  const tNewHudson = () => setNewHudson(!newHudson);
  const tNorthville = () => setNorthville(!northville);
  const tNovi = () => setNovi(!novi);
  const tPlymouth = () => setPlymouth(!plymouth);
  const tSouthLyon = () => setSouthLyon(!southLyon);
  const tWalledlake = () => setWalledLake(!walledLake);
  const tWaterford = () => setWaterford(!waterford);
  const tWestland = () => setWestland(!westland);
  const tWixom = () => setWixom(!wixom);
  const tWestBloomfield = () => setWestBloomfield(!westBloomfield); 
  const tBrighton= () => setBrighton(!brighton);
  const tSouthfield = () => setSouthfield(!southfield);




    return (
      <div className="App">
        

          <Navigationbar  />

          <section className="sub-header">
            <h1 className="title">Bylaws</h1>
            <br />

            <div className="sub-header-column">
              <h2 className="association">
              Association Bylaws, Master Deeds, Covenants, Restrictions, Declarations
              </h2>
              <br />
              
              <h2 className="info">
              A collection of bylaws for the Metro Detroit area, which you are free to download and use. <br/>
              If you have additional bylaws which are not available here, please email them to us. 
              
            </h2>
            </div>

          </section>
          <div className="buttons-container" >
          <div className="button-card">
            <Button onClick={tBrighton} className="button">Brighton</Button>
            <Collapse isOpen={brighton}>
              <Card>
                <CardBody>
                  <Brighton />
                </CardBody>
              </Card>
            </Collapse>
          </div> 
          <div className="button-card">
            <Button  onClick={tCanton} className="button">Canton</Button>
            <Collapse isOpen={canton}>
              <Card>
                <CardBody>
                  <Canton />
                </CardBody>
              </Card>
            </Collapse>
          </div>
          <div className="button-card">
            <Button onClick={tCommerce} className="button">Commerce</Button>
            <Collapse isOpen={commerce}>
              <Card>
                <CardBody>
                  <Commerce />
                </CardBody>
              </Card>
            </Collapse>
          </div>
          <div className="button-card">
            <Button onClick={tFarmginton} className="button">Farmington</Button>
            <Collapse isOpen={farmington}>
              <Card>
                <CardBody>
                  <Farmington />
                </CardBody>
              </Card>
            </Collapse>
          </div>
         <div className="button-card">
          <Button onClick={tFarmingtonH} className="button">Farmington Hills</Button>
          <Collapse isOpen={farmingtonHills}>
            <Card>
              <CardBody>
                <FarmingtonHills />
              </CardBody>
            </Card>
          </Collapse>
        </div>
        <div className="button-card">
            <Button onClick={tGreenOak} className="button">Green Oak Twp.</Button>
            <Collapse isOpen={greenOak}>
              <Card>
                <CardBody>
                  <GreenOak/>
                </CardBody>
              </Card>
            </Collapse>
          </div>
          <div className="button-card">
            <Button onClick={tLivonia} className="button">Livonia</Button>
            <Collapse isOpen={livonia}>
              <Card>
                <CardBody>
                  <Livonia/>
                </CardBody>
              </Card>
            </Collapse>
          </div>
         <div className="button-card">
            <Button onClick={tMilford} className="button">Milford</Button>
            <Collapse isOpen={milford}>
              <Card>
                <CardBody>
                  <Milford/>
                </CardBody>
              </Card>
            </Collapse>
          </div>
          <div className="button-card">
            <Button onClick={tNewHudson} className="button">New Hudson</Button>
            <Collapse isOpen={newHudson}>
              <Card>
                <CardBody>
                  <NewHudson/>
                </CardBody>
              </Card>
            </Collapse>
          </div>
          <div className="button-card">
            <Button onClick={tNorthville} className="button">Northville</Button>
            <Collapse isOpen={northville}>
              <Card>
                <CardBody>
                  <Northville/>
                </CardBody>
              </Card>
            </Collapse>
          </div>
          <div className="button-card">
            <Button onClick={tNovi} className="button">Novi</Button>
            <Collapse isOpen={novi}>
              <Card>
                <CardBody>
                  <Novi/>
                </CardBody>
              </Card>
            </Collapse>
          </div>
          <div className="button-card">
            <Button onClick={tPlymouth} className="button">Plymouth</Button>
            <Collapse isOpen={plymouth}>
              <Card>
                <CardBody>
                  <Plymouth/>
                </CardBody>
              </Card>
            </Collapse>
          </div>
          <div className="button-card">
            <Button onClick={tSouthfield} className="button">South Field</Button>
            <Collapse isOpen={southfield}>
              <Card>
                <CardBody>
                  <Southfield />
                </CardBody>
              </Card>
            </Collapse>
          </div>
          <div className="button-card">
            <Button onClick={tSouthLyon} className="button">South Lyon</Button>
            <Collapse isOpen={southLyon}>
              <Card>
                <CardBody>
                  <SouthLyon />
                </CardBody>
              </Card>
            </Collapse>
          </div>
          <div className="button-card">
            <Button onClick={tWalledlake} className="button">Walled Lake</Button>
            <Collapse isOpen={walledLake}>
              <Card>
                <CardBody>
                  <WalledLake/>
                </CardBody>
              </Card>
            </Collapse>
          </div>
          <div className="button-card">
            <Button onClick={tWaterford} className="button">Waterford</Button>
            <Collapse isOpen={waterford}>
              <Card>
                <CardBody>
                  <WaterFord/>
                </CardBody>
              </Card>
            </Collapse>
          </div>
          <div className="button-card">
            <Button onClick={tWestBloomfield} className="button">West Bloomfield</Button>
            <Collapse isOpen={westBloomfield}>
              <Card>
                <CardBody>
                  <WestBloomfield />
                </CardBody>
              </Card>
            </Collapse>
          </div>
          <div className="button-card">
            <Button onClick={tWestland} className="button">Westland</Button>
            <Collapse isOpen={westland}>
              <Card>
                <CardBody>
                  <Westland/>
                </CardBody>
              </Card>
            </Collapse>
          </div>
          <div className="button-card">
            <Button onClick={tWixom} className="button">Wixom</Button>
            <Collapse isOpen={wixom}>
              <Card>
                <CardBody>
                  <Wixom/>
                </CardBody>
              </Card>
            </Collapse>
          </div>
          </div>
          
        
        <Footer />
      </div>
    
   
  );
 }


