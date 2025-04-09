import { useState, useEffect } from 'react';
import './App.css'

import * as SpaceshipFetch from './assets/Components/SpaceshipFetch/SpaceshipFetch.js';
import SpaceshipSearch from './assets/Components/SpaceshipSearch/SpaceshipSearch.jsx';
import Starships from './assets/Components/Starships/Starships.jsx';

const BASE_URL = "https://swapi.dev/api/starships/"

function App() {

  const [starships, setstarships] = useState([]);

  const fetchData = async (query) => {
    
    const data = await SpaceshipFetch.get(query);
    
    const newStarships = [{}];

    data.results.forEach((object, index) => {
      newStarships[index] = object;
    });

    console.log(newStarships);
    setstarships(newStarships);

    
  };

  useEffect(() => {

    const fetchDefaultData = async () => {

      const data = await SpaceshipFetch.get(BASE_URL);

      const newStarships = [{}];

      data.results.forEach((object, index) => {
        newStarships[index] = object;
      });

      console.log(newStarships);

      setstarships(newStarships);
    };

    fetchDefaultData();
  }, 

  []);

  return (
    <>
      <SpaceshipSearch results={starships.length} fetchData={fetchData}/>
      <br></br>
      <Starships starships={starships}/>
    </>
  )
}

export default App

