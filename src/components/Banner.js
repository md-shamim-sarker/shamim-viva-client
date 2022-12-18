import React from 'react';
import banner from '../assets/banner.jpg';

const Banner = () => {
    return (
        <div className="px-2 lg:px-10 -mt-8 mb-20">
            <div className="flex flex-col mx-auto overflow-hidden rounded">
                <img src={banner} alt="..." className="w-full h-[40vh] lg:h-[60vh]" />
                <div className="w-full lg:w-4/5 mx-auto lg:-mt-12 bg-blue-800 text-gray-100 p-10 lg:p-16 text-center">
                    <div className="space-y-2">
                        <h2 className="inline-block text-2xl font-semibold sm:text-3xl">The Best Activewear from the Nordstrom Anniversary Sale</h2>
                        <div className="text-xs">By
                            <p className="text-xs hover:underline">Leroy Jenkins</p>
                        </div>
                    </div>
                    <div className="text-gray-100">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, maxime saepe? </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;