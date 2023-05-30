import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import slider1 from '../../../assets/home/slide1.jpg'
import slider2 from '../../../assets/home/slide2.jpg'
import slider3 from '../../../assets/home/slide3.jpg'
import slider4 from '../../../assets/home/slide4.jpg'
import SectionTitle from '../../../components/SectionTitle';



const Category = () => {
    return (
        <div className='w-4/5 mx-auto'>

            <SectionTitle subheading={'From 11.00am to 10.00pm '}
                heading={'Order Online'}
            >

            </SectionTitle>

            <Swiper
                slidesPerView={4}
                centeredSlides={true}
                spaceBetween={20}
                grabCursor={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={slider1} alt="" />
                    <h1 className='text-3xl text-white -m-16 text-center uppercase'>Salad</h1>


                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider2} alt="" />
                    <h1 className='text-3xl text-white -m-16 text-center uppercase'>Soups</h1>

                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider3} alt="" />
                    <h1 className='text-3xl text-white -m-16 text-center uppercase'>Pizza</h1>

                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider4} alt="" />
                    <h1 className='text-3xl text-white -m-16 text-center uppercase'>Cakes</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider1} alt="" />


                </SwiperSlide>


            </Swiper>
        </div>
    );
};

export default Category;