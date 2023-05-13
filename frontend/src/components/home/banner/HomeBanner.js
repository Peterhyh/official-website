import React from "react";
import { Parallax } from "react-parallax";
import banner from '../../../app/assets/img/sunset.jpg';
import { useSpring, animated } from 'react-spring';
import { useEffect, useState } from 'react';
import './Banner.css';



const HomeBanner = () => {
    const [toggle, setToggle] = useState(false);

    const fade = useSpring({
        opacity: toggle ? 1 : 0,
        transition: toggle ? 'scale(1,1)' : 'scale(0,0)',
        config: { duration: 1000 }
    });

    useEffect(() => {
        setToggle(true);
    }, []);

    return (

        <animated.div style={fade}>
            <Parallax md='7' strength={300} bgImage={banner}>
                <div className='content d-flex justify-content-center align-items-center'>
                    <div className='banner-title'>
                        <p className='banner-name'>PETER HUYNH</p>
                        <p className='banner-description'>FULL STACK DEVELOPER </p>
                    </div>
                </div>
            </Parallax>
        </animated.div>

    )
};

export default HomeBanner;