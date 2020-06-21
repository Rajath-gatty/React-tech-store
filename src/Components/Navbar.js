import React from 'react'
import { FaBars, FaCartPlus } from 'react-icons/fa';
import { ProductConsumer } from '../Context/Context';
import Logo from '../Images/logo.svg'
import styled from 'styled-components';

function Navbar() {
    return (
        <ProductConsumer>
            {value => {
                const { handleCart, handleSideBar, cartItems } = value;
                return <NavWrapper>
                    <div className="nav-main">
                        <FaBars className="icon" onClick={handleSideBar} />
                        <img src={Logo} alt="Tech store logo" />
                        <div className="cart-wrapper" onClick={handleCart}>
                            <FaCartPlus className="icon" />
                            <p className="cart-item">{cartItems}</p>
                        </div>

                    </div>
                </NavWrapper>
            }}
        </ProductConsumer>
    )
}

const NavWrapper = styled.nav`
 padding: 0.85rem 1.5rem;
    /* border-bottom: 3px solid var(--primaryColor); */
    box-shadow: 3px 0px 6px 1px rgba(0, 0, 0, 0.2);
    background: var(--mainGrey);
    z-index: 10;
    position: sticky;
    top: 0;
    
.icon {
    font-size:1.75rem;
    cursor: pointer;
}

.nav-main {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;
}

.cart-wrapper {
    position: relative;
    cursor: pointer;
}

.cart-item {
    position: absolute;
    top: -10px;
    right: -10px;
    padding: 0 5px;
    border-radius: 50%;
    background: var(--primaryColor);
    color: var(--mainWhite);
    font-size: 0.8rem;
}
`

export default Navbar;
