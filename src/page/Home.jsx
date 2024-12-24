import React from 'react';
import Banner from '../components/Banner';
import OurPartners from '../components/OurPartners';
import CoutactUs from '../components/CotactUs';
import ChoosePlan from '../components/ChoosePlan';
import FeaturedServicesSection from '../components/FeaturedServicesSection';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FeaturedServicesSection></FeaturedServicesSection>
            <div className='my-5'>
                <OurPartners></OurPartners>
            </div>
            <ChoosePlan></ChoosePlan>
            <CoutactUs></CoutactUs>

        </div>
    );
};

export default Home;