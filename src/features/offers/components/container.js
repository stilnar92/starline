import styled from "styled-components";

export const Container = styled.div`
    position: absolute;
    top: 25px;
    right: 60px;
    z-index: 1;
    
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
       
    @media screen and (max-width: ${props => props.theme.mobile}) {
        top: auto;
        bottom: 0;
        left: 0;
        width: 100%;
    }
`;