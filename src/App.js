import React, { useState } from 'react';      //add useState here
import './App.css';

function App() {
  const [movies, setMovies] = useState(
    [
      {
        name: "The Matrix",
        year: 1999,
      },
      {
        name: "Harry Potter",
        year: 2001,
      },
      {
        name: "Toy Story 1",
        year: 1995,
      }
    ]
  );

  const [filteredMovies, setFiltered] = useState([])

  const changeMovie = () => {            //const needed for hooks
    const newState = [...movies];

    newState[1].name = "Gladiator";
    newState[1].year = 1999;

    console.log("Change movie clicked");
    setMovies(newState)
  }

  const resetMovie = () => {
    const userState = [...movies];
    userState[1].name = "Harry Potter"
    userState[1].year = "2001"
    console.log("Reset Button clicked");

    setMovies(userState)
  }

  const searchMovies = (event) => {
    //console.log(event.target.value);
    const getState = [...movies];

    const myFilter = getState.filter((movie) => {
      let film = movie.name.toLowerCase()
      let result = event.target.value.toLowerCase()

      return film.indexOf(result) >= 0
    });

    console.log(myFilter);
    setFiltered(myFilter)
    
    

  }

  return (
    <div className="container">
      <h1>React Hooks</h1>
      <h1>Search for Movies:</h1>
      <input type="text" onChange={searchMovies} />

      <h2>Movies:</h2>
      <h3>The search result is:</h3>
      
      {filteredMovies.map((event) => {
        return <h1>{event.name} was released on {event.year}</h1>
      })}



      <hr></hr>
      {movies.map((movie) => {
        return <h1>{movie.name} was released on {movie.year}</h1>
      })}
      <button onClick={changeMovie}>Change Movie</button>

      <button onClick={resetMovie}>Reset Movie</button>

    </div>

  );
}

export default App;
