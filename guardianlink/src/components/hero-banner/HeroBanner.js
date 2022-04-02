import React from 'react';
import { Carousel } from './Carousel';
import { ReactVideo } from './ReactVideo';

export const HeroBanner = () => {
    return (
        <div className='hero-banner__wrap'>
            <ReactVideo />
            <Carousel/>
        </div>
    )
}