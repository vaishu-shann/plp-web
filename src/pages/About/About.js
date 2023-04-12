import React from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AboutUs from '../../component/About/aboutBanner';
import DescriptionAbout from '../../component/About/description';
import LifeAtPlp from '../../component/About/lifeAt';

function About(props) {
    const { pathname } = useLocation();
    useEffect(
      () => {
        window.scrollTo(0, 0);
      },
      [pathname]
    );
    return (
        <div>
            <AboutUs/>
            <LifeAtPlp/>
            <DescriptionAbout/> 
        </div>
    );
}

export default About;