import React from 'react';

const CoutactUs = () => {
    return (
        <div>
            <div class="container mx-auto p-8 bg-white text-white rounded-lg shadow-md">
                <h2 class="text-2xl text-[#1c082b] font-bold mb-4">Looking For Support?</h2>
                <p class="mb-6 text-[#1c082b]">Got a Question? We'd love to hear from you. Send us a message and we will respond you as soon as possible.</p>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <input type="text" placeholder="Your Name" class="input input-bordered w-full" />
                    </div>
                    <div>
                        <input type="email" placeholder="Your Email" class="input input-bordered w-full" />
                    </div>
                </div>

                <div class="mt-4">
                    <input type="text" placeholder="Your Subject" class="input input-bordered w-full" />
                </div>

                <div class="mt-4">
                    <textarea placeholder="Your Message" class="textarea textarea-bordered w-full h-24" rows="6"></textarea>
                </div>

                <div class="mt-4">
                    <div class="form-control">
                        <label class="label cursor-pointer">
                            <span class="label-text">By signing and clicking Submit, you affirm you have read and agree to the Privacy Policy and Terms of Use and want to receive news.</span>
                            <input type="checkbox" class="checkbox checkbox-primary" />
                        </label>
                    </div>
                </div>

                <div class="mt-4">
                    <button class=" bg-gradient-to-r from-black via-gray-900 to-black p-2 rounded-lg w-full">Send a Message</button>
                </div>
            </div>
        </div >
    );
};

export default CoutactUs;