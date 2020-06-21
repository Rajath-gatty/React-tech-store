import React from 'react';
import styled from 'styled-components';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa'

function Footer() {
    return (
        <FooterWrapper>
            <p style={{ marginTop: "0.75rem" }}>copyright &copy; Tech store 2020 | All rights reserved</p>
            <div className="social-icon">
                <FaFacebook className="icon" />
                <FaTwitter className="icon" />
                <FaLinkedin className="icon" />
            </div>
        </FooterWrapper>
    )
}

const FooterWrapper = styled.footer`
    background: var(--darkGrey);
    padding: 0.25rem;
    color: var(--mainWhite);
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 2rem;

    .icon {
        font-size: 1.75rem;
        margin: 0.75rem;
    }

    .icon:hover {
        color: var(--primaryColor);
    }

    @media(max-width: 576px) {
flex-direction: column;

.social-icon {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}
    }
`;

export default Footer;
