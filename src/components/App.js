import React, { useState, useEffect } from 'react';

import Card from './Card';
import Loading from './Loading';
import { kelvinToCelsius } from '../helpers/';

const App = () => {
  const [data, setData] = useState([]);
  const cityList = [
    'almeria',
    'granada',
    'malaga',
    'jaen',
    'cordoba',
    'sevilla',
    'huelva',
    'cadiz'
  ];
  let isLoaded = false;

  useEffect(() => {
    for (let i = 0; i < cityList.length; i++) {
      const city = cityList[i];

      const fetchData = async () => {
        const response = await fetch(
          `https://raw.githubusercontent.com/Influencity/job-offers/master/coding-test/weather-api-2019-04/${city}.json`
        );

        const res = await response.json();
        const [item] = res.list;

        setData(data.push(item));
        console.log(data);
      };

      fetchData();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (data) {
    isLoaded = data.map(item => {
      <Card
        name={item.name}
        temp={kelvinToCelsius(item.main.temp)}
        pressure={item.main.pressure}
        windSpeed={item.wind.speed}
      />;
    });
  } else {
    isLoaded = <Loading />;
  }

  return <section>{isLoaded}</section>;
};

export default App;
