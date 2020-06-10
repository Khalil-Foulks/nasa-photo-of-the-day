import React, {useState, useEffect} from "react";
import "./App.css";

import axios from 'axios';

import PictureInfo from './components/PictureContainer/PictureInfo'


function App() {
  const BASE_URL = 'https://api.nasa.gov/planetary/apod'
  const API_KEY = 'DEMO_KEY'
  const [nasaData, setNasaData] = useState({})
  console.log('1',nasaData)

  useEffect(() =>{
    axios.get(`${BASE_URL}/?api_key=${API_KEY}`)
    .then(res =>{
      debugger
      console.log(res)
      setNasaData(res.data)
      
    })
    .catch(err =>{
      debugger
      console.log('Error MSG:', err)
    })
  }, [])

  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>

      <PictureInfo key = {nasaData.url} picInfo = {nasaData} />

    </div>
  );
}

export default App;
