import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../Context/Context';
import { FaSearch, FaCartPlus } from 'react-icons/fa'

const Product = ({ product }) => {
    return (
        <ProductConsumer>
            {value => {
                const { addToCart, setSingleProduct } = value;
                return (
                    <ProductWrapper>
                        <div className="card">
                            <div className="img-container">
                                <img src={product.image} className="card-img-top card-image p-5" alt="Product" style={{ height: "320px" }} />
                                <div className="product-icons">
                                    <Link to={`/products/${product.id}`}>
                                        <FaSearch className="icon" onClick={() => { setSingleProduct(product.id) }} />
                                    </Link>
                                    <FaCartPlus className="icon" onClick={() => { addToCart(product.id) }} />
                                </div>
                            </div>
                            <div className="card-body d-flex justify-content-between">
                                <p className="mb-0">{product.title}</p>
                                <p className="mb-0 text-main">{product.price}</p>
                            </div>
                        </div>

                    </ProductWrapper>
                )
            }}
        </ProductConsumer>
    );
}

const ProductWrapper = styled.div`
.card {
    box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.1);
    transition: var(--mainTransition);
    height: 100%;
    overflow: hidden;
}

.card:hover {
    box-shadow:  2px 0px 8px 2px rgba(0, 0, 0, 0.4);
    cursor: pointer;
}

.card-img-top {
    transition: var(--mainTransition);
}

.card:hover .card-img-top {
    transform: scale(1.2);
    opacity: 0.2;
}

.img-container {
    position: relative;
    height: 100%;
}

.card-image {
    height: 300px;
    object-fit: contain;
}

.product-icons {
    transition: var(--mainTransition);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 50%);
    opacity: 0;
}

.icon {
    font-size: 2.5rem;
    margin: 1rem;
    padding: 0.5rem;
    color: var(--primaryColor);
    background: var(--mainBlack);
    border-radius: 0.5rem;
}

.card:hover .product-icons {
    opacity: 1;
}

.card-body {
    font-weight: bold;
    letter-spacing: 2px;
    text-transform: capitalize;
}
`;

export default Product;