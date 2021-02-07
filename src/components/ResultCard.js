import React,{useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'

export const ResultCard = ({movie}) => {
    const {addMovieToWatchList, addMovieToWatched, watchlist, watched} = useContext(GlobalContext)

    let storedMovie = watchlist.find(object=>object.id === movie.id)
    let storedMovieWatched = watched.find(object=>object.id === movie.id)

    const watchListDisabled = storedMovie ? true : storedMovieWatched ? true : false;

    const watchedListDisabled = storedMovieWatched ? true : false;
    
    return (
        <div className="result-card">
            <div className="poster-wrapper">
                {movie.poster_path ? <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title}/> : <div className="filler-poster"></div>}
            </div>
            <div className="info">
                <div className="header">
                    <h3 className="movie-title">{movie.title}</h3>
                    <h4 className="release-date">{movie.release_date ? movie.release_date.substring(0,4) : 'N/A'}</h4>
                </div>
                <div className="controls">
                    <button className="btn" disabled={watchListDisabled} onClick={()=>{addMovieToWatchList(movie)}}>Add to watchlist</button>
                    <button className="btn" disabled={watchedListDisabled} onClick={()=>{addMovieToWatched(movie)}}>Add to watched list</button>
                </div>
            </div>           
        </div>
    )
}
