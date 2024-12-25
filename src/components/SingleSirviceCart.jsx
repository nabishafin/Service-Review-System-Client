import React from 'react';

const SingleSirviceCart = ({ service }) => {
    return (
        <div>
            {/* <div className=" mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                <img className='w-full h-56 object-cover' src={service.serviceImage} alt="" />

                <div className="p-4">
                    <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
                    <p className="text-gray-600 mt-2"></p>

                    <div className="mt-4">
                        <p className="text-sm text-gray-500">Category: {service.category}</p>
                        <p className="text-lg font-bold text-gray-900 mt-1">Bdt {service.price}</p>
                    </div>

                    <div className="mt-4">
                        <button className="btn btn-primary w-full">See Details</button>
                    </div>
                </div>
            </div> */}
            <div class=" mx-auto bg-gray-800 text-white shadow-2xl rounded-lg overflow-hidden">
                <img className='w-full h-56 object-cover' src={service.serviceImage} alt="" />
                <div class="p-6">
                    <h3 class="text-2xl font-semibold text-white">{service.title}</h3>
                    <p class="text-gray-300 mt-2">{service.description.slice(0, 70)}</p>

                    <div class="mt-4">
                        <p class="text-sm text-gray-400">Category: {service.category}</p>
                        <p class="text-xl font-bold text-white mt-1">BDT {service.price}</p>
                    </div>

                    <div class="mt-6">
                        <button class="w-full bg-primary text-gray-800 font-semibold py-2 rounded-lg hover:bg-white transition duration-300">See Details</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SingleSirviceCart;