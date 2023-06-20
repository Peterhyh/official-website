import FS from '../../../app/assets/img/honorFullStack.png';
import BE from '../../../app/assets/img/backend.png';
import { useState } from 'react';
import './Certificates.css';
import { Parallax } from 'react-scroll-parallax';
import { motion } from 'framer-motion';



const Certificates = () => {

    const [openFullStackModal, setOpenFullStackModal] = useState(false);

    return (
        <div className='certificateContainer'>
            <Parallax translateX={['1000px', '-300px']}>
                <p className='certificate-title'>CERTIFICATES</p>
            </Parallax>
            <motion.div
                initial={{
                    translateX: 1000,
                }}
                animate={{
                    translateX: 0,
                    transitionDelay: 1,
                }}
            >
                <div className='certificateContents'>
                    <div className='certficiateSection'>
                        <img onClick={() => setOpenFullStackModal(!openFullStackModal)} className='honor-certificate' src={FS} alt='Full Stack Honor Certificate' />
                        <div className='certficiateDescription'>
                            <h1>Honors Certificate in Full Stack Web and Mobile Development</h1>
                            <h3>
                                Bootstrap | React | React Native | NodeJS | Express | MongoDB | Mongoose | Javascript | HTML | CSS
                            </h3>
                        </div>
                    </div>
                    <div className='certficiateSection'>
                        <img className='honor-certificate' src={BE} alt='Backend Honor Certificate' />
                        <div className='certficiateDescription'>
                            <h1>Honors Certificate in Backend, SQL and DevOps with Python Bootcamp</h1>
                            <h3>
                                Python | Postgres | DevOps | AWS
                            </h3>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
};

export default Certificates;

