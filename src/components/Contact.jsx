import React from 'react';

const Contact = () => {
    return (
        <div className="container mx-auto p-8 bg-white text-gray-800 rounded-lg shadow-xl max-w-md">
            {/* Contact Information Section */}
            <div className="text-center">
                <h3 className="text-2xl text-[#1c082b] font-semibold mb-4">Contact Info</h3>
                <div className="space-y-4">
                    <p className="text-lg">
                        <span className="font-semibold">Email:</span>
                        <a href="mailto:support@serviceandreview.com" className="text-blue-500 hover:text-blue-700">support@serviceandreview.com</a>
                    </p>
                    <p className="text-lg">
                        <span className="font-semibold">Phone:</span>
                        <span className="text-blue-500 hover:text-blue-700">+123 456 7890</span>
                    </p>
                    <p className="text-lg">
                        <span className="font-semibold">Address:</span>
                        123 Service Street, Suite 100, City, Country
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Contact;
