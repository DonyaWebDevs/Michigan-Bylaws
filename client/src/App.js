import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import { Button, Card, CardBody, Collapse} from "reactstrap"

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



    return (
      <div className="App">
        
          <Navigationbar  />
          
          <div>
            <Button className="button" onClick={tCanton} style={{ marginBottom: '1rem', background: 'crimson', width: '40%', border:'1px solid black' }}>Canton</Button>
            <Collapse isOpen={canton}>
              <Card>
                <CardBody>
                  <Canton />
                </CardBody>
              </Card>
            </Collapse>
          </div>

          <div>
            <Button color="primary" onClick={tCommerce} style={{ marginBottom: '1rem', background: 'crimson', width: '40%', border:'1px solid black' }}>Commerce</Button>
            <Collapse isOpen={commerce}>
              <Card>
                <CardBody>
                  <Commerce />
                </CardBody>
              </Card>
            </Collapse>
          </div>
          <div>
            <Button color="primary" onClick={tFarmginton} style={{ marginBottom: '1rem', background: 'crimson', width: '40%', border:'1px solid black' }}>Farmington</Button>
            <Collapse isOpen={farmington}>
              <Card>
                <CardBody>
                  <Farmington />
                </CardBody>
              </Card>
            </Collapse>
          </div>
         <div>
          <Button color="primary" onClick={tFarmingtonH} style={{ marginBottom: '1rem', background: 'crimson', width: '40%', border:'1px solid black' }}>Farmington Hills</Button>
          <Collapse isOpen={farmingtonHills}>
            <Card>
              <CardBody>
                <FarmingtonHills />
              </CardBody>
            </Card>
          </Collapse>
        </div>
        <div>
            <Button color="primary" onClick={tGreenOak} style={{ marginBottom: '1rem', background: 'crimson', width: '40%', border:'1px solid black' }}>Green Oak Township</Button>
            <Collapse isOpen={greenOak}>
              <Card>
                <CardBody>
                  <GreenOak/>
                </CardBody>
              </Card>
            </Collapse>
          </div>
          <div>
            <Button color="primary" onClick={tLivonia} style={{ marginBottom: '1rem', background: 'crimson', width: '40%', border:'1px solid black' }}>Livonia</Button>
            <Collapse isOpen={livonia}>
              <Card>
                <CardBody>
                  <Livonia/>
                </CardBody>
              </Card>
            </Collapse>
          </div>
         <div>
            <Button color="primary" onClick={tMilford} style={{ marginBottom: '1rem', background: 'crimson', width: '40%', border:'1px solid black' }}>Milford</Button>
            <Collapse isOpen={milford}>
              <Card>
                <CardBody>
                  <Milford/>
                </CardBody>
              </Card>
            </Collapse>
          </div>
          <div>
            <Button color="primary" onClick={tNewHudson} style={{ marginBottom: '1rem', background: 'crimson', width: '40%', border:'1px solid black' }}>New Hudson</Button>
            <Collapse isOpen={newHudson}>
              <Card>
                <CardBody>
                  <NewHudson/>
                </CardBody>
              </Card>
            </Collapse>
          </div>
          <div>
            <Button color="primary" onClick={tNorthville} style={{ marginBottom: '1rem', background: 'crimson', width: '40%', border:'1px solid black' }}>Northville</Button>
            <Collapse isOpen={northville}>
              <Card>
                <CardBody>
                  <Northville/>
                </CardBody>
              </Card>
            </Collapse>
          </div>
          <div>
            <Button color="primary" onClick={tNovi} style={{ marginBottom: '1rem', background: 'crimson', width: '40%', border:'1px solid black' }}>Novi</Button>
            <Collapse isOpen={novi}>
              <Card>
                <CardBody>
                  <Novi/>
                </CardBody>
              </Card>
            </Collapse>
          </div>
          <div>
            <Button color="primary" onClick={tPlymouth} style={{ marginBottom: '1rem', background: 'crimson', width: '40%', border:'1px solid black' }}>Plymouth</Button>
            <Collapse isOpen={plymouth}>
              <Card>
                <CardBody>
                  <Plymouth/>
                </CardBody>
              </Card>
            </Collapse>
          </div>
          <div>
            <Button color="primary" onClick={tSouthLyon} style={{ marginBottom: '1rem', background: 'crimson', width: '40%', border:'1px solid black' }}>South Lyon</Button>
            <Collapse isOpen={southLyon}>
              <Card>
                <CardBody>
                  <SouthLyon />
                </CardBody>
              </Card>
            </Collapse>
          </div>
          <div>
            <Button color="primary" onClick={tWalledlake} style={{ marginBottom: '1rem', background: 'crimson', width: '40%', border:'1px solid black' }}>Walled Lake</Button>
            <Collapse isOpen={walledLake}>
              <Card>
                <CardBody>
                  <WalledLake/>
                </CardBody>
              </Card>
            </Collapse>
          </div>
          <div>
            <Button color="primary" onClick={tWaterford} style={{ marginBottom: '1rem', background: 'crimson', width: '40%', border:'1px solid black' }}>Waterford</Button>
            <Collapse isOpen={waterford}>
              <Card>
                <CardBody>
                  <WaterFord/>
                </CardBody>
              </Card>
            </Collapse>
          </div>
          <div>
            <Button color="primary" onClick={tWestland} style={{ marginBottom: '1rem', background: 'crimson', width: '40%', border:'1px solid black' }}>Westland</Button>
            <Collapse isOpen={westland}>
              <Card>
                <CardBody>
                  <Westland/>
                </CardBody>
              </Card>
            </Collapse>
          </div>
          <div>
            <Button color="primary" onClick={tWixom} style={{ marginBottom: '1rem', background: 'crimson', width: '40%', border:'1px solid black' }}>Wixom</Button>
            <Collapse isOpen={wixom}>
              <Card>
                <CardBody>
                  <Wixom/>
                </CardBody>
              </Card>
            </Collapse>
          </div>
          
          
          
          <div>
          {/* Routing below
          <Route exact path="/" component={Wheel}/>
          <Route path="/canton" component={Canton} />
          <Route path="/commerce" component={Commerce} />
          <Route path="/farmington" component={Farmington} />
          <Route path="/farmington-hills" component={FarmingtonHills} />
          <Route path="/green-oak" component={GreenOak} />
          <Route path="/livonia" component={Livonia} />
          <Route path="/milford" component={Milford} />
          <Route path="/new-hudson" component={NewHudson} />
          <Route path="/novi" component={Novi} />
          <Route path="/plymouth" component={Plymouth} />
          <Route path="/south-lyon" component={SouthLyon} />
          <Route path="/walled-lake" component={WalledLake} />
          <Route path="/waterford" component={WaterFord} />
          <Route path="/westland" component={Westland} />
          <Route path="/wixom" component={Wixom} /> */}


        </div>
        
        <Footer />
      </div>
    
   
  );
 }


