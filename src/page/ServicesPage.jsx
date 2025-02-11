import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SingleSirviceCart from '../components/SingleSirviceCart';

const ServicesPage = () => {
    const [services, setServices] = useState([]);
    const [category, setCategory] = useState('Technology');
    const [search, setSearch] = useState('');

    // Log for debugging
    console.log(search);
    console.log(category);
    console.log(services);

    useEffect(() => {
        fetchAllJobs();
    }, []);

    // Fetch all services from the API
    const fetchAllJobs = async () => {
        try {
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/Services`);
            setServices(data);
        } catch (error) {
            console.error('Error fetching services:', error);
        }
    };

    // Filter services by category and search term
    const filteredServices = services.filter(service => {
        const categoryMatch = service.category === category;
        const searchMatch = service.title.toLowerCase().includes(search.toLowerCase()) ||
            service.description.toLowerCase().includes(search.toLowerCase());
        return categoryMatch && searchMatch;
    });

    // Function to handle search input change
    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    };

    return (
        <div>
            <div className='flex flex-col md:flex-row justify-center items-center my-4 md:my-2'>
                <form className='w-full md:w-auto'>
                    <div className='flex p-1 overflow-hidden border rounded-lg focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300'>
                        <input
                            className='px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent'
                            type='text'
                            name='search'
                            onChange={handleSearchChange}
                            placeholder='Enter Job Title'
                            aria-label='Enter Job Title'
                        />
                        <button
                            type="button"
                            className='px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none'>
                            Search
                        </button>
                    </div>
                </form>

                <details className="dropdown text-center mt-4 md:mt-0 md:ml-4">
                    <summary className="btn m-1">Filter By Category</summary>
                    <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                        <li onClick={() => setCategory('Technology')}><a>Technology</a></li>
                        <li onClick={() => setCategory('Health')}><a>Health</a></li>
                        <li onClick={() => setCategory('Food & Beverage')}><a>Food & Beverage</a></li>
                        <li onClick={() => setCategory('Finance')}><a>Finance</a></li>
                    </ul>
                </details>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 p-5'>
                {filteredServices.map(service =>
                    <SingleSirviceCart
                        key={service._id}
                        service={service}
                    />
                )}
            </div>
        </div>
    );
};

export default ServicesPage;
