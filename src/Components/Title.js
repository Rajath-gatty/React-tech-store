import React from 'react'
import styled from 'styled-components';


const Title = ({ center, title }) => {
    return (
        <TitleWrapper classname="row" center={center}>
            <div className="col">
                <h2 className="text-title title">{title}</h2>
                <div className="title-underline"></div>
            </div>
        </TitleWrapper>
    );
}

const TitleWrapper = styled.div`
text-align: ${props => props.center ? "center" : "left"};
margin: 2rem;

.title-underline {
    height: 0.25rem;
    width: 7rem;
    background: var(--primaryColor);
    margin: ${props => props.center ? '0 auto' : '0'};
}

@media(max-width: 576px) {
.title {
    font-size: 1.5rem;
}

.title-underline {
    width: 5rem;
}
}
`;

export default Title;