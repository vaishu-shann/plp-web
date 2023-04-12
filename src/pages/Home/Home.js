import React from 'react';
import HomeBanner from '../../component/Home/homeBanner';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import MarqueeSection from '../../component/Home/Marquee';
import Testimonial from '../../component/Home/Testimonial';
import AboutHome from '../../component/Home/aboutGlimpes';
import Statistic from '../../component/Home/Statistics';

function Home(props) {
    const { pathname } = useLocation();
    useEffect(
      () => {
        window.scrollTo(0, 0);
      },
      [pathname]
    );
  

    return (
        <div>
            <HomeBanner/>
            <Statistic/>
            <AboutHome/>
            <MarqueeSection/>
            <Testimonial/>
        </div>
    );
}

export default Home;