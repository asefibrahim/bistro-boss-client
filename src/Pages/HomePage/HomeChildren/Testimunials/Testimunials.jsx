import React, { useEffect, useState } from 'react';

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";



// import required modules
import { Navigation } from "swiper";
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
import SectionTitle from '../../../../components/SectionTitle';

const Testimonials = () => {

    const [reviews, setReview] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])

    return (
        <div>
            <div>
                <SectionTitle

                    heading={"Testimonials"}
                    subheading={"What our client say"}
                ></SectionTitle>
            </div>


            <div className='w-4/5 mx-auto'>

                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">


                    {
                        reviews.map(review => <SwiperSlide key={review._id}>

                            <div className='w-9/12 mx-auto text-center flex flex-col items-center space-y-6 mb-12'>
                                <p >
                                    <Rating

                                        style={{ maxWidth: 180 }}
                                        value={review.rating}
                                        readOnly
                                    />
                                </p>

                                <p>{review.details}</p>
                                <p className='text-3xl font-semibold text-yellow-500 mt-5 mb-12'>{review.name}</p>
                            </div>

                        </SwiperSlide>)
                    }

                </Swiper>

            </div>



        </div>
    );
};

export default Testimonials;