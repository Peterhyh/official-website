import FS from '../../../app/assets/img/honorFullStack.png';
import BE from '../../../app/assets/img/backend.png';
import { useState } from 'react';
import './Certificates.css';
import { Parallax } from 'react-scroll-parallax';




const Certificates = () => {

    const [openFullStackModal, setOpenFullStackModal] = useState(false);

    return (
        <div className='certificate-container'>
            <Parallax translateX={['1000px', '-300px']}>
                <p className='certificate-title'>CERTIFICATES</p>
            </Parallax>
            <div className='certificate-row'>
                <div className='certficiate'>
                    <img onClick={() => setOpenFullStackModal(!openFullStackModal)} className='honor-certificate' src={FS} alt='Full Stack Honor Certificate' />
                </div>
                <div className='certficiate'>
                    <img className='honor-certificate' src={BE} alt='Backend Honor Certificate' />
                </div>
            </div>
        </div>
    )
};

export default Certificates;

