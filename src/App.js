import React, { useState, useEffect } from 'react';
import './App.css';
import WeatherFrom from './components/WeatherFrom';
import WeatherInfo from './components/WeatherInfo'


function  App() {

 return(

    <div className="container p-3">
      <div className="row">
        <div className="col-md-6 mx-auto">
          <WeatherFrom  />
          <WeatherInfo/>
        </div>
      </div>
    </div>
  

 );
}

export default App;


