import React from 'react';
import { use } from 'react';
import Bottle from '../Bottle/Bottle'
import './Bottles.css'
import { useState } from 'react';
import { addToStoredCart, getStoredCart, removeFromCart } from '../../utilities/LocalStorage';
import { useEffect } from 'react';
import Cart from '../Cart/Cart';

const Bottles = ({ BottlesPromise }) => {
    const [cart, setCart] = useState([])

    const handleAddToCart = (bottle) => {
        const alreadyAdded = cart.some(item => item.id === bottle.id);
        if (alreadyAdded) return;

        const newCart = [...cart, bottle];
        setCart(newCart);

        addToStoredCart(bottle.id);
    };
      

    const bottles = use(BottlesPromise);
    // console.log(bottles);

    useEffect(() => {
        const storedCartIds = getStoredCart();

        // console.log(storedCartIds, bottles);

        const storedCart = [];

        for(const id of storedCartIds) {
            // console.log(id);
            const cartBottle = bottles.find(bottle => bottle.id === id);

            if(cartBottle) {
                storedCart.push(cartBottle);
            }
        }

        console.log(storedCart);
        setCart(storedCart);
    }, [bottles]);

    const handleRemoveFromCart = id => {
        // console.log("Removed!", id);

        const remainingCart = cart.filter(bottle => bottle.id !== id);

        setCart(remainingCart);
        removeFromCart(id);
    }

    return (
        <div>
            <h3>Bottles: {bottles.length}</h3>
            <p>Added to cart: {cart.length}</p>
            <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>

            <div className='bottles-container'>
                {
                    bottles.map(bottle => <Bottle key={bottle.id} bottle={bottle} handleAddToCart={handleAddToCart}></Bottle>)
                }
            </div>

        </div>
    );
};

export default Bottles;