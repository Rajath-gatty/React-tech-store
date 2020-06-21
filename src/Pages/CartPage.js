import React from 'react';
import Hero from '../Components/Hero';
import cartBcg from '../Images/storeBcg.jpeg';
import CartSection from '../Components/CartPage/Cart';

function CartPage() {
    return (
        <div>
            <Hero img={cartBcg} />
            <CartSection />
        </div>
    )
}

export default CartPage
