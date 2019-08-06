import React, {Component} from "react";
import styled from 'styled-components';
import {theme} from "./theme";

const color = (props) => {
    if(props.active) {
        return theme.color.white;
    }
    if(props.mobile) {
        return theme.color.text;
    }

    return theme.color.sideBarText;
};

export const View = styled.ul`
    padding:0;
    list-style-type:none;   
`;

export const Item = styled.li`
    margin-bottom: 28px;
    color: ${props => color(props)}
    font-size: ${props => props.mobile? '26px': '20px'};
    font-weight: 700;    
    line-height: normal;
    cursor: pointer;
`;

export const Title = styled.h2`
    margin: 0;
    padding:0;
    margin-bottom: ${props => props.mobile? '50px': '26px'};
    color: ${props => props.mobile? props.theme.color.text: props.theme.color.sideBarText};;
    font-size: ${props => props.mobile? '26px': '#14px'};
    line-height: normal;
    letter-spacing: 0.05em;
`;


export class Menu extends Component {
    static Item = ({children, active, onClick, mobile}) => <Item mobile={mobile} active={active} onClick={onClick}>{children}</Item>;
    static Title = ({children, mobile}) => <Title mobile={mobile}>{children}</Title>;

    render() {
        return (
            <View>{this.props.children}</View>
        );
    }
}