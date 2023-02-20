import React, { useState } from 'react'
import styled from 'styled-components'

const BtnBox = styled.div`
  display: flex;
`
const Button = styled.button`
  padding: 10px 12px;
  border: 0;
  border-radius: 5px;
  background: #0d6efd;
  color: #fff;
  font-size: 15px;
  cursor: pointer;
  margin: 0 5px;
`

const WeatherBtn = ({cities, setCity, handleCityChange}) => {
  return (
    <BtnBox>
      <Button
    onClick={() => handleCityChange("current")}
  >
    Current Location
  </Button>
      {
        cities.map((item, i) => (
          <Button 
            key={i}
            onClick={() => setCity(item)}
          >{item}</Button>
        ))
      }
    </BtnBox>
  )
}

export default WeatherBtn