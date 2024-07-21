import React from "react";

const MovieCard = ({movie}) => {
    return (
        <div className="movie-card" key={movie.imdbID}>
            <img className="movie-poster" src={movie.Poster} alt={movie.Title} />
            <div className="movie-year">{movie.Year}</div>
            <div className="movie-title">{movie.Title}</div>
        </div>

    )
}

export default MovieCard