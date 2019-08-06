import React, {Fragment} from "react";
import styled from 'styled-components';

const Title = styled.div`
    font-size: 14px;
    line-height: normal;
    color: ${props => props.theme.color.text}
    font-weight: 700;
    margin-bottom: 10px;
`;

const Stops = styled.div`
    position: relative;
    padding-left: 15px;
    padding-bottom: 10px;
    border-bottom: 1px solid #EBEBEB;
`;

const Stop = styled.div`
    position: relative;
    font-size: 14px;
    line-height: 23px;

    &:last-child {
       &:before {
            content:none;
       }
    }
    
    &:before {
        content: '';
        position: absolute;
        height: 25px;
        left: -12px;
        top: 0px;
        width: 1px;
        background: #EB5757;
        -webkit-transform: translateY(8px);
        -ms-transform: translateY(8px);
        transform: translateY(8px);          
    }
    
    &:after {
        content: '';
        position: absolute;
        width: 7px;
        height: 7px;
        background: #EB5757;
        border-radius: 50%;
        top: 50%;
        left: -15px;
        margin-top: -4px;
    }
`;

export const Highlights = ({stops}) => (
    <Fragment>
        <Title>Highlights</Title>
        <Stops>
            {stops.map((stop) => <Stop>{stop.title}</Stop>)}
        </Stops>
    </Fragment>
)