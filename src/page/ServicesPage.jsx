import axios from 'axios';
import { div } from 'motion/react-client';
import React, { useEffect, useState } from 'react';
import SingleSirviceCart from '../components/SingleSirviceCart';

const ServicesPage = () => {
    const [services, setServices] = useState([]);
    const [category, setCategory] = useState('Technology')
    console.log(category)
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

    const newServices = services.filter(service => service.category === category)


    return (
        <div>
            <div className='flex justify-center items-center my-2'>
                <details className="dropdown text-center">
                    <summary className="btn m-1">Filter By Category</summary>
                    <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                        <li onClick={() => setCategory('Technology')}><a>Technology</a></li>
                        <li onClick={() => setCategory('Health')}><a>Health</a></li>
                        <li onClick={() => setCategory('Food & Beverage')}><a>Food & Beverage</a></li>
                        <li onClick={() => setCategory('Finance')}><a>Finance</a></li>
                    </ul>
                </details>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-3 py-5'>
                {
                    newServices.map(service =>
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