import React, { useEffect, useState } from 'react';
import Movie from '../Movie/Movie';
import './Movies.css'
const Movies = () => {
    const [movies, setMovies] = useState([]);
    // const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('./movies.JSON')
            .then(res => res.json())
            .then(data => setMovies(data));
    }, []);
    return (
        <div>
            <div className="flim-container">
                <div className="movies-container"
                >
                    {movies.map(movie => <Movie
                        key={movie.key}
                        movie={movie}

                    >
                    </Movie>)
                    }
                </div>
                <div className="cart-container">
                    <h2>total donation:</h2>
                </div>
            </div>
        </div>
    );
};

export default Movies;