import React, { useState, useEffect } from 'react';

import Card from './Card';
import Loading from './Loading';
import { kelvinToCelsius } from '../helpers/';

const App = () => {
  const [data, setData] = useState({});

  let isLoaded = false;

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        'https://raw.githubusercontent.com/Influencity/job-offers/master/coding-test/weather-api-2019-04/almeria.json'
      );
      const data = await response.json();
      const [item] = data.list;
      setData(item);
    };

    fetchData();
  }, []);

  data.main
    ? (isLoaded = <Card name={data.name} temp={kelvinToCelsius(data.main.temp)} />)
    : (isLoaded = <Loading />);

  return <section>{isLoaded}</section>;
};

export default App;
