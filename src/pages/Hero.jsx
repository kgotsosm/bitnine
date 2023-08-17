import React from 'react'
import Auth from '../components/Auth'
import { hero } from './data.js'

export default function Hero() {
    const { description} = hero
    return (
        <>
        <div className="grid sm:grid-cols-2 h-screen bg-background px-4">
            <div className="bg-background">
                <div className="mx-10 my-auto">
                    <h1 className='hidden md:block  text-titleText md:text-5xl lg:text-6xl py-10 lg:py-20 font-semibold'>
                    {description}
                    </h1>
                </div>
            </div>
            <div className="">
                <Auth />
            </div>
        </div>
        </>
    )
}