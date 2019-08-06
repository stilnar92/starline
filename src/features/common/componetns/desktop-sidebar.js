import {Menu, Sidebar, Title} from "../../../ui";
import React from "react";

export const DesktopSidebar = ({onClick, menu}) => {
    return (
        <Sidebar>
            <Title>Travel Map</Title>
            <Menu>
                <Menu.Title>Menu</Menu.Title>
                <Menu.Item
                    active={menu === "map"}
                    onClick={() => onClick('map')}>
                    Map explore
                </Menu.Item>
                <Menu.Item
                    active={menu === "offers"}
                    onClick={() => onClick("offers")}
                >
                    All offers
                </Menu.Item>
            </Menu>
        </Sidebar>
    )
};


