import React from "react";
import styled from 'styled-components';
import {
    Highlights,
    Row,
    Button,
    Desktop,
    Price,
    Countdown
} from "../../../ui";
import {OfferItem} from "./offer-item";
import {OfferTemplate} from "./offer-tempate"

const BookButton = styled(Button)`
    background: ${props => props.theme.color.desktop};
    color: ${props => props.theme.color.white};
    margin-right: 10px;
    @media screen and (max-width: ${props => props.theme.mobile}) {
        background: ${props => props.theme.color.mobile};;
    }
`;

const CancelButton = styled(Button)`
    border: 2px solid ${props => props.theme.color.desktop};
    background: ${props => props.theme.color.white};
    color: ${props => props.theme.color.desktop};
    @media screen and (max-width: ${props => props.theme.mobile}) {
        border: 2px solid ${props => props.theme.color.mobile};;
        color: ${props => props.theme.color.mobile};
    }
`;

export const OfferCard = ({offer, stops, show, handleClose}) => {

    if (!show) {
        return null;
    }

    if (!offer) {
        return null;
    }

    return (
        <OfferTemplate>
            <OfferItem
                rating={offer.rating}
                title={offer.title}
                distance={offer.distance}
                status={offer.status}
                routeName={offer.routeName}
                description={offer.description}
            />
            <Desktop>
                <Highlights stops={stops}/>
            </Desktop>
            <Countdown date={Date.now() + 10000000}/>
            <Price oldPrice={offer.oldPrice} newPrice={offer.newPrice}/>
            <Row>
                <BookButton>Book now</BookButton>
                <CancelButton onClick={handleClose}>Later</CancelButton>
            </Row>
        </OfferTemplate>
    );
};
