import React, { Component } from 'react';
import Navigationbar from './components/Navigationbar/NavBar';
import Footer from './components/Footer';

class App extends Component {
  render () {
    return (
      <div className="App">
        <Navigationbar />
        <main style= {{marginTop: '64px'}}>
        
        </main>
        <Footer />

      </div>
    
   
  );
 }
}

export default App;
