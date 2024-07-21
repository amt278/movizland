import { useEffect, useState } from "react"

import './App.css'
import MovieCard from './MovieCard'
import SearchIcon from './SearchIcon.svg'

const API_URL = 'http://www.omdbapi.com/?apikey=25ccc676'

const App = () => {
    const [search, setSearch] = useState("")
    const [movies, setMovies] = useState([])
    
    useEffect(() => {
        searchMovie('batman')
    }, [])
    
    const searchMovie = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json()
        setMovies(data.Search)
        console.log(data.Search)
    }

    return (
        <div className="app">
            <h1 className="app-header">MovizLand</h1>
            <div className="search-bar">
                <input
                    className="search-input"
                    placeholder="Search for movies"
                    value={search}
                    onChange={(e) => {setSearch(e.target.value)}}
                />
                <img 
                    className="search-icon"
                    src={SearchIcon}
                    alt="Search"
                    onClick={() => {
                        searchMovie(search)
                    }}
                />
            </div>
            { movies.length > 0 ? 
                (<div className="movie-list">
                    {movies.map((movie) => (
                        <MovieCard movie={movie} />
                        // <div className="movie-card" key={movie.imdbID}>
                        //     <div className="movie-card">
                        //     <img src={movie.Poster} alt={movie.Title} className="movie-poster" />
                        //     <div className="movie-year">{movie.Year}</div>
                        //     <div className="movie-title">{movie.Title}</div>
                        //     </div>
                        // </div>
                    ))}
                </div>) : 
                (<div className="empty">
                    <h2>No movies found</h2>
                </div>)
            }
            <div className="app-footer">
                made by me
            </div>
        </div>
    )
}

export default App
