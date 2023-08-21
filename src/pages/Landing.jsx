import React from 'react';
import LogCard from '../components/LogCard';

export default function Landing() {
    return (
        <div className="grid sm:grid-cols-2 md:bg-[#0A192F] bg-white h-screen">
            <div className="px-10 my-auto ">
                <h1 className='hidden md:block text-[rgb(204,214,246)] md:text-4xl lg:text-6xl  font-semibold'>
                    Expansion and innovation of <span className="text-[#48B9A5]">graph technology</span> through continuous research and development
                </h1>
            </div>
            <div className="flex items-center justify-center md:bg-white w-full">
                <LogCard />
            </div>
        </div>
    );
}
