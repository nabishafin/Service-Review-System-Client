import React from 'react';

const Headline = ({ tittle, description }) => {
    return (
        <div className=''>
            <h1 className='text-2xl font-bold text-center md:text-4xl dark:text-black'>{tittle}</h1>
            <p className='text-center text-gray p-2 dark:text-black'>{description}</p>
        </div>
    );
};

export default Headline;