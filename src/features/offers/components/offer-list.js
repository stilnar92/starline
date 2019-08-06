import React from "react";
import styled from 'styled-components';
import {OfferItem} from "./offer-item";
import {Container} from "./container";
import {Card} from "../../../ui";

const ContainerStyled = styled(Container)`
    top: 25px;
    max-height: 95%;
    overflow-y: auto;
        
    &::-webkit-scrollbar-track
    {
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
        border-radius: 3px;
        background-color: ${props => props.theme.color.white};
    }
    
    &::-webkit-scrollbar
    {
        width: 6px;
        background-color:  ${props => props.theme.color.white};
    }
    
    &::-webkit-scrollbar-thumb
    {
        border-radius: 3px;
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
        background-color:  ${props => props.theme.color.desktop};
    }
    
    @media screen and (max-width: ${props => props.theme.mobile}){
        top: 75px;
        overflow: inherit;   
        left: 2.5%;
        width: 95%; 
    }
`;

const Wrapper = styled.div`
    margin-bottom: 15px;
    margin-right: 10px;
`;

export const WrapperButton = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
`;

const Button = styled.button`
    border: none;
    font-size: 14px;
    text-transform: uppercase;
    text-align: center;
    background: none;
    color: ${props => props.theme.color.mobile};
    font-weight: 700;
`;

export const OfferList = ({offers, show}) => {

    if(!show) {
        return null;
    }
    return (
        <ContainerStyled>
            {offers.map((offer) =>
                <Wrapper key={offer.id}>
                    <Card>
                        <OfferItem
                            rating={offer.rating}
                            title={offer.title}
                            distance={offer.distance}
                            status={offer.status}
                            routeName={offer.routeName}
                            description={offer.description}
                        />
                        <WrapperButton>
                            <Button>Save up to 45% </Button>
                        </WrapperButton>
                    </Card>
                </Wrapper>
            )}
        </ContainerStyled>

    );
};
