import React from 'react';
import PartnerSec from '../../component/Service/PartnerSec';
import ServiceComp from '../../component/Home/ourService';
import ServiceBanner from '../../component/Service/serviceHome';

function Service(props) {
    return (
        <div>
            <ServiceBanner/>
            <ServiceComp/>
            <PartnerSec/>
        </div>
    );
}

export default Service;