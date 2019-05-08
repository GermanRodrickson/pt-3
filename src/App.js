import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        'https://raw.githubusercontent.com/Influencity/job-offers/master/coding-test/weather-api-2019-04/almeria.json'
      );
      const data = await response.json();
      setData(data.list);
    }

    fetchData();
  }, []);

  return (
    <section>
      <h1>hi</h1>
    </section>
  );
}

export default App;
