import React from 'react'
import styled from "styled-components";

const WeatherBlock = styled.div`
  border: 2px solid #fff;
  padding: 30px 60px;
  margin-bottom: 10px;
  border-radius: 10px;
`

const WeatherBox = ({weather}) => {
  console.log(weather)
  const fahrenheit = weather?.main.temp * 1.8 + 32;
  return (
    <WeatherBlock>
        <div>{weather?.name}</div>
        <h2>현재 {weather?.main.temp}도 / {fahrenheit}화씨</h2>
        <h2>최고 {weather?.main.temp_max} / 최저 {weather?.main.temp_min}</h2>
        <h3>{weather?.weather[0].description}</h3>
    </WeatherBlock>
  )
}

export default WeatherBox