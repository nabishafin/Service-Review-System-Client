import { useEffect, useState } from 'react';
import axios from 'axios';


const FeaturedServicesSection = () => {
    const [services, setServices] = useState([]);
    console.log(services)
    useEffect(() => {
        fetchAllJobs();
    }, []);

    const fetchAllJobs = async () => {
        try {
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/allService`);
            setServices(data);
        } catch (error) {
            console.error('Error fetching services:', error);
        }
    };

    return (
        <div>

        </div>
    );
};

export default FeaturedServicesSection;