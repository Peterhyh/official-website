import { Parallax } from 'react-scroll-parallax';
import './contact.css';
import EMAIL from '../../../app/assets/img/email.svg';
import GITHUB from '../../../app/assets/img/github.svg';
import LINKEDIN from '../../../app/assets/img/linkedin.svg';
import INSTAGRAM from '../../../app/assets/img/instagram.svg';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';


const Contact = () => {

    const [showIcons, setShowIcons] = useState(false);

    const iconRef = useRef();

    const icons = [
        { id: 0, img: EMAIL, link: 'mailto:peterhuynh@peterhyh.com' },
        { id: 1, img: GITHUB, link: 'https://github.com/Peterhyh' },
        { id: 2, img: LINKEDIN, link: 'https://www.linkedin.com/in/peterhyh/' },
        { id: 3, img: INSTAGRAM, link: 'https://www.instagram.com/peterhyh/?hl=en' },
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            const entry = entries[0];
            if (entry.isIntersecting) {
                setShowIcons(true);
            } else {
                return null;
            };
        }, {
            threshold: 0.2,
        });
        observer.observe(iconRef.current);
    }, []);

    return (
        <div className='contactContainer' ref={iconRef}>
            <Parallax translateX={['1000px', '-300px']}>
                <p className='certificate-title'>CONTACTS</p>
            </Parallax>
            <div className='contactIconsContainer'>
                {showIcons
                    ? icons.map((icon, i) => {
                        return (
                            <motion.div
                                key={icon.id}
                                animate={{
                                    scale: [1, 2, 1],
                                    rotate: [0, 0, 360],
                                    borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                                }}
                                transition={{
                                    duration: 1,
                                    delay: i * 0.1
                                }}
                            >
                                <a href={icon.link} target='_blank' rel='noopener'>
                                    <img src={icon.img} alt='' />
                                </a>
                            </motion.div>
                        );
                    }) : ''
                }
            </div>
        </div>
    )
};

export default Contact;