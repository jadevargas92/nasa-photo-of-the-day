import axios from "axios";
import React, { useState, useEffect } from "react";
import "./App.css";
import Explanation from "./components/Explanation";
import NasaImage from "./components/NasaImage";
import Title from "./components/Title";
import styled from 'styled-components'

const StyledDiv = styled.div`
  width: 100%;
  margin: auto;
  font-family: montserrat;
  background: #DC2424;
  background: -webkit-linear-gradient(to right, #4A569D, #DC2424);  
  background: linear-gradient(to right, #4A569D, #DC2424);


`;

function App() {
  const [nasaData, setNasaData] = useState([]);

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then(response => {
      console.log(response.data)
      setNasaData(response.data)
    })
    .catch(err => {
      console.log(err);
    })
  }, [])

  return (
    <StyledDiv className="App">
      <Title title={nasaData.title} date={nasaData.date}/>
      <NasaImage image={nasaData.url} mediaType={nasaData.media_type}/>
      <Explanation explanation={nasaData.explanation} copyright={nasaData.copyright}/>
    </StyledDiv>
  );
}

export default App;
