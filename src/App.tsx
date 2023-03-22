import React from 'react';
import logo from './logo.svg';
import PlexService from './services/PlexService'
import IMovieData from './types/MovieData';
import './App.css';

function App() {

  const getMovies = PlexService.getAllMovies().then((response) => {
    console.log(response)

  })
  .catch((error) => {

  }) 

  // const {data: movies} = PlexService.getAllMovies() 
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
