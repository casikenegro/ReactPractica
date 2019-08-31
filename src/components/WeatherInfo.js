import React,{ useState} from 'react';

export default function WeatherInfo(props){
    const valite = props =>{
        if (props.data === null) {
            return 'ingrese una locacion ';
          }
          return 'locacion encontrada';
    }
  
  return(
      <div>
          {
              valite
          }
      </div>
  );   
}