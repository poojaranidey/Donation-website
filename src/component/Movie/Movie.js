import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faHandHoldingHeart } from '@fortawesome/free-solid-svg-icons';
import './Movie.css';

const Movie = (props) => {
    console.log(props.movie);
    // destruchering the movies detail 
    const { name, img, id, price, Director, language } = props.movie;
    const element = <FontAwesomeIcon icon={faList} />
    const elementDonate = <FontAwesomeIcon icon={faHandHoldingHeart} />
    return (
        // all movies area 
        <div className="movies-container">
            <div className="single-movie">
                <div > <img className="movie-image" src={img} alt="" /></div>

                <div className="movie-detail"><h4 className="product-name">Movie: {name}</h4>
                    <h5>movies id : {id}</h5>
                    <h5>Director: {Director}</h5>
                    <h5>Price: {price}</h5>
                    <h5>languages dubbed in movies:{language}</h5>

                    <button className="add-list-btn"
                        onClick={() => props.handleAddToCart(name)}

                    >{element} add to list</button>
                    <button onClick={() => props.handleTotal(price)} className="donate-btn">{elementDonate} Total donation:</button>
                </div>
            </div>
        </div>
    );
};

export default Movie;