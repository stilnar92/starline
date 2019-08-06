import React from "react";
import styled from 'styled-components';
import burger from '../assets/burger.svg';

const View = styled.div`   
    left: 0;
    position: absolute;
    top: 10px;
    width: 100%;
    z-index: 1000;
    color: ${props => props.theme.color.text};
    @media screen and (min-width: ${props => props.theme.mobile}) {
        display: none;
    }  
 `;

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 15px 15px;
    align-items: center;
    height: 50px;
`;

export const Title = styled.h1`
    margin: 0;
    padding:0;
    font-size: 26px};
    line-height: normal;
    letter-spacing: 0.05em;
`;

const Image = styled.img`
    width: 30px;
    height: 30px;
`;

export const Header = ({title, onClick}) => (
    <View>
        <Wrapper>
            <Title>{title}</Title>
            <Image src={burger} alt='Burger icon' onClick={onClick}/>
        </Wrapper>
    </View>

)