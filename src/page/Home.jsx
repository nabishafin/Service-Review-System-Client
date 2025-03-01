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
            <div className='my-5'>
                <OurPartners />
            </div>
            <WhyChoseUs></WhyChoseUs>
            <div className='my-5 p-2'>
                <Support />
            </div>
            <FAQ />
        </div>
    );
};

export default Home;