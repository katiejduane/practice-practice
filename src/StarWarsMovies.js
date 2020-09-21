import React, { useState, useEffect } from 'react';
import axios from 'axios';

function SWMovies() {
  // i think this tutorial is a bit outdated as i am getting this warning using async in useEffect the way i am:
  // Line 6:13:  Effect callbacks are synchronous to prevent race conditions. Put the async function inside:
  const [number, setNumber] = useState(1);
  const [movie, setMovie] = useState('');
  useEffect(() => {
    async function getData() {
      const response = await axios.get(`https://swapi.dev/api/films/${number}/`);
      setMovie(response.data);
    }
    getData();
  }, [number]);
  // ^ now useEffect will only run if number is changed! rather than after every single render
  return (
    <div>
      <h1>Pick a Movie</h1>
      <h4>You chose... {movie.title}</h4>
      <p>{movie.opening_crawl}</p>
      <select value={number} onChange={(e) => setNumber(e.target.value)}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
      </select>
    </div>
  );
}

export default SWMovies;
