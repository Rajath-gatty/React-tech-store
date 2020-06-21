import React from 'react';
import { ProductConsumer } from '../../Context/Context';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';
const CartList = () => {
    return (
        <div className="container-fluid" style={{ marginTop: "-2rem", border: " 1px solid rgba(50, 50, 50, 0.2)", borderBottom: "none" }}>
            {/* row */}
            <div className="row">
                <div className="col">
                    <ProductConsumer>
                        {value => {
                            const { cart, increment, decrement, removeItem } = value;
                            if (cart.length === 0) {
                                return <div><h3 className="text-title text-center my-4" style={{ color: "rgba(50, 50, 50, 0.4)" }}>
                                    your cart is empty
                                </h3>
                                    <div className="row mt-4">
                                        <div className="col text-center">
                                            <Link to="/products" className="main-link mb-5">shop now</Link>
                                        </div>
                                    </div>
                                </div>
                            }
                            return (
                                <>
                                    {cart.map(item => (<CartItem key={item.id} cartItem={item}
                                        increment={increment}
                                        decrement={decrement}
                                        removeItem={removeItem} />))}
                                </>
                            )
                        }}
                    </ProductConsumer>
                </div>
            </div>
        </div>
    );
}

export default CartList;