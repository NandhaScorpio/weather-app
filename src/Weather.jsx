import { useState } from "react";
import axios from "axios";

const Weather = () => {
  const [city, setCity] = useState();

  const [weather,setWeather] = useState();
  const [temp,setTemp] = useState();
  const [desc,setDesc] = useState();

  function handleCity(evt) {
    setCity(evt.target.value);
  }

  function getWeather() {
    const data = axios(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b22f03f999193f52720c4ee72f0ca2f9`
    );

    data.then((usrdata)=>{
        setWeather(usrdata.data.weather[0].main)
        setTemp(Math.floor(usrdata.data.main.temp-273.15))
        setDesc(usrdata.data.weather[0].description)
    }).catch(()=>{
        console.log("Failed")
    })
  }

  return (
    <div className="bg-black p-16">
      <div className="bg-[#4CDD81] p-10 rounded-md">
        <h1 className="text-3xl font-semibold">Weather Report</h1>
        <p>I can give you a weather report about your city !</p>
        <input
          type="text"
          placeholder="Enter Your City Name"
          className="p-1 mt-2 rounded-md border-black border"
          id="input"
          value={city}
          onChange={handleCity}
        />
        <br />
        <button className="py-2 px-1 bg-black text-white rounded-lg mt-2" onClick={getWeather}>
          Get Report
        </button>
        <p className="font-bold mt-2">Weather : <b className="text-red-700">{weather}</b></p>
        <p className="font-bold">Temperature : <b className="text-red-700">{temp}°C</b></p>
        <p className="font-bold">Description : <b className="text-red-700">{desc}</b></p>
      </div>
    </div>
  );
};

export default Weather;
