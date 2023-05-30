import React from 'react';
import SectionTitle from '../../../../components/sectionTitle';
import img from '../../../../assets/home/featured.jpg'
import './Reatured.css'

const Featured = () => {
    return (
        <div className='backgroundImage bg-fixed  w-4/5 mx-auto' >

            <div className='bg-slate-800 bg-opacity-40 text-white pt-5 pb-5'>
                <SectionTitle
                    subheading="Check it out"
                    heading="Featured Item"></SectionTitle>
            </div>
            <div className='lg:flex  px-16 items-center gap-10 py-16 pb-28 bg-slate-800 bg-opacity-40'>
                <div>
                    <img src={img} alt="" />
                </div>
                <div className='space-y-4 text-white '>
                    <p className='font-semibold'>March 20, 2023</p>
                    <p className='font-semibold'>WHERE CAN I GET SOME?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa harum aperiam magni modi enim, a minus nobis, delectus magnam, voluptatem doloribus. Quia quam eveniet quidem, architecto ipsam corrupti obcaecati? Sapiente!</p>
                    <button className='btn btn-outline border-0 border-b-4 border-black text-white'>Order Now</button>
                </div>
            </div>

        </div>
    );
};

export default Featured;