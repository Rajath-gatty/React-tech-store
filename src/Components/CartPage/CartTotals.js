import React from 'react';
import { ProductConsumer } from '../../Context/Context';

const cartTotals = () => {
    return (
        <div className="container">
            <div className="row">
                <ProductConsumer>
                    {value => {
                        const { clearCart, cartSubTotal, cartTax, cartTotal, cart } = value;

                        return <> {cart.length !== 0 ? <div className="col text-title text-center my-4">
                            <button className="btn btn-outline-danger text-capitalize mb-4" onClick={clearCart}>
                                Clear cart
                            </button>
                            <h3 className="text-uppercase" style={{ fontWeight: "bold", fontSize: "1.2rem" }}>subtotal : ${cartSubTotal}</h3>
                            <h3 className="text-uppercase" style={{ fontWeight: "bold", fontSize: "1.2rem" }}>Tax : ${cartTax}</h3>
                            <h3 className="text-uppercase" style={{ fontWeight: "bold", fontSize: "1.2rem" }} >total : ${cartTotal}</h3>
                        </div> : null} </>
                    }}
                </ProductConsumer>
            </div>
        </div>
    );
}

export default cartTotals;