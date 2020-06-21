import React from 'react'
import Info from '../Components/AboutPage/Info';
import Hero from '../Components/Hero';
import aboutBcg from '../Images/aboutBcg.jpeg';

function AboutPage() {
    return (
        <>
            <Hero img={aboutBcg} />
            <Info />
        </>
    )
}

export default AboutPage;
