import styled from "styled-components";

export const Desktop = styled.div`
    display: block;
    @media screen and (max-width: ${props => props.theme.mobile}) {
        display: none;
    }
`;
