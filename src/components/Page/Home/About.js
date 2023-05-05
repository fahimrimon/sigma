import React from 'react';

const About = () => {
    return (
        <div className='m-2 bg-white rounded-[8px] p-[16px]'>
            <h1 className='text-center text-[20px] font-bold'>About us</h1>
            <p className='text-[16px] mb-[8px] text-center font-semibold'>We are at our best</p>
            <p className='text-[13px] px-[12px] text-blue-500'>Cloud mining offered a potentially cost-effective way of mining for Bitcoins and other cryptocurrencies. At the same time, both Quantitative trading and DeFi technology will allow you to easily participate in blockchain transactions with a small amount of capital, and obtain stable income like insurance.</p>
            <img className='w-[72%] mt-[12px] mb-[16px] mx-auto' src="https://i.ibb.co/T8CRVNV/about.png" alt="about" />
        </div>
    );
};

export default About;