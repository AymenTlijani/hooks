import React from 'react';
import MovieCard from './MovieCard.js';

const MovieList = ({movieList}) => {
    return (
        <>
            {movieList.map((movie) => (
            <MovieCard movie={movie}/>

            ))}
        </>
    );
};

export default MovieList;