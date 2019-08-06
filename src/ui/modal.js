import React from "react";
import ReactDOM from "react-dom";
import styled from 'styled-components';

const modalRoot = document.getElementById("modal-root");

const View = styled.div`
    display: none;
    height: 100%;
    left: 0;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 10000;
    background: ${props => props.theme.color.white};
    @media screen and (max-width: ${props => props.theme.mobile}) {
        display: block;
    }  
`;

export class Modal extends React.Component {
    el = document.createElement("div");

    componentDidMount() {
        modalRoot.appendChild(this.el);
    }

    componentWillUnmount() {
        modalRoot.removeChild(this.el);
    }

    render() {
        return ReactDOM.createPortal(
            <View
               onClick={this.props.onClose}
            >
                {this.props.children}
            </View>,
            this.el
        );
    }
}
