
import Banner from '../components/Banner';
import OurPartners from '../components/OurPartners';
import FeaturedServicesSection from '../components/FeaturedServicesSection';
import Support from '../components/Support';

import FAQ from '../components/FAQ ';
import PlatformStats from '../components/PlatformStats';

const Home = () => {
    return (
        <div>
            <Banner />
            <FeaturedServicesSection />
            <OurPartners />
            <PlatformStats />
            <Support />
            <FAQ />
        </div>
    );
};

export default Home;