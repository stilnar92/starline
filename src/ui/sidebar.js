import styled from 'styled-components';

export const Sidebar =  styled.div`
    width: 300px;
    padding: 60px 0 0 22px;
    background: linear-gradient(180deg, #8079E3 0%, #9C74CC 100%);  
    @media screen and (max-width: 620px) {
        width: 225px;        
    } 
    @media screen and (max-width: ${props => props.theme.mobile}) {
        display: none;
    }   
`;

