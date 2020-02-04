import React, { Component } from 'react';
import Navigationbar from './components/Navigationbar/NavBar';
import Footer from './components/footer/Footer';
import Toggle from './components/Toggle/Toggle'
import SubFooter from './components/SubFooter/SubFooter';



class App extends Component {
  state = {
    toggleOpen: false
  };
  toggleOpenClickHandler = () => {
    this.setState((prevState) => {
      return {toggleOpen: !prevState.toggleOpen};
    });
  };
  render () {
    let toggle;
    if(this.state.toggleOpen){
      toggle = <Toggle />
    }
    return (
      <div className="App">
        <Navigationbar toggleClickHandler={this.toggleOpenClickHandler} />
        {toggle}
        
        <main style= {{marginTop: '64px'}}>
        
        </main>
        <Footer />
        <SubFooter />
      </div>
    
   
  );
 }
}

export default App;
