import './AboutMe.css';
import { Parallax } from 'react-scroll-parallax';
import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

const AboutMe = () => {
    const [showAboutMe, setShowAboutMe] = useState(false);

    const aboutMeRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            if (entry.isIntersecting) {
                setShowAboutMe(true);
            } else {
                return null
            };
        }, {
            threshold: 1
        })
        observer.observe(aboutMeRef.current);
    }, []);

    return (

        <div className='bio-container'>
            <Parallax translateX={['-1000px', '300px']}>
                <p className='bioTitle'>ABOUT ME</p>
            </Parallax>
            <div ref={aboutMeRef}>
                {
                    showAboutMe
                        ?
                        <motion.div
                            initial={{ translateX: 1000, opacity: 0, skewX: 50 }}
                            animate={{ translateX: 0, opacity: 1, skewX: 0 }}
                            transition={{ duration: 1.5 }}
                        >
                            <p className='about-me-description' >
                                A full stack developer with a great passion for coding and building the best user experience.
                                I also enjoy automotives, 3D printing, building gaming PC's, and programming with Arduino.
                                I love discovering how something works and being able to replicate/build it myself and eventually
                                make it better than the original. My favorite part about the learning process is discovering
                                an original idea of my own along the way.
                            </p>
                        </motion.div>
                        : null
                }

            </div>

        </div >
    )

}

export default AboutMe;


