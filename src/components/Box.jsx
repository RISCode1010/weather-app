import React from 'react'
import { ReactComponent as WeatherSvg } from '../assets/Weather.svg';
import "../style/box.css";

function Box(props) {
  console.log("props   ",props.data);
  return (
    <div className='box'>
        <div className="upper_part">
            <WeatherSvg/>
            <div className="weather_type">Sunny</div>
        </div>
        <div className="lower_part">
            <p>{Math.trunc(props.data.main.temp_max - 273.15)}&deg;C / {Math.trunc((props.data.main.temp_max - 273.15) * 1.8 + 32)}&deg;F</p>
            <p>{Math.trunc(props.data.main.temp_min - 273.15)}&deg;C / {Math.trunc((props.data.main.temp_min - 273.15) * 1.8 + 32)}&deg;F</p>
            <p>{props.data.main.humidity}%</p>
            <p>{new Date(props.all.city.sunrise * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
            <p>{new Date(props.all.city.sunset * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
        </div>
    </div>
  )
}

export default Box