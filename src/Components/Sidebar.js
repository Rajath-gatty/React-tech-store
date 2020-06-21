import React from 'react';
import styled from 'styled-components';
import { ProductConsumer } from '../Context/Context';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

function Sidebar() {
    return (
        <ProductConsumer>
            {value => {
                const { links, handleSideBar, sidebarOpen } = value
                return <SideWrapper show={sidebarOpen}>
                    <ul className="list-holder">
                        {links.map(link => (
                            <li key={link.id}>
                                <Link className="link" to={link.path}
                                    onClick={handleSideBar}>{link.text}</Link>
                            </li>
                        ))}
                    </ul>
                </SideWrapper>
            }}
        </ProductConsumer>
    );

}

const SideWrapper = styled.nav`
    position: fixed;
    top: 54px;
    left: 0px;
    width: 20;
    height: 100%;
    background: var(--mainGrey);
    transition: var(--mainTransition);
    z-index: 1;
    padding: 0;
    text-transform: capitalize;
    border-right: 2px solid var(--primaryColor);
    box-shadow: 3px 0px 6px 1px rgba(0, 0, 0, 0.2);
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(-120%)'};

.list-holder {
    list-style: none;
    margin-top: 1.75rem;
    padding: 1rem;
}

.list-holder {
    border: none;
}

.link {
    display: block;
    padding: 0.75rem;
    padding-left: 4.5rem;
    text-decoration: none;
    color: var(--darkColor);
}

.link:hover {
    color: var(--mainWhite);
    background: var(--primaryColor);
    padding-left: 5.2rem;
    transition: var(--mainTransition);
}

@media (max-width: 576px) {
    width: 20rem;
}
`

export default Sidebar;
