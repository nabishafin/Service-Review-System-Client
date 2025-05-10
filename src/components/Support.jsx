import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import CustomizeButton from '../shared/CustomizeButton';

const Support = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_ulc9cze',        // ✅ Your EmailJS service ID
            'template_eu3xc8l',       // ✅ Your EmailJS template ID
            form.current,             // ✅ Correct reference
            'JrivHisIqegdsO58N'       // ✅ Your public key
        )
            .then(() => {
                toast.success('Message sent successfully!');
                form.current.reset(); // ✅ Clear the form on success
            }, (error) => {
                console.error(error);
                toast.error('Failed to send the message, please try again later.');
            });
    };

    return (
        <div className="w-full px-6 md:w-10/12 mx-auto bg-white text-white rounded-lg p-16">
            <h2 className="text-2xl text-[#1c082b] font-bold mb-4">Looking For Support?</h2>
            <p className="mb-6 text-[#1c082b]">
                Got a Question? We'd love to hear from you. Send us a message and we will respond as soon as possible.
            </p>

            <form ref={form} onSubmit={sendEmail}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input name="user_name" type="text" placeholder="Your Name" className="input input-bordered w-full text-black" required />
                    <input name="user_email" type="email" placeholder="Your Email" className="input input-bordered w-full text-black" required />
                </div>

                <div className="mt-4">
                    <input name="subject" type="text" placeholder="Your Subject" className="input input-bordered w-full text-black" required />
                </div>

                <div className="mt-4">
                    <textarea name="message" placeholder="Your Message" className="textarea textarea-bordered w-full text-black h-24" rows="6" required></textarea>
                </div>

                <div className="mt-4 text-[#1c082b]">
                    <label className="label cursor-pointer">
                        <span className="label-text">
                            By signing and clicking Submit, you affirm you have read and agree to the Privacy Policy and Terms of Use and want to receive news.
                        </span>
                    </label>
                </div>

                <div className="mt-4">
                    <CustomizeButton text={'Submit'} />
                </div>
            </form>
        </div>
    );
};

export default Support;
