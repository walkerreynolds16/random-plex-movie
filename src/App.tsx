import React from 'react';
import logo from './logo.svg';
import PlexService from './services/PlexService'
import {IMovieData} from './types/MovieData';
import './App.css';

function App() {

  async function getAllMovies() {
    const response = await PlexService.getAllMovies();
    let movieData: IMovieData[] = [];
    if(response.data) {
      movieData = response.data.MediaContainer.Metadata
    }
  
    console.log(movieData)
  
  }
  getAllMovies()
  
  // const {data: movies} = PlexService.getAllMovies() 
  return (
    <div className="App">
      
    </div>
  );
}



export default App;
