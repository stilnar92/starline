import React from "react";
import styled from 'styled-components';
import star from '../assets/star.svg';
import starOff from '../assets/star-off.svg';
import {range} from '../lib';

const View = styled.div`
    display: flex;
 `;

const Star = styled.img`
    width: 10px;
    height: 10px;
`;

const numbers = range(5);

export const Rating = ({value}) => {
    return (
        <View>
            {
                numbers.map((number, index) => {
                    return value >= number ? <Star key={index} src={star} /> : <Star key={index} src={starOff}/>
                })
            }
        </View>
    )
};
