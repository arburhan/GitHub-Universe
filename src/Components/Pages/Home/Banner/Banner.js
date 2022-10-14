import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';

const Banner = () => {
    return (
        <section className='bannerSection' >
            <div>
                <div className='bannerText' >
                    <h1 className='font-extrabold ' >Let's build from here</h1>
                    <p className='text-[22px] text-white py-10'>Join us for GitHub's global developer event for cloud, security, community, and AI. Experience it virtually right here or live from the Yerba Buena Center for the Arts in San Francisco on November 9—10.</p>
                    <Link to='' className="bg-white text-black normal-case px-[18px] py-[12px] text-[16px] font-bold rounded">Register Now</Link >
                </div>
            </div>
        </section>
    );
};

export default Banner;