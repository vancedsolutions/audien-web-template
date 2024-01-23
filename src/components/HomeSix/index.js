import React from 'react';
import useToggle from '../../Hooks/useToggle';
import BackToTop from '../BackToTop';
import FooterHomeSix from '../HomeEight/FooterHomeEight';
import ServicesHomeTwo from '../HomeTwo/ServicesHomeTwo';
import Drawer from '../Mobile/Drawer';
import HeaderHomeSix from './HeaderHomeSix';
import HeroHomeSix from './HeroHomeSix';

function HomeSix() {
    const [drawer, drawerAction] = useToggle(false);
    return (
        <>
            <Drawer drawer={drawer} action={drawerAction.toggle} />
            <HeaderHomeSix action={drawerAction.toggle} />
            <HeroHomeSix />
            <ServicesHomeTwo className="pt-90" />
            <BackToTop className="back-to-top-6" />
            <FooterHomeSix />
        </>
    );
}

export default HomeSix;
