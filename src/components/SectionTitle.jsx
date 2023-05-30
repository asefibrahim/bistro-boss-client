import React from 'react';

const SectionTitle = ({ heading, subheading }) => {
    return (
        <div className='md:w-4/12 mx-auto text-center mt-6'>
            <p className='text-yellow-400  mb-3'>----  {subheading}  ----</p>
            <h1 className='text-4xl uppercase border-y-4 py-3 mb-12'>{heading}</h1>


        </div>
    );
};

export default SectionTitle;
