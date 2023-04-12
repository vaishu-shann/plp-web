import React from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AboutUs from '../../component/About/aboutBanner';
import DescriptionAbout from '../../component/About/description';
import LifeAtPlp from '../../component/About/lifeAt';
import CTASection from '../../component/About/ctaSection';

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
            <CTASection/>
        </div>
    );
}

export default About;