import React from 'react';
import styled from 'styled-components';
import mainBcg from '../Images/mainBcg.jpeg'

const Hero = (props) => {
    return <Herowrapper max={props.max} img={props.img}>
        <div className="banner">
            <h1 className="title">{props.title}</h1>
        </div>
        {props.children}
    </Herowrapper>
}


const Herowrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
min-height: ${props => props.max ? '95vh' : '60vh'};
color: var(--mainWhite);
text-transform: uppercase;
text-align: center;
background: linear-gradient(var(--primaryRGBA), var(--primaryRGBA)), url(${props => props.img}) center/cover no-repeat;

.title {
font-size: 3.5rem;
text-shadow: 4px 4px 2px rgba(0, 0, 0, 0.5);
margin-bottom: 3rem;
}
`;
Hero.defaultProps = {
    img: mainBcg
}

export default Hero;