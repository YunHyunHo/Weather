import { useState, useEffect } from "react";
import "./App.css"
import WeatherBox from "./component/WeatherBox";
import WeatherBtn from "./component/WeatherBtn";
import styled from "styled-components";
import {ClipLoader} from "react-spinners";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
`

function App() {
  const cities = [ "tokyo", "new york" ]
  const [ weather, setWeather ] = useState(null);
  const [ loading, setloading] = useState(false);
  const [city, setCity] = useState("")
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position)=>{
      let lat = position.coords.latitude; 
      let lon = position.coords.longitude;
      getWeatherCurrentLocation(lat,lon)
    });
  }

  const getWeatherCurrentLocation = async (lat, lon) =>{
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=85777e878e675fc9b2d39efbb975802f&units=metric`
    setloading(true);
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data);
    setloading(false);
  }
  const getWeatherByCity = async ()=>{
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=85777e878e675fc9b2d39efbb975802f&units=metric`;
    setloading(true);
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data);
    setloading(false)
  }
  const handleCityChange = (city) => {
    if (city === "current") {
      setCity("");
    } else {
      setCity(city);
    }
  };
  useEffect(() => {
    // 현재 위치를 가지고옴
    if( city == "") {
      getCurrentLocation();
    } else{
      getWeatherByCity()

    }
  }, [city]);
  return (
    <>
      {
        loading? 
        <Container>
          <ClipLoader
            color="#fff"
            loading={loading}
            size={150}
          />
        </Container> :
        <Container>
          <WeatherBox weather={weather}></WeatherBox>
          <WeatherBtn 
          cities={cities}
          setCity={setCity}
          handleCityChange={handleCityChange}
          ></WeatherBtn>
      </Container>
      }
     
    </>
  );
} 

export default App;
