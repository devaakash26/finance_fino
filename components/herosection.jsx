"use client";

import Link from 'next/link'
import React, { useEffect, useRef } from 'react'
import { Button } from './ui/button'
import Image from 'next/image';

const HeroSection = () => {
    const image = useRef();

    useEffect(()=>{
        const imageElement = image.current;
        
        const handleScroll = ()=>{
            const scrollPosition = window.scrollY;
            const scrollThreshold = 100;

            if(scrollPosition > scrollThreshold)
            {
                imageElement.classList.add("scrolled");
            }
            else{
                imageElement.classList.remove("scrolled");
            }
        };
        window.addEventListener("scroll", handleScroll);
        return ()=> window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <div className='px-4 pb-20 sm:mt-3'>
            <div className='container mx-auto text-center'>
                <h1 className='text-5xl md:text-8xl lg:text-[105px] pb-6 gradient-title'> Empower Your Finances <br /> with Intelligence</h1>
                <p className='text-sm text-gray-600 dark:text-gray-300 mb-8 max-w-2xl md:text-xl mx-auto'>
                    An AI-powered financial management platform that helps you track, analyze, and optimize your spending with real-time insights.
                </p>
                <div className='flex justify-center space-x-4'>
                    <Link href={"/dashboard"}>
                        <Button size="lg" className="px-8"> Get Started</Button>
                    </Link>
                    <Link href={"/"}>
                        <Button size="lg" variant="outline" className="px-8">Watch Demo </Button>
                    </Link>
                </div>
                <div className='hero-image-wrapper'>
                    <div ref={image} className='hero-image'>
                        <Image src={"/banner.jpeg"} alt='banner-fino' height={720} width={1280} priority className='rounded-lg shadow-2xl border dark:border-gray-700 mx-auto' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection