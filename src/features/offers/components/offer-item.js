import React from "react";
import styled from 'styled-components';
import {
    Row,
    Status,
    Description,
    Head,
    Distance,
    Rating,
} from "../../../ui";

const View = styled.div` 
  background: ${props => props.theme.color.white};
`;

const SubTitle = styled.div`
    font-size: 14px;
    line-height: normal;
    color: ${props => props.theme.color.routes[props.color]};
    text-transform: uppercase;
`;


export const OfferItem = ({rating, distance, title, status, routeName, description}) => {
    return (
        <View>
            <Row>
                <Rating value={rating}/>
                <Distance value={distance}/>
            </Row>
            <Row>
                <Head>{title}</Head>
                <Status value={status}/>
            </Row>
            <SubTitle color={'red'}>{routeName}</SubTitle>
            <Description>
                {description}
            </Description>
        </View>
    );
};
