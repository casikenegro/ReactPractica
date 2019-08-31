import React, { useState } from 'react';
import WeatherInfo from './WeatherInfo';
import axios from 'axios';




export default function WheaterFrom(props){
    const [locations,setLocations]= useState([{city:'', country: ''}]);
    const [data,setData]=useState([{}]);

    const handleSubmint =  e =>{
        e.preventDefault();
        if(locations.city && locations.country){
          axios.get( `https://samples.openweathermap.org/data/2.5/weather?q=${locations.city},${locations.country}&appid=b6907d289e10d714a6e88b30761fae22`
            ).then(res =>{
             console.log(res)
            setData(res);
      
          }).catch(err => {
             console.log(err)
          })
        }
    }
   // no consegui una forma eficiente de verdad para pasar el props este dime ahi para mejorar mas rapido
   
    return (
        <div className="card card-boyd">
            <form onSubmit={handleSubmint} >
                    <div className="form-group">
                    <input type="text" value={locations.city} onChange={e => setLocations({...locations,city : e.target.value})}
                    className="form-control"/>
                </div>
                <div className="form-group">
                    <input type="text" value={locations.country} onChange={e => setLocations({...locations,country : e.target.value})} 
                    className="form-control"/>
                </div>
              <button className="btn  btn-success btn-block"> Get weather maldito cuero</button>
            </form>
            {
             
            }
            <WeatherInfo />

        </div>
    );
        }
