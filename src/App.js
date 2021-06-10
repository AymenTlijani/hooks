import React from 'react';
import './App.css';
import MovieList from './Components/MovieList';
const App = () => {
     const movieList= [
      {
        Title: 'Star Wars: Episode VI - Return of the Jedi',
        Year: '1983',
        Rate: '3',
        Type: 'movie',
        Poster:
            'https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
    },
    {
      Title: 'Star Wars: Episode VI - Return of the Jedi',
      Year: '1983',
      Rate: '4',
      Type: 'herror',
      Poster:
          'https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Star ',
    Year: '1945',
    Rate: '5',
    Type: 'action',
    Poster:
        'https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
},
        {
            Title: 'Star Wars: Episode IV - A New Hope',
            Year: '1977',
            Rate: '1',
            Type: 'movie',
            Poster:
                'https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
        },
        {
            Title: 'Star Wars: Episode V - The Empire Strikes Back',
            Year: '1980',
            Rate: '2',
            Type: 'movie',
            Poster:
                'https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
        },
        {
            Title: 'Star Wars: Episode VI - Return of the Jedi',
            Year: '1983',
            Rate: '2',
            Type: 'movie',
            Poster:
                'https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
        },
    ];


    return (

        <div className='container-fluid movie-app'>
            <div className='row'>
                <MovieList movieList={movieList} />

            </div>
        </div>

    );
};

export default App;