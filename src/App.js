import axios from "axios";
import React, { useState, useEffect } from "react";
import "./App.css";
import Explanation from "./components/Explanation";
import NasaImage from "./components/NasaImage";
import Title from "./components/Title";

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
    <div className="App">
      <Title title={nasaData.title} date={nasaData.date}/>
      <NasaImage image={nasaData.url} />
      <Explanation explanation={nasaData.explanation} copyright={nasaData.copyright}/>
    </div>
  );
}

export default App;
