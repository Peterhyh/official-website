import './Skills.css';
import { Parallax } from 'react-scroll-parallax';
import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
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
import NODE from '../../../app/assets/img/nodejs.svg';

const Skills = () => {
    const [showIcons, setShowIcons] = useState();

    const iconRef = useRef();
    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            const entry = entries[0];
            if (entry.isIntersecting) {
                setShowIcons(true);
            } else {
                return null
            };
        }, {
            threshold: 0.2
        });
        observer.observe(iconRef.current);
    }, []);

    const skillItems = [
        { id: 1, title: 'HTML', img: HTML },
        { id: 2, title: 'CSS', img: CSS },
        { id: 3, title: 'React', img: REACT },
        { id: 4, title: 'JavaScript', img: JS },
        { id: 5, title: 'Docker', img: DOCKER },
        { id: 6, title: 'Express.js', img: EXPRESS },
        { id: 7, title: 'GitHub', img: GITHUB },
        { id: 8, title: 'MongoDB', img: MONGO },
        { id: 9, title: 'Git', img: GIT },
        { id: 10, title: 'Python', img: PYTHON },
        { id: 11, title: 'Node.js', img: NODE }
    ];

    return (
        <div className='skill-container'>
            <Parallax translateX={['1000px', '-300px']} >
                <p className='skills-title'>SKILLS</p>
            </Parallax>

            <div className='skillItemContainer' ref={iconRef}>
                {showIcons
                    ?
                    skillItems.map((skillItem, i) => (
                        <motion.div
                            className='skillItem'
                            key={skillItem.id}
                            initial={{ opacity: 0, translateX: -50, translateY: -50 }}
                            animate={{ opacity: 1, translateX: 0, translateY: 0 }}
                            transition={{ duration: 0.3, delay: i * 0.1 }}
                        >
                            <img className='skillIcon' src={skillItem.img} alt='' />
                            <h3 className='skillIconTitle'>{skillItem.title}</h3>
                        </motion.div>
                    ))
                    : ''
                }
            </div>

        </div>
    )
};

export default Skills;
