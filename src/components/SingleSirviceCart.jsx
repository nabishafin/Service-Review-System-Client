import React from 'react';
import { Link } from 'react-router-dom';

const SingleSirviceCart = ({ service }) => {
    return (
        <div>
            <div class=" mx-auto bg-white text-white shadow-2xl rounded-lg overflow-hidden">
                <img className='w-full h-56 object-cover' src={service.serviceImage} alt="" />
                <div class="p-6">
                    <h3 class="text-2xl font-semibold text-black">{service.title}</h3>
                    <p class="text-black mt-2">{service.description.slice(0, 70)}</p>

                    <div class="mt-4">
                        <p class="text-sm text-black">Category: {service.category}</p>
                        <p class="text-xl font-bold text-white mt-1">BDT {service.price}</p>
                    </div>

                    <div class="mt-6">
                        <Link to={`/serviceinfo/${service._id}`}><button class="w-full bg-primary text-gray-800 font-semibold py-2 rounded-lg hover:bg-white transition duration-300">See Details</button></Link>
                    </div>
                </div>
            </div>

        </div >
    );
};

export default SingleSirviceCart;