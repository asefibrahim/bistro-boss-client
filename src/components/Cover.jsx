import React from 'react';
import { Parallax, Background } from 'react-parallax'
const Cover = ({ img, title, subtitle }) => {
    return (


        <Parallax
            blur={{ min: -55, max: 50 }}
            bgImage={img}
            bgImageAlt="the dog"
            strength={-200}
        >
            <div className="hero h-[600px]" >
                <div className="hero-overlay  bg-opacity-40"></div>
                <div className="hero-content text-center text-neutral-content ">
                    <div className="md:max-w-5xl mt-12  bg-opacity-50 bg-black py-28 px-48">
                        <h1 className="mb-5 text-2xl sm:text-5xl font-semibold uppercase">

                            {title}
                        </h1>

                        <p className='mt-6'>{subtitle}</p>
                    </div>
                </div>
            </div>
        </Parallax>

    );
};

export default Cover;