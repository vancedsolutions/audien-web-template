import React from 'react';
import useToggle from '../../Hooks/useToggle';
import BackToTop from '../BackToTop';
import SponserHomeTwo from '../HomeTwo/SponserHomeTwo';
import Drawer from '../Mobile/Drawer';
import AboutHomeEight from './AboutHomeEight';
import FooterHomeEight from './FooterHomeEight';
import HeaderHomeEight from './HeaderHomeEight';
import HeroHomeEight from './HeroHomeEight';

function HomeEight() {
    debugger
    const [drawer, setDrawer] = useToggle(false);
    return (
        <>
            <Drawer drawer={drawer} action={setDrawer.toggle} />
            <HeaderHomeEight drawer={drawer} action={setDrawer.toggle} />
            <HeroHomeEight />
            <AboutHomeEight />
            <SponserHomeTwo />
            <FooterHomeEight />
            <BackToTop className="back-to-top-8" />
        </>
    );
}

export default HomeEight;
