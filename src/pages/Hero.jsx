import React from 'react'
import Auth from '../components/Login'

export default function Hero() {
    return (
        <>
        <div className="grid sm:grid-cols-2 h-screen md:bg-background bg-white px-4 gap-1">
                <div className="px-10 my-auto">
                    <h1 className='hidden md:block  text-titleText md:text-5xl lg:text-6xl py-10 lg:py-20 font-semibold'>
                    Expansion and innovation of <span className="text-emphasise"> graph technology</span> through continuous research and development
                    </h1>
                </div>
            <div className="bg-white m-right-0 p-10 w-full">
                <Auth />
            </div>
        </div>
        </>
    )
}