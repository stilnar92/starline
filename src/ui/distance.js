import React from "react";
import styled from 'styled-components';
import {Row} from './row';

const Title = styled.span`
    font-size: 14px;
    line-height: normal;
    color: ${props => props.theme.color.smallText};
    margin-right: 15px;
`;

const Arrow = styled.div`
    width: 10px;
    height: 10px;
    background-image: url("data:image/svg+xml,%3Csvg width='10' height='10' viewBox='0 0 10 10' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4.73885 9.38741C5.0021 10.1787 5.50144 10.2066 5.85369 9.45228L9.85819 0.871411C10.2104 0.11554 9.88384 -0.210344 9.1288 0.141943L0.54804 4.1461C-0.207001 4.49839 -0.178338 4.99777 0.612154 5.2618L3.70699 6.29301L4.73885 9.38741Z' fill='%23A9A6B8'/%3E%3C/svg%3E%0A");
`;

export const Distance = ({value}) => (
    <Row>
        <Title>{value} miles</Title>
        <Arrow/>
    </Row>
);
