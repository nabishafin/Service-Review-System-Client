import axios from 'axios';
import { div } from 'motion/react-client';
import React, { useEffect, useState } from 'react';
import SingleSirviceCart from '../components/SingleSirviceCart';

const ServicesPage = () => {
    const [services, setServices] = useState([]);
    console.log(services)
    useEffect(() => {
        fetchAllJobs();
    }, []);

    const fetchAllJobs = async () => {
        try {
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/Services`);
            setServices(data);
        } catch (error) {
            console.error('Error fetching services:', error);
        }
    };


    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-3 py-5'>
                {
                    services.map(service =>
                        <SingleSirviceCart
                            key={service._id}
                            service={service}
                        ></SingleSirviceCart>
                    )
                }
            </div>
        </div>
    )
}
export default ServicesPage;