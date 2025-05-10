import React from 'react';
import Banner from '../components/Banner';
import OurPartners from '../components/OurPartners';
import FeaturedServicesSection from '../components/FeaturedServicesSection';
import WhyChoseUs from '../components/WhyChoseUs';
import Support from '../components/Support';

import FAQ from '../components/FAQ ';

const Home = () => {
    return (
        <div>
            <Banner />
            <FeaturedServicesSection />
            <OurPartners />
            <WhyChoseUs></WhyChoseUs>
            <Support />
            <FAQ />
        </div>
    );
};

export default Home;