import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SingleSirviceCart from '../components/SingleSirviceCart';

const ServicesPage = () => {
    const [services, setServices] = useState([]);
    const [category, setCategory] = useState('Technology');
    const [search, setSearch] = useState('');

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

    const filteredServices = services.filter(service => {
        const categoryMatch = service.category === category;
        const searchMatch =
            service.title.toLowerCase().includes(search.toLowerCase()) ||
            service.description.toLowerCase().includes(search.toLowerCase());
        return categoryMatch && searchMatch;
    });

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    };

    return (
        <div className="bg-gray-50 dark:bg-white text-black dark:text-gray-100">
            {/* Hero Section */}
            <section className="relative bg-white dark:bg-white text-white text-center py-20 px-5">
                <img
                    src="https://i.ibb.co.com/FZK6Ww1/company-img.jpg"
                    className="absolute inset-0 w-full h-full object-cover backdrop-blur-lg"
                    alt="Banner"
                />
                <div className="relative z-10 max-w-3xl mx-auto">
                    <h1 className="text-4xl font-bold">Find the Right Service for You</h1>
                    <p className="text-lg mt-3">
                        Browse thousands of trusted services in technology, health, finance, and more.
                    </p>
                </div>
            </section>

            {/* Feature Highlights */}
            <section className=''>
                <section className='bg-white dark:bg-gray-800 py-16 px-6'>
                    <div className="w-full md:w-10/12 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        {[{
                            title: 'Trusted Experts',
                            desc: 'Verified and reviewed service providers.',
                            icon: 'https://cdn-icons-png.flaticon.com/512/1055/1055687.png',
                        },
                        {
                            title: 'Personalized Search',
                            desc: 'Easily filter by category and need.',
                            icon: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
                        },
                        {
                            title: 'Fast & Reliable',
                            desc: 'Quick response and delivery.',
                            icon: 'https://cdn-icons-png.flaticon.com/512/190/190411.png',
                        },
                        {
                            title: 'Secure Payments',
                            desc: 'Safe and transparent payment process.',
                            icon: 'https://cdn-icons-png.flaticon.com/512/1828/1828640.png',
                        }]
                            .map((item, i) => (
                                <div key={i} className="bg-white dark:white dark:text-black rounded-lg p-6 shadow">
                                    <img src={item.icon} className="w-12 h-12 mx-auto" />
                                    <h3 className="font-bold mt-3">{item.title}</h3>
                                    <p className="text-sm text-gray-600 dark:text-black mt-1">{item.desc}</p>
                                </div>
                            ))}
                    </div>
                </section>

                {/* Search & Filter */}
                <div className="w-full md:w-10/12 mx-auto flex flex-col md:flex-row justify-center items-center my-5 space-y-3 md:space-y-0">
                    <form className="w-full md:w-auto p-1">
                        <div className="flex p-1 overflow-hidden border rounded-lg focus-within:ring focus-within:border-blue-400">
                            <input
                                className="px-6 py-2 text-gray-700 dark:text-white placeholder-gray-500 bg-white dark:bg-white outline-none w-full"
                                type="text"
                                name="search"
                                onChange={handleSearchChange}
                                placeholder="Enter Job Title"
                            />
                            <button
                                type="button"
                                className="px-4 py-2 bg-blue-950 text-white font-medium rounded hover:bg-blue-600">
                                Search
                            </button>
                        </div>
                    </form>
                    <details className="dropdown text-center">
                        <summary className="btn m-1">Filter By Category</summary>
                        <ul className="menu dropdown-content bg-white dark:bg-gray-800 rounded-box z-[1] w-52 p-2 shadow text-gray-700 dark:text-white">
                            <li onClick={() => setCategory('Technology')}><a>Technology</a></li>
                            <li onClick={() => setCategory('Health')}><a>Health</a></li>
                            <li onClick={() => setCategory('Food & Beverage')}><a>Food & Beverage</a></li>
                            <li onClick={() => setCategory('Finance')}><a>Finance</a></li>
                        </ul>
                    </details>
                </div>

                {/* Service Cards */}
                <div className="w-full md:w-10/12 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 px-6 pb-10">
                    {filteredServices.map(service => (
                        <SingleSirviceCart key={service._id} service={service} />
                    ))}
                </div>

                {/* How It Works */}
                <section className="bg-white dark:bg-gray-800 py-16 px-6">
                    <h2 className="text-3xl font-bold text-center mb-8">How It Works</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto text-center">
                        {["Browse Services", "Contact Provider", "Get Results"].map((step, index) => (
                            <div key={index}>
                                <img src={index === 0 ? "https://cdn-icons-png.flaticon.com/512/684/684908.png" :
                                    index === 1 ? "https://cdn-icons-png.flaticon.com/512/1828/1828817.png" :
                                        "https://cdn-icons-png.flaticon.com/512/709/709496.png"} className="w-16 h-16 mx-auto" />
                                <h4 className="font-semibold mt-3">{index + 1}. {step}</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-300">
                                    {index === 0 ? "Search and filter services by category or keyword." :
                                        index === 1 ? "Reach out or book directly with your chosen expert." :
                                            "Receive quality service with transparency and support."}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Testimonials */}


            </section>

        </div >
    );
};

export default ServicesPage;
