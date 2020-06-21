import React from 'react'
import { ProductConsumer } from '../Context/Context';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function SideCart() {
    return (
        <ProductConsumer>
            {value => {
                const { cartOpen, cart, cartTotal, closeCart } = value;
                return <CartWrapper show={cartOpen}>
                    < ul className="list-groups">
                        {cart.map(item => {
                            return <li key={item.id} className="cart-item">
                                <img width="35" src={item.image} alt="cart-item" />
                                <div className="mt-3 cart-desc">
                                    <h6 className="text-uppercase font">{item.title}</h6>
                                    <h6 className="text-title font text-capitalize">amount: {item.count}</h6>
                                </div>
                            </li>
                        })}
                    </ul>
                    {cart.length !== 0 ? (<div> <h4 className="text-capitalize text-main text-center">cart total: ${cartTotal}</h4>
                        <div className="text-center my-4">
                            <Link to="/cart" className="main-link link" onClick={closeCart}>cart page</Link>
                        </div></div>) : <div>
                            <p className="text-center" style={{ height: "100%", marginTop: "50%" }}>Your cart is empty</p>
                            <div className="row mt-4">
                                <div className="col text-center">
                                    <Link to="/products" className="main-link mb-5" onClick={closeCart}>shop now</Link>
                                </div>
                            </div>
                        </div>}
                </CartWrapper>
            }}
        </ProductConsumer>
    )
}

const CartWrapper = styled.div`
position: fixed;
top: 54px;
right: 0px;
width: 21rem;
height: 100%;
background: var(--mainGrey);
z-index: 1;
transition: var(--mainTransition);
border-left: 2px solid rgba(50, 50, 50, 0.2);
box-shadow: -5px 0px 10px 1px rgba(0, 0, 0, 0.1);
transform: ${props => props.show ? 'translateX(0)' : 'translateX(120%)'};
overflow: scroll;
::-webkit-scrollbar{
display: none;
}

.list-groups {
    list-style-type: none;
}

.font {
    font-size: 0.7rem;
}

.cart-desc {
    margin-left: 1.5rem;
}

.link {
    margin-bottom: 3rem;
}

.cart-item {
    display: flex;
    align-items: center;
    background: var(--mainWhite);
    padding: 1.5rem;
    /* box-shadow: 0px 0px 8px 1px rgba(15, 15, 15, 0.1); */
    border : 1px solid rgba(50, 50, 50, 0.2);
    border-bottom: none;
}

.cart-item:last-child {
    border-bottom: 1px solid rgba(50, 50, 50, 0.2);
}

@media (max-width: 576px) {
    width: 20rem;
}
`;

export default SideCart;
