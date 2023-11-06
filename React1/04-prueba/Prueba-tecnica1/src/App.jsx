import { useState } from 'react'
import responseMovies from "./mocks/with-results.json"
import noResults from './mocks/no-results.json'
import './App.css'
import {Movies} from './Movies/movies.jsx'

const API_KEY=  "a4de3c98";
  // con typescript
 // hacer una api request
  // copia el objeto json para sacar los tipos
// hacer un file con el json 
// uno para el resultado
// uno cuando no hay resultado
//archiva los tipos

export function useMovies(){
  const movies= responseMovies.Search
  

  const mappedMovies = movies?.map(movie=>({
     id: movie.imdbID,
     title: movie.Title,
     year: movie.Year,
     poster: movie.Poster
  }))
  return {movies:mappedMovies}
}



function App() {
  const {movies:mappedMovies}=useMovies()



  return (
    <div className="page">
    <header>
      <h1>Buscador de peliculas </h1>
    <form className="form">
     <input type="text" placeholder="DC comics" />
      <button type="submit"> Buscar  </button >
     </form>
    </header>
  { /*The code block inside the `<main>` element is rendering a list of movies if `hasMovies` is true.
   It uses the `movies` array to map through each movie and display its title, year, and poster
   image. Each movie is rendered as an `<li>` element with the movie details. If `hasMovies` is
   false, it displays a message saying "No se encontraron Resultados" (No results found). */}
    <main>
     <Movies movies={movies}/>

    </main>
    
    
    </div>
  )
}

export default App
