import React from 'react';
import { useState } from "react";

import Title from "./components/Title";
import Form from "./components/Form";
import Results from "./components/Results";
import './App.css';

type ResultsStateType = {
  country: string;
  cityName: string;
  temperature: string;
  conditionText: string;
  icon: string;
}

function App() {
  const [city, setCity] = useState<string>("");
  const [results, setResults] = useState<ResultsStateType>({
    country: "",
    cityName: "",
    temperature: "",
    conditionText: "",
    icon: ""
  });
  const getWeather = (e:any) => {
      e.preventDefault();
      fetch("https://api.weatherapi.com/v1/current.json?key=929a4275ed0c4275982160943230704&q=London&aqi=no")
      .then(res => res.json())
      .then(data => console.log(data))
  }
  return (
    <div className="App">
      <Title />
      <Form setCity={setCity} getWeather={getWeather} />
      <Results />
    </div>
  );
}

export default App;
