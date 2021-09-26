import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faHandHoldingHeart } from '@fortawesome/free-solid-svg-icons';
import './Movie.css';

const Movie = (props) => {
    console.log(props.movie);
    const { name, img, id, price, Director, language } = props.movie;
    const element = <FontAwesomeIcon icon={faList} />
    const elementDonate = <FontAwesomeIcon icon={faHandHoldingHeart} />
    return (
        <div className="movies-container">
            <div className="single-movie">
                <div > <img className="movie-image" src={img} alt="" /></div>

                <div className="movie-detail"><h4 className="product-name">Movie: {name}</h4>
                    <p>movies id : {id}</p>
                    <p>Director: {Director}</p>
                    <p>Price: {price}</p>
                    <p>languages dubbed in movies:{language}</p>

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