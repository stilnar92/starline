import styled from "styled-components";

export const Button = styled.button`
    max-width: 225px;
    width: 100%;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
    border: none;
    border-radius: 24px;
    font-size: 14px;
    line-height: normal;
    text-align: center;
    font-weight: 700;
    padding-top: 10px;
    padding-bottom: 10px;
    @media screen and (max-width: ${props => props.theme.mobile}) {
        padding-top: 15px;
        padding-bottom: 15px;
    }    
`;
