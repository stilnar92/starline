import {useState} from "react";
import {Cross, Header, Menu, Modal, Wrapper} from "../../../ui";
import cross from "../../../assets/cross.svg";
import React, {Fragment} from "react";

const menuTitles = {
    'map': 'Map explore',
    'offers': 'All offers'
}
export const MobileMenu = ({onClick, menu}) => {
    const [isShow, setShow] = useState(false);
    return (
        <Fragment>
            <Header title={menuTitles[menu]} onClick={() => setShow(!isShow)}/>
            {isShow && (
                <Modal onClose={() => setShow(!isShow)}>
                    <Wrapper>
                        <Cross src={cross}/>
                        <Menu>
                            <Menu.Title mobile={true}>Menu</Menu.Title>
                            <Menu.Item
                                mobile={true}
                                onClick={() => {
                                    onClick('map');
                                    setShow(false);
                                }}>Map explore</Menu.Item>
                            <Menu.Item
                                mobile={true}
                                onClick={() => {
                                    onClick('offers');
                                    setShow(false);
                                }}>All offers</Menu.Item>
                        </Menu>
                    </Wrapper>
                </Modal>
            )}
        </Fragment>)
};