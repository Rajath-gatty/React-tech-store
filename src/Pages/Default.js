import React from 'react';
import Hero from '../Components/Hero';
import defaultBcg from '../Images/defaultBcg.jpeg';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Default() {
    return (
        <>
            <Hero img={defaultBcg} title="404" max="true">
                <h2 className="text-uppercase ">Page not found</h2>
                <Link to="/" className="main-link mt-3" >return home</Link>
            </Hero>
        </>
    )
}

export default Default
