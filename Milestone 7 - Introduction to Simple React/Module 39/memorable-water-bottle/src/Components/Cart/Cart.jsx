import React from 'react';
import './Cart.Css'

const Cart = ({ cart, handleRemoveFromCart }) => {
    console.log('Cart: ', cart);
    return (
        <div className='cart-container'>
            {
                cart.map(bottle =>
                    // console.log('B:', bottle.img);
                    <div key={bottle.id}>
                        <img src={bottle.img} alt="" />
                        <button onClick={() => {
                            handleRemoveFromCart(bottle.id)
                        }}>X</button>
                    </div>
                )
            }
        </div>
    );
};

export default Cart;