import React, { Component } from 'react';
import './App.css';
import Header from './components/header_component/header.component'
import NavBar from './components/nav_component/nav.component'
import Banner from './components/banner_component/banner.component'
import About from './components/about_component/about.component'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Banner />
        <Header />
        <NavBar />
        <About/>
        
        
        
      </div>
    );
  }
}

export default App;
