import React from 'react'
import { ProductConsumer } from '../../Context/Context';
import { Link } from 'react-router-dom';
import Title from '../Title';
import Product from '../Product';
import styled from 'styled-components';

const Featured = () => {
    return (
        <div className="p-3 mt-4 container">
            {/* Title */}
            <Title title="featured products" center="true" />
            <FeaturedWrapper className="product-container">
                <ProductConsumer>
                    {value => {
                        const { featuredProducts } = value;
                        return featuredProducts.map(product => (
                            <Product key={product.id} product={product}></Product>
                        ))
                    }}
                </ProductConsumer>
            </FeaturedWrapper>
            <div className="row mt-5">
                <div className="col text-center">
                    <Link to="/products" className="main-link mb-5">Our Products</Link>
                </div>
            </div>
        </div>
    );
}

const FeaturedWrapper = styled.div`
display: flex;
justify-Content: center;
align-items: center;

@media (max-width: 576px) {
    flex-direction: column;
}
`;

export default Featured;