import React from "react";
import styled from 'styled-components';

const Title = styled.div`
    font-size: 22px;
    color: ${props => props.theme.color.text};
    font-weight: 700;    
`;

const Subtitle = styled.div`
    font-size: 14px;
    color: ${props => props.theme.color.smallText};
`;

const View = styled.div`
    display: flex;
    padding: 20px;
    align-items: center;
    justify-content: space-between;
`;

const NewPrice =  styled(Title)`
    color: ${props => props.theme.color.desktop};
    @media screen and (max-width: ${props => props.theme.mobile}) {
        color: #E92026;
    }`;



export const Price = ({oldPrice, newPrice}) => (
    <View>
        <div>
            <Title>{oldPrice}$</Title>
            <Subtitle>old price</Subtitle>
        </div>
        <div>
            <NewPrice>{newPrice}$</NewPrice>
            <Subtitle>new price</Subtitle>
        </div>
        <div>
            <Title>{oldPrice - newPrice}$</Title>
            <Subtitle>saved</Subtitle>
        </div>
    </View>
);