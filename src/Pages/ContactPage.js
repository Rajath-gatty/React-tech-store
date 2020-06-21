import React from 'react'
import Hero from '../Components/Hero';
import contactBcg from '../Images/contactBcg.jpeg';
import Contact from '../Components/ContactPage/Contact';

function ContactPage() {
    return (
        <>
            <Hero img={contactBcg} />
            <Contact />
        </>
    )
}

export default ContactPage
