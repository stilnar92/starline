import styled from "styled-components";

export const Card = styled.div`
    max-width: 333px; 
    padding: 20px;
    background: #FFFFFF;
    border: 0.75px solid #EBEBEB;
    box-sizing: border-box;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    @media screen and (max-width: ${props => props.theme.mobile}) {
        max-width:100%;
    }
`;