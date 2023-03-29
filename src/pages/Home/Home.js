import React from 'react';
import HomeBanner from '../../component/Home/homeBanner';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ServiceComp from '../../component/Home/ourService';
import MarqueeSection from '../../component/Home/Marquee';
import Testimonial from '../../component/Home/Testimonial';

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
            <ServiceComp/>
            <MarqueeSection/>
            <Testimonial/>
        </div>
    );
}

export default Home;