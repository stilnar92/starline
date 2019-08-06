import styled from "styled-components";

export const Description = styled.div`
    margin-top: 15px;
    margin-bottom: 15px;
    padding-bottom: 25px; 
    font-size: 14px;
    line-height: 21px;
    color: :${props => props.theme.color.text};
    border-bottom: 1px solid #EBEBEB;
    @media screen and (max-width: ${props => props.theme.mobile}) {
        margin-bottom: 0;
    }
`;
