import './Skills.css';
import { Parallax } from 'react-scroll-parallax';
import { useEffect, useState, useRef } from 'react';
import { motion, useAnimate, usePresence } from 'framer-motion';
import HTML from '../../../app/assets/img/html.svg';
import CSS from '../../../app/assets/img/css.svg';
import REACT from '../../../app/assets/img/react.svg';
import JS from '../../../app/assets/img/javascript.svg';
import DOCKER from '../../../app/assets/img/docker.svg';
import EXPRESS from '../../../app/assets/img/express.svg';
import GITHUB from '../../../app/assets/img/github.svg';
import MONGO from '../../../app/assets/img/mongodb.svg';
import GIT from '../../../app/assets/img/git.svg';
import PYTHON from '../../../app/assets/img/python.svg';

const Skills = () => {

    const skillRef = useRef();

    const [isPresence, safeToRemove] = usePresence();
    const [scope, animate] = useAnimate();

    useEffect(() => {
        if (isPresence) {
            const enterAnimation = async () => {
                await animate('img', { opacity: [0, 1] }, { duration: 0.5, delay: 0.2 })
            };
            enterAnimation();
        } else {
            const exitAnimation = async () => {
                await animate('img', { opacity: [1, 0] }, { duration: 0.5, delay: 0.2 })
                safeToRemove();
            };
            exitAnimation();
        }
    }, []);


    return (
        <div className='skill-container'>
            <Parallax translateX={['1000px', '-300px']} >
                <p className='skills-title'>SKILLS</p>
            </Parallax>
            {/* <div className={`${isIntersecting ? 'slideSkillIconContainerRight' : 'hideSlideSkillIconContainerRight'}`} ref={skillRef}> */}

            <div className='skillIconContainer' ref={scope}>

                <img className='skillIcon' src={HTML} alt='HTML' />

                <img className='skillIcon' src={CSS} alt='CSS' />

                <img className='skillIcon' src={REACT} alt='REACT' />

                <img className='skillIcon' src={JS} alt='JavaScript' />

                <img className='skillIcon' src={DOCKER} alt='DOCKER' />

                <img className='skillIcon' src={EXPRESS} alt='EXPRESS' />

                <img className='skillIcon' src={GITHUB} alt='GITHUB' />

                <img className='skillIcon' src={MONGO} alt='MONGO' />

                <img className='skillIcon' src={GIT} alt='GIT' />

                <img className='skillIcon' src={PYTHON} alt='PYTHON' />

            </div>
        </div>
    )
};

export default Skills;