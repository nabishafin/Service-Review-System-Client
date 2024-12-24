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
            <OurPartners></OurPartners>
            <ChoosePlan></ChoosePlan>
            <CoutactUs></CoutactUs>
            <FeaturedServicesSection></FeaturedServicesSection>
        </div>
    );
};

export default Home;