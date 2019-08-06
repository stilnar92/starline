import React, {Fragment, useState, useEffect} from "react";
import {ThemeProvider} from 'styled-components';
import {GlobalStyles} from "./global-styles";
import {Template} from "./features/common/";
import {Map} from "./features/map";
import {defaultCenter} from "./features/map";
import {Offer} from "./features/offers/";
import {theme} from "./ui";
import {OfferList} from "./features/offers/components/offer-list";
import {useOffers} from "./features/offers/effects";
import {MobileMenu} from "./features/common/componetns/mobile-menu";
import {DesktopSidebar} from "./features/common/componetns/desktop-sidebar";
import { useMediaPredicate } from "react-media-hook";

const useCloseOfferWhenIsMenuOffers = (menu, setOffer) => {
    useEffect(() => {
        if (menu === 'offers') {
            setOffer(false);
        }
    }, [menu]);
};

const Menu = React.memo(({setMenu, menu}) => {
    return (
        <Fragment>
            <MobileMenu onClick={setMenu} menu={menu}/>
            <DesktopSidebar menu={menu} onClick={setMenu}/>
        </Fragment>
    )
});

function App() {
    const [userLocation, setUserLocation] = useState({defaultCenter});
    const [offerClicked, setOfferClicked] = useState(false);
    const [menu, setMenu] = useState("map");
    const isDesktop = useMediaPredicate(`(min-width: ${theme.mobile})`);
    const isMenuOffers = () => menu === 'offers';
    const isMenuMap = () => menu === 'map';

    const offers = useOffers();

    const isShowMap = isMenuMap() || isDesktop;
    const isShowOffers = isMenuOffers();

    useCloseOfferWhenIsMenuOffers(menu, setOfferClicked);

    const handleClickOfferMarker =  () => {
        setOfferClicked(true);
        setMenu("map");
    };

    return (
        <ThemeProvider theme={theme}>
            <Fragment>
                <GlobalStyles/>
                <Template onClickMenu={setMenu} menu={menu}>
                    <Menu setMenu={setMenu} menu={menu}/>
                    <Map
                        show={isShowMap}
                        userLocation={userLocation}
                        setUserLocation={setUserLocation}
                        onClickOfferMarker={handleClickOfferMarker}
                    />
                    <Offer
                        mapMenu={isMenuMap()}
                        userLocation={userLocation}
                        offerClicked={offerClicked}
                        offer={offers[0]}
                        setOfferClicked={setOfferClicked}
                    />
                    <OfferList offers={offers} show={isShowOffers}/>}
                </Template>
            </Fragment>
        </ThemeProvider>
    );
}

export default App;

