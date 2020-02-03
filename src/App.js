import React, { Component } from 'react';
import './App.css';
import Header from './components/header_component/header.component'
import NavBar from './components/nav_component/nav.component'
import Banner from './components/banner_component/banner.component'
import About from './components/about_component/about.component'
import Projects from './components/projects_component/projects.component'
import Contact from './components/Contact_component/Contact.component'
import Weather from './components/weather_component/weather.component'


//api call api.openweathermap.org/data/2.5/weather?q=London,uk
const API_KEY = 'c6eb35300aec01814f790a3987bcac43';


//App
class App extends React.Component {
  constructor(){
    super();
    this.state = {
      city : undefined,
      country : undefined
    };
    this.getWeather();
  }

  calCelsius(temp){
    let cell = Math.floor(temp - 273.15);
    return cell;
  }

  getWeather= async () =>{
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Stockholm,se&appid=${API_KEY}`);

    const response = await api_call.json();

    console.log(response);

    this.setState({
      city : response.name,
      country : response.sys.country,
      celsius : this.calCelsius(response.main.temp),
      description : '',
      error : false
    })
  }

  render() {
    return (
      <div className='App'>
        <Banner />
        <Header />
        <NavBar />
        <About />
        <Projects />
        <Contact />
        <Weather
          city={this.state.city}
          country={this.state.country}
          temp_celsius={this.state.celsius}
          description={this.state.description} />
        
        
        
      </div>
    );
  }
}

export default App;
