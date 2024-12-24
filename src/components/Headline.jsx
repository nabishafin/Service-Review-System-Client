import React from 'react';

const Headline = ({ tittle, description }) => {
    return (
        <div className='my-3'>
            <h1 className='text-2xl font-bold text-center md:text-4xl'>{tittle}</h1>
            <p className='text-center text-gray'>{description}</p>
        </div>
    );
};

export default Headline;