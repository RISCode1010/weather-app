import React,{useState} from 'react'
import { ReactComponent as LocationSvg } from '../assets/Location.svg';
import Box from './Box';
import "../style/home.css";

function Home() {

    // const [searchfield, setSearchfield] = useState('');

    
    
    function getFormattedCurrentDate() {
      const today = new Date();
      const year = today.getFullYear();
      const month = (today.getMonth() + 1).toString().padStart(2, '0');
      const day = today.getDate().toString().padStart(2, '0');
      return `${year}-${month}-${day}`;}

    const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [reqWeatherData, setReqWeatherData] = useState(null);
  const [selectedDate, setSelectedDate] = useState(getFormattedCurrentDate());



  const handleSearch = async () => {
    // Make API request to OpenWeatherMap
    // Replace 'YOUR_API_KEY' with your actual OpenWeatherMap API key
    const apiKey = 'd1845658f92b31c64bd94f06f7188c9c';
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      console.log(data);
      setWeatherData(data);
      const selectedDateIndex = data.list.findIndex(
        (item) => item.dt_txt.split(' ')[0] === selectedDate
      );
      console.log(selectedDateIndex,"-----",selectedDateIndex+5);
      setReqWeatherData(data.list.slice(selectedDateIndex, selectedDateIndex + 5));
    //   console.log("data  ",weatherData);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  function convertDecimalToDMS(decimalCoordinate, isLatitude) {
    const degrees = Math.floor(decimalCoordinate);
    const minutesDecimal = (decimalCoordinate - degrees) * 60;
    const minutes = Math.floor(minutesDecimal);
    const seconds = Math.round((minutesDecimal - minutes) * 60);
  
    const direction = isLatitude ? (degrees >= 0 ? 'N' : 'S') : (degrees >= 0 ? 'E' : 'W');
  
    return `${Math.abs(degrees)}°${minutes}'${seconds}'' ${direction}`;
  }


  const handleDateChange = (event) => {
    // Update the selected date when the input changes
    console.log(event.target.value);
    setSelectedDate(event.target.value);
  };

  return (
    <div className='home'>
        <div className="top_part">
            <div className="innerpart">
                <div className="location_section">
                    <div className="location_name_section">
                        <LocationSvg className="location_svg"/>
                        {weatherData && <div className="loction_name">{weatherData.city.name}</div>}
                    </div>
                    {weatherData && <div className="location_position">{convertDecimalToDMS(weatherData.city.coord.lat,true)} & {convertDecimalToDMS(weatherData.city.coord.lon,false)}</div>}
                </div>
                <div className="search_bar">
                    {/* <input type="text" placeholder='Search your city here...' onChange={onSearchChange} /> */}
                    <input type="text" placeholder="Search your city here..." value={city} onChange={handleChange} />
                    <button onClick={handleSearch}>Search</button>
                </div>
                {/* <div className="line"></div> */}
            </div>
            
        </div>
        <div className="bottom_part">
            <div className="details allbox">
                <div className="date_section">
                    <label htmlFor="start">Start date:</label>
                    <input type="date" id="start" name="trip-start" value={selectedDate} onChange={handleDateChange} />
                </div>
                <div className="detail_heading">
                    <p>High Temperature</p>
                    <p>Low Temperature</p>
                    <p>Humidity</p>
                    <p>Sunrise Time</p>
                    <p>Sunset Time</p>
                </div>
            </div>
            {reqWeatherData && (
                <div className="box-1 allbox">
                {reqWeatherData.map((weather, index) => (
                    <div className='box_data'><label htmlFor="index" >{weather.dt_txt.split(' ')[0]}</label>
                    <Box id="index" key={index} data={weather} all={weatherData}/></div>
                ))}
                </div>
            )}
        </div>
    </div>
  )
}

export default Home




