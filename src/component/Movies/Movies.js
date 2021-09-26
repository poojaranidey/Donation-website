import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Movie from '../Movie/Movie';
import './Movies.css'
const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [cart, setCart] = useState([]);
    const [prices, setPrices] = useState([]);

    useEffect(() => {
        fetch('./movies.JSON')
            .then(res => res.json())
            .then(data => setMovies(data));
    }, []);
    const handleAddToCart = (movie) => {

        const newCart = [...cart, movie];


        setCart(newCart);
    }
    const handleTotal = (price) => {
        const newPrices = [...prices, price];
        setPrices(newPrices);
    }
    return (
        <div>
            <div className="flim-container">
                <div className="movies-container"
                >
                    {movies.map((movie, i) => <Movie
                        key={i}
                        movie={movie}
                        handleAddToCart={handleAddToCart}
                        handleTotal={handleTotal}
                    >
                    </Movie>)
                    }
                </div>
                <div className="cart-container">
                    <Cart cart={cart} price={prices}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Movies;