import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SingleSirviceCart from '../components/SingleSirviceCart';
import PlatformStats from '../components/PlatformStats';

const ServicesPage = () => {
    const [services, setServices] = useState([]);
    const [category, setCategory] = useState('Technology');
    const [search, setSearch] = useState('');
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        fetchAllJobs();
    }, []);

    const fetchAllJobs = async () => {
        try {
            setIsLoading(true);
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/Services`);
            setServices(data);
        } catch (error) {
            console.error('Error fetching services:', error);
        } finally {
            setIsLoading(false);
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
        <div className="bg-gray-50 text-gray-900">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-r from-black via-gray-900 to-black text-white text-center py-24 px-5">
                <div className="absolute inset-0 bg-black/30 z-0"></div>
                <div className="relative z-10 max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Discover Premium Services</h1>
                    <p className="text-xl md:text-2xl mb-8">
                        Connect with top-rated professionals across various industries
                    </p>
                    <div className="max-w-xl mx-auto">
                        <div className="flex p-1 overflow-hidden rounded-lg bg-white/10 backdrop-blur-sm">
                            <input
                                className="px-6 py-3 text-white placeholder-white/70 bg-transparent outline-none w-full"
                                type="text"
                                name="search"
                                onChange={handleSearchChange}
                                placeholder="Search services..."
                            />
                            <button
                                type="button"
                                className="px-6 py-3 bg-white text-blue-900 font-medium rounded hover:bg-gray-100 transition-colors">
                                Search
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Bar */}
            <PlatformStats />

            {/* Feature Highlights */}
            <section className="py-16 px-6 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Platform</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                title: 'Vetted Professionals',
                                desc: 'Every service provider undergoes rigorous verification.',
                                icon: '✅',
                                bg: 'bg-blue-50'
                            },
                            {
                                title: 'Transparent Pricing',
                                desc: 'No hidden fees. Know exactly what you\'ll pay.',
                                icon: '💰',
                                bg: 'bg-green-50'
                            },
                            {
                                title: 'Quality Guarantee',
                                desc: 'We stand behind every service with our satisfaction guarantee.',
                                icon: '⭐',
                                bg: 'bg-yellow-50'
                            },
                            {
                                title: 'Secure Payments',
                                desc: 'Your transactions are always protected.',
                                icon: '🔒',
                                bg: 'bg-purple-50'
                            }
                        ].map((item, i) => (
                            <div key={i} className={`${item.bg} p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow`}>
                                <div className="text-2xl mb-4">{item.icon}</div>
                                <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                                <p className="text-gray-600">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-16 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-center mb-10">
                        <h2 className="text-3xl font-bold mb-4 md:mb-0">
                            {category} Services
                            <span className="text-gray-500 text-lg ml-2">({filteredServices.length} available)</span>
                        </h2>
                        <div className="flex items-center space-x-4">
                            <div className="relative">
                                <select
                                    className="appearance-none bg-gray-100 border-0 rounded-lg px-4 py-2 pr-8 focus:ring-2 focus:ring-blue-500"
                                    value={category}
                                    onChange={(e) => setCategory(e.target.value)}
                                >
                                    <option value="Technology">Technology</option>
                                    <option value="Health">Health</option>
                                    <option value="Food & Beverage">Food & Beverage</option>
                                    <option value="Finance">Finance</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    {isLoading ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[...Array(4)].map((_, i) => (
                                <div key={i} className="bg-gray-100 rounded-xl h-80 animate-pulse"></div>
                            ))}
                        </div>
                    ) : filteredServices.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {filteredServices.map(service => (
                                <SingleSirviceCart key={service._id} service={service} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-16">
                            <div className="text-5xl mb-4">🔍</div>
                            <h3 className="text-xl font-semibold mb-2">No services found</h3>
                            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
                            <button
                                onClick={() => {
                                    setSearch('');
                                    setCategory('Technology');
                                }}
                                className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                            >
                                Reset Filters
                            </button>
                        </div>
                    )}
                </div>
            </section>

            {/* How It Works */}
            <section className="py-16 px-6 bg-gradient-to-r from-black via-gray-900 to-black">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-center text-white mb-4">How It Works</h2>
                    <p className="text-center text-white max-w-2xl mx-auto mb-12">
                        Getting the right service has never been easier. Follow these simple steps to find your perfect match.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                        <div className="absolute top-16 left-1/4 right-1/4 h-1 bg-gray-200 hidden md:block"></div>
                        {[
                            {
                                title: "Browse & Compare",
                                desc: "Explore our extensive catalog of services. Filter by category, price, or ratings to find what you need.",
                                icon: "👀"
                            },
                            {
                                title: "Book & Connect",
                                desc: "Select your preferred provider and schedule a consultation. Our messaging system makes communication easy.",
                                icon: "📅"
                            },
                            {
                                title: "Get Results",
                                desc: "Receive exceptional service with our quality guarantee. We're here to support you every step of the way.",
                                icon: "🎯"
                            }
                        ].map((step, index) => (
                            <div key={index} className="bg-white p-8 rounded-xl shadow-sm text-center relative z-10 hover:shadow-md transition-shadow">
                                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                                    {step.icon}
                                </div>
                                <div className="font-bold text-xl mb-2">{step.title}</div>
                                <div className="text-gray-600">{step.desc}</div>
                                <div className="mt-4 text-blue-600 font-bold">{index + 1}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-16 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                quote: "Found the perfect web developer for my startup. The platform made it so easy to compare options and make a decision.",
                                author: "Sarah Johnson",
                                role: "CEO, TechStart Inc.",
                                rating: 5
                            },
                            {
                                quote: "As a small business owner, this service has saved me countless hours searching for reliable professionals.",
                                author: "Michael Chen",
                                role: "Owner, Chen's Kitchen",
                                rating: 5
                            },
                            {
                                quote: "The quality of service providers here is exceptional. I've used multiple services and have never been disappointed.",
                                author: "Emma Rodriguez",
                                role: "Marketing Director",
                                rating: 4
                            }
                        ].map((testimonial, index) => (
                            <div key={index} className="bg-gray-50 p-6 rounded-lg">
                                <div className="flex mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <span key={i} className="text-yellow-400">★</span>
                                    ))}
                                </div>
                                <p className="italic mb-4">"{testimonial.quote}"</p>
                                <div className="font-semibold">{testimonial.author}</div>
                                <div className="text-sm text-gray-600">{testimonial.role}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
};

export default ServicesPage;