import FS from '../../../app/assets/img/honorFullStack.png';
import BE from '../../../app/assets/img/backend.png';
import { useState } from 'react';
import './Certificates.css';
import { Parallax } from 'react-scroll-parallax';
import { motion } from 'framer-motion';



const Certificates = () => {

    const certificates = [
        { id: 0, img: FS, alt: 'Full Stack Honor Certificate', title: 'Honors Certificate in Full Stack Web and Mobile Development', subTitle: 'Bootstrap | React | React Native | NodeJS | Express | MongoDB | Mongoose | Javascript | HTML | CSS' },
        { id: 1, img: BE, alt: 'Backend Honor Certificate', title: 'Honors Certificate in Backend, SQL and DevOps with Python Bootcamp', subTitle: 'Python | Postgres | DevOps | AWS' },
    ]

    return (
        <div className='certificateContainer'>
            <Parallax translateX={['1000px', '-300px']}>
                <p className='certificate-title'>CERTIFICATES</p>
            </Parallax>

            <div className='certificateContents'>
                {certificates.map(certificate => {
                    return (
                        <div className='certficiateSection'>
                            <motion.div initial={{ translateX: -2000 }} animate={{ translateX: 0 }} transition={{ duration: 1.5, delay: 0.5 }}>
                                <img className='honor-certificate' src={certificate.img} alt={certificate.alt} />
                            </motion.div>
                            <motion.div initial={{ translateX: 2000 }} animate={{ translateX: 0 }} transition={{ duration: 1 }}>
                                <div className='certficiateDescription'>
                                    <h1>{certificate.title}</h1>
                                    <h3>{certificate.subTitle}</h3>
                                </div>
                            </motion.div>
                        </div>
                    );
                })}
            </div>

        </div>
    )
};

export default Certificates;