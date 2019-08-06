import React from "react";
import {Container} from './container';
import {Card} from '../../../ui/';

export const OfferTemplate = ({children}) => {
    return (
        <Container>
            <Card>
                {children}
            </Card>
        </Container>

    );
};
