import React from 'react';
import { ProductConsumer } from '../../Context/Context';
import productsBcg from '../../Images/productsBcg.jpeg';
import Hero from '../Hero';
import Title from '../Title';
import Product from '../Product';
import FilterProducts from './FilterProducts';

const Products = () => {
    return (
        <div className="products-wrapper">
            <Hero img={productsBcg} />
            <Title title="Our Products" center />
            <FilterProducts />
            <div className="container mt-5">
                <ProductConsumer>
                    {value => {
                        const { filteredProducts } = value;
                        return <section style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 2fr))",
                            gridGap: "0.75rem"
                        }}>
                            {filteredProducts.map(product => {
                                return <Product key={product.id} product={product} />
                            })}
                        </section>
                    }}
                </ProductConsumer>
            </div>
        </div>
    );
}
export default Products;