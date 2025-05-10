import React from 'react';

const CustomizeButton = ({ text }) => {
    return (
        <div>
            <button className="px-6 py-2 bg-blue-950 text-white rounded-lg shadow-md hover:bg-blue-900 transition duration-200">
                {text}
            </button>
        </div>
    );
};

export default CustomizeButton;