import FS from '../../../app/assets/img/honorFullStack.png';
import BE from '../../../app/assets/img/backend.png';
import { useState } from 'react';
import Modal from './Modal';
import './Certificates.css';




const Certificates = () => {

    const [openFullStackModal, setOpenFullStackModal] = useState(false);

    return (
        <div className='certificate-container'>
            <h1 className='certificate-title'>CERTIFICATES</h1>
            <div className='certificate-row'>
                <div className='certficiate'>
                    <img onClick={() => setOpenFullStackModal(!openFullStackModal)} className='honor-certificate' src={FS} alt='Full Stack Honor Certificate' />
                </div>
                <div className='certficiate'>
                    <img className='honor-certificate' src={BE} alt='Backend Honor Certificate' />
                </div>
            </div>
            <Modal openFullStackModal={openFullStackModal} >
                Fancy
            </Modal>
        </div>
    )
};

export default Certificates;

