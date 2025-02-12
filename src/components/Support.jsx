import React from 'react';

const Support = () => {
    return (
        <div>
            <div className="container mx-auto p-8 bg-white text-white rounded-lg shadow-md">
                <h2 className="text-2xl text-[#1c082b] font-bold mb-4">Looking For Support?</h2>
                <p className="mb-6 text-[#1c082b]">Got a Question? We'd love to hear from you. Send us a message and we will respond you as soon as possible.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <input type="text" placeholder="Your Name" className="input input-bordered w-full" />
                    </div>
                    <div>
                        <input type="email" placeholder="Your Email" className="input input-bordered w-full" />
                    </div>
                </div>

                <div className="mt-4">
                    <input type="text" placeholder="Your Subject" className="input input-bordered w-full" />
                </div>

                <div className="mt-4">
                    <textarea placeholder="Your Message" className="textarea textarea-bordered w-full h-24" rows="6"></textarea>
                </div>

                <div className="mt-4">
                    <div className="form-control">
                        <label className="label cursor-pointer">
                            <span className="label-text">By signing and clicking Submit, you affirm you have read and agree to the Privacy Policy and Terms of Use and want to receive news.</span>
                            <input type="checkbox" className="checkbox checkbox-primary" />
                        </label>
                    </div>
                </div>

                <div className="mt-4">
                    <button className=" bg-gradient-to-r from-black via-gray-900 to-black p-2 rounded-lg w-full">Send a Message</button>
                </div>
            </div>
        </div >
    );
};

export default Support;