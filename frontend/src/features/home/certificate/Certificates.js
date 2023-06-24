import FS from '../../../app/assets/img/honorFullStack.png';
import BE from '../../../app/assets/img/backend.png';
import { useState, useEffect, useRef } from 'react';
import './Certificates.css';
import { Parallax } from 'react-scroll-parallax';
import { motion } from 'framer-motion';



const Certificates = () => {

    const [showCertificates, setShowCertificates] = useState();

    const certificateRef = useRef();

    const certificates = [
        { id: 0, img: FS, alt: 'Full Stack Honor Certificate', title: 'Honors Certificate in Full Stack Web and Mobile Development', subTitle: 'Bootstrap | React | React Native | NodeJS | Express | MongoDB | Mongoose | Javascript | HTML | CSS' },
        { id: 1, img: BE, alt: 'Backend Honor Certificate', title: 'Honors Certificate in Backend, SQL and DevOps with Python Bootcamp', subTitle: 'Python | Postgres | DevOps | AWS' },
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            const entry = entries[0];
            if (entry.isIntersecting) {
                setShowCertificates(true);
            } else {
                return null;
            };
        }, {
            threshold: 0.2
        });
        observer.observe(certificateRef.current);
    }, []);

    return (
        <div className='certificate-container' ref={certificateRef}>
            <Parallax translateX={['1000px', '-300px']}>
                <p className='certificate-title'>CERTIFICATES</p>
            </Parallax>

            {showCertificates
                ?
                (certificates.map((certificate, i) => {
                    return (
                        <div className='certficiate-content' key={certificate.id}>
                            <motion.div initial={{ translateX: -700, opacity: 0 }} animate={{ translateX: 0, opacity: 1 }} transition={{ duration: 1.5, delay: i * 1.5 }}>
                                <img src={certificate.img} alt={certificate.alt} />
                            </motion.div>
                            <div className='certifcate-titles-container'>
                                <motion.div initial={{ translateX: 200, opacity: 0 }} animate={{ translateX: 0, opacity: 1 }} transition={{ duration: 1, delay: i * 1.5 }}>
                                    <h1>{certificate.title}</h1>
                                </motion.div>
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2, delay: i * 2 }}>
                                    <h3>{certificate.subTitle}</h3>
                                </motion.div>
                            </div>
                        </div>
                    );
                })) : ''
            }
        </div >
    )
};

export default Certificates;