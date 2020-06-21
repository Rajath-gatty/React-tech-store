import React from 'react';
import { ProductConsumer } from '../Context/Context';
import { Link } from 'react-router-dom';
import Hero from '../Components/Hero';

function SingleProductPage() {
    return (
        <div>
            <ProductConsumer>
                {value => {
                    const { singleProduct, addToCart, loading } = value;
                    if (loading) {
                        return <h1>Loading...</h1>
                    }
                    const { company, description, id, price, title, image } = singleProduct;
                    return (
                        <section className="py-5">
                            <Hero title={title} img={image} />
                            <div className="container mt-4">
                                <div className="row">
                                    <div className="col-10 mx-auto col-sm-8 col-md-6 my-3">
                                        <img src={image} alt="single Product" className="img-fluid" />
                                    </div>
                                    <div className="col-10 mx-auto col-sm-8 col-md-6 my-3">
                                        <h5 className="text-title">model: {title}</h5>
                                        <h5 className="text-capitalize text-muted mb-4">company: {company}</h5>
                                        <h5 className="text-main text-capitalize mb-4">
                                            price: ${price} </h5>
                                        <p className="text-capitalize text-title mb-3">Some Info about product</p>
                                        <p style={{ color: "black", fontSize: "1rem", lineHeight: "1.8" }}>{description}</p>
                                        <button className="main-link" type="button" style={{ margin: "0.75rem" }} onClick={() => addToCart(id)}>
                                            add to cart
                </button>
                                        <Link to="/products" className="main-link" style={{ margin: "0.75rem" }}>back to products</Link>
                                    </div>
                                </div>
                            </div>
                        </section>);

                }}
            </ProductConsumer>
        </div >
    )
}

export default SingleProductPage;
