import React from "react";
import {Container} from '../../../ui';

export const Template = ({menu, onClickMenu, children}) => {
    return (
        <Container>
             {children}
        </Container>
    )
};


