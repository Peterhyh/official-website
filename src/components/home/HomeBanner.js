import React from "react";
import { Parallax } from "react-parallax";
import banner from '../../app/assets/img/sunset.jpg';
import { useSpring, animated } from 'react-spring';
import { useEffect, useState } from 'react';


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
            <Parallax strength={200} blur={{ min: -15, max: 15 }} bgImage={banner}>
                <div className='content'>
                    <div className='text-content'></div>
                </div>
            </Parallax>
        </animated.div>
    )
};

export default HomeBanner;