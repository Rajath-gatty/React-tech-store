import React from 'react';
import styled from 'styled-components';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa'

function Footer() {
    return (
        <FooterWrapper>
            <p style={{ marginTop: "0.75rem" }}>copyright &copy; Tech store 2020 | All rights reserved</p>
            <FaFacebook className="icon" />
            <FaTwitter className="icon" />
            <FaLinkedin className="icon" />
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

    .icon {
        font-size: 1.75rem;
    }

    .icon:hover {
        color: var(--primaryColor);
    }
`;

export default Footer;
