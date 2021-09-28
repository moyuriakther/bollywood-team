import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    let totalCost = 0;
    for (let i = 0; i < cart.length; i++) {
        const actor = cart[i];
        let actorBalance = actor.salary;
        let actorBalanceNumber = parseFloat(actorBalance);
        totalCost = totalCost + actorBalanceNumber;
        
    }
    return (
        <div className="cart">
            <h4>Total Actors Added: {cart.length}</h4>
            <p>{cart.name}</p>
            <h4>Total Cost: $ {totalCost}</h4>
        </div>
    );
};

export default Cart;