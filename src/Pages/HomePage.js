import React from 'react';
import { ProductConsumer } from '../Context/Context';
import Hero from '../Components/Hero';
import { Link } from 'react-router-dom';
import Services from '../Components/HomePage/Services';
import Featured from '../Components/HomePage/Featured';

function HomePage() {
    return (
        <div>
            <ProductConsumer>
                {value => {
                    return <Hero max="true" title="Awesome gadgets">
                        <Link to="/products" className="main-link">Our Products</Link>
                    </Hero>
                }}
            </ProductConsumer>
            <Services />
            <Featured />
        </div>
    )
}

export default HomePage;
