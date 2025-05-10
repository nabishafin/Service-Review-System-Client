import { useEffect, useState } from 'react';
import axios from 'axios';
import ServiceCart from './ServiceCart';
import Headline from './Headline';


const FeaturedServicesSection = () => {
    const [services, setServices] = useState([]);



    useEffect(() => {
        fetchAllJobs();
    }, []);

    const fetchAllJobs = async () => {
        try {
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/allService`,);
            setServices(data);
        } catch (error) {
            console.error('Error fetching services:', error);
        }
    };

    return (
        <section className='bg-gray-100 py-16 dark:bg-gray-900  '>
            <div className='md:w-10/12 w-full px-4 mx-auto'>
                <div>
                    <Headline
                        tittle={' Featured Services Section'}
                        description={'Our Featured Services offer premium solutions designed to address your specific needs.'}
                    ></Headline>
                </div>
                <div className=' grid grid-cols-1 md:grid-cols-3 gap-5 my-10 p-2'>
                    {
                        services.map(service =>
                            < ServiceCart
                                key={service._id}
                                service={service}
                            ></ServiceCart>
                        )
                    }
                </div>
            </div >
        </section>
    );
};

export default FeaturedServicesSection;