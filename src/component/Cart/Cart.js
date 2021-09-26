import React from 'react';
import './Cart.css'
const Cart = (props) => {
    console.log(props.price);
    const names = props.cart;
    const prices = props.price;
    let totalPrice = 0;
    for (const price of prices) {
        totalPrice = totalPrice + price;
    }


    return (
        <div className="Donate-cart">
            <h3>Movie and Donate summary</h3>
            <h5>Movies wishlist: {names.length}</h5>
            <br />
            {
                names.map((name, i) => <h4 key={i}>Movies name:{name}</h4>)
            }
            <h4>total Donate:{totalPrice} tk (without wacthing movie you can donate too...)</h4>
            <button className="Donate-btn">Donate now</button>


        </div>
    );
};

export default Cart;