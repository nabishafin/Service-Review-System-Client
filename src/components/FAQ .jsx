// src/components/FAQ.js
import React, { useState } from 'react';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAnswer = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqData = [
        {
            question: "What services do you offer?",
            answer: "We offer a range of services including web development, design, and digital marketing."
        },
        {
            question: "How can I contact support?",
            answer: "You can contact our support team via the Contact page or by emailing support@example.com."
        },
        {
            question: "Do you offer custom solutions?",
            answer: "Yes, we offer custom solutions tailored to your business needs. Please reach out to discuss further."
        },
        {
            question: "What are your pricing plans?",
            answer: "Pricing varies depending on the service. Please refer to our Pricing page for more details."
        }
    ];

    return (
        <div className="py-10 bg-gray-50">
            <h2 className="text-2xl font-bold text-center md:text-4xl mb-5">Frequently Asked Questions</h2>
            <div className="max-w-4xl mx-auto space-y-4">
                {faqData.map((item, index) => (
                    <div key={index} className="collapse collapse-plus border border-base-300 rounded-lg">
                        <input
                            type="checkbox"
                            className="peer"
                            onClick={() => toggleAnswer(index)}
                        />
                        <div className="collapse-title text-xl font-medium bg-base-200 text-black peer-checked:bg-primary peer-checked:text-white transition-colors duration-300">
                            {item.question}
                        </div>
                        <div className={`collapse-content ${activeIndex === index ? 'block' : 'hidden'}`}>
                            <p className="text-gray-700">{item.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;
