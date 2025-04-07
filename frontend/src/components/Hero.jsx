import React from 'react'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
    useEffect(() => {
        AOS.init({
            duration: 500,
            easing: 'ease-in-out',
            once: true,
        });
    }, []);
    return (
        <section className="relative h-screen flex items-center ">
            <div className="absolute inset-0 z-0 rounded-md overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80"
                    alt="Modern building"
                    className="w-full h-full p-2 object-cover rounded-3xl "
                />
            </div>

            <div className="container absolute bottom-52 left-1/2 transform -translate-x-1/2 z-10">
                <div className="max-w-full mx-auto text-center">

                    <h1 data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom"
                        data-aos-delay="200"
                        className="text-7xl font-bold mb-2 text-white  " style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)' }}> Designing house and Experiences
                    </h1>
                    
                    <p data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom"
                        data-aos-delay="400"
                        className="text-6xl pb-5 font-bold mb-2 bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]">
                        Worth Remembering
                    </p>
                    
                    <button
                        data-aos="fade-up"
                        data-aos-delay="600"
                        className="mt-6 w-52 text-white bg-black border-2 border-white mx-2 px-8 py-3 rounded-full transition-transform transform hover:scale-105 hover:bg-white hover:text-black">
                        Explore
                    </button>

                    <button
                        data-aos="fade-up"
                        data-aos-delay="800"
                        className="mt-6 w-52 text-black bg-white border-2 border-black px-8 py-3 rounded-full transition-transform transform hover:scale-105 hover:bg-black hover:text-white">
                        Book now
                    </button>
                </div>
            </div>

        </section>
    )
}

export default Hero