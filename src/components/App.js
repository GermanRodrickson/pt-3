import React, { useState, useEffect } from 'react';

import Card from './Card';
import { kelvinToCelsius } from '../helpers/';

const App = () => {
  const [data, setData] = useState([]);

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

  return (
    <section>
      <Card name={data.name} temp={kelvinToCelsius()} />
    </section>
  );
};

export default App;
