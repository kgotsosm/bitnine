import React from 'react';
import LogCard from '../components/LogCard';

export default function Hero() {
    return (
        <div className="grid sm:grid-cols-2 md:bg-background bg-white h-screen gap-1">
            <div className="px-10 my-auto ">
                <h1 className='hidden md:block text-titleText md:text-4xl lg:text-6xl  font-semibold'>
                    Expansion and innovation of <span className="text-emphasize">graph technology</span> through continuous research and development
                </h1>
            </div>
            <div className="flex items-center justify-center bg-white w-full">
                <LogCard />
            </div>
        </div>
    );
}
