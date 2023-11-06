/* eslint-disable react/prop-types */

import responseMovies from "../mocks/with-results.json"

import noResults from '../mocks/no-results.json'


        function ListOfMovies ({movies}){
    return(
      <ul>
      {
        movies.map(movie=>(
          <li key={movie.id}>
            <h3>{movie.title} </h3>
            <p>{movie.year} </p>
            <img src={movie.Poster } alt={movie.Title}></img>
          </li>
        ))
      }
    </ul>
   
    )
  }
  
  function NoMoviesResults () {
    return (
      <p>No se encontraron películas para esta búsqueda</p>
    )
  }
  
  export function Movies ({ movies }) {
    const hasMovies = movies?.length > 0
  
    return (
      hasMovies
        ? <ListOfMovies movies={movies} />
        : <NoMoviesResults />
    )
  }