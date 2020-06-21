import React, { Component } from 'react'
import styled from 'styled-components';
import { FaDolly, FaRedo, FaDollarSign } from 'react-icons/fa';

class Services extends Component {
    state = {
        services: [
            {
                id: 1,
                icon: <FaDolly className="icon" />,
                title: 'Free Shipping',
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In sit minima, tempora nisi rerum obcaecati totam id temporibus voluptates voluptas!"
            },
            {
                id: 2,
                icon: <FaRedo className="icon" />,
                title: '30 Day return Policy',
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In sit minima, tempora nisi rerum obcaecati totam id temporibus voluptates voluptas!"
            },
            {
                id: 3,
                icon: <FaDollarSign className="icon" />,
                title: 'Secured Payments',
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In sit minima, tempora nisi rerum obcaecati totam id temporibus voluptates voluptas!"
            }
        ]
    }

    render() {

        return (
            <ServicesWrapper>
                {this.state.services.map(item => {
                    return (<div key={item.id} className="service">
                        {item.icon}
                        <p className="mt-4"><strong>{item.title}</strong></p>
                        <p className="mt-3 text">{item.text}</p>
                    </div>)
                })}
            </ServicesWrapper>
        );
    }
}

const ServicesWrapper = styled.section`
background-color: var(--mainGrey);
padding: 0.75rem;
padding: 1rem 0.75rem;
display: flex;
align-items: center;
justify-content: center;
text-align: center;
margin-top: 2rem;

.service {
padding: 1rem;
margin: 0rem 1rem;
box-shadow: 0px 0px 8px 1px rgba(15, 15, 15, 0.1);
border-radius: 10px;
}

.service .text {
    font-size: 0.9rem;
}

.icon {
    font-size: 2rem;
    text-align: center;
    margin: 0 auto;
    color: var(--primaryColor);
}
`;

export default Services;