import React from 'react'
import Title from '../Title';
import CartColumns from './CartColumns';
import CartList from './CartList';
import CartTotals from './CartTotals';

const Cart = () => {
    return (
        <section className="py-5">
            {/* Title */}
            <div className="container">
                <Title title="your cart items" center />
            </div>
            {/* Cart columns */}
            <CartColumns />
            {/* Cart List */}
            <CartList />
            {/* Cart Totals */}
            <CartTotals />
        </section>
    );
}

export default Cart;