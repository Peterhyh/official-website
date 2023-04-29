import FS from '../../../app/assets/img/honorFullStack.png';
import BE from '../../../app/assets/img/backend.png';
import { useState } from 'react';
import Modal from './Modal';


// import python from '../../app/assets/img/python.png';
// import webDev from '../../app/assets/img/webDevFundamentals.png';
// import sql from '../../app/assets/img/sql.png';
// import devOps from '../../app/assets/img/devops.png';
// import BS from '../../app/assets/img/bootstrap.png';
// import react from '../../app/assets/img/react.png';
// import RN from '../../app/assets/img/reactNative.png';
// import mongo from '../../app/assets/img/mongodb.png';



const Certificates = () => {

    const [openFullStackModal, setOpenFullStackModal] = useState(false);

    return (
        <>
            <h1 className='certificate-title'>Certificates</h1>
            <div className='certificate-container'>
                <div className='certficiate'>
                    <img onClick={() => setOpenFullStackModal(!openFullStackModal)} className='honor-certificate' src={FS} alt='Full Stack Honor Certificate' />
                </div>
                <div className='certficiate'>
                    <img className='honor-certificate' src={BE} alt='Backend Honor Certificate' />
                </div>
                <Modal openFullStackModal={openFullStackModal} >
                    Fancy
                </Modal>
            </div>

        </>
    )
};

export default Certificates;

{/* <>
            <Container>
                <Row>
                    <Col className='certificates-section d-flex justify-content-center p-5'>
                        <h1 className='text-white'>Certificates</h1>
                    </Col>
                </Row>


                <Row className='d-flex justify-content-center'>
                    <Col className='d-flex justify-content-center m-3' md='4'>
                        <span>
                            <img className='honor-certificate' src={FS} alt='Full Stack Honor Certificate' />
                        </span>
                    </Col>
                    <Col className='d-flex justify-content-center m-3' md='4'>
                        <span>
                            <img className='honor-certificate' src={BE} alt='Backend Honor Certificate' />
                        </span>
                    </Col>
                </Row>


                <Row className='d-flex justify-content-center mt-4'>
                    <Col className='d-flex justify-content-center' md='3'>
                        <img className='fs-certificate' src={webDev} alt='Web Development Fundamentals Certificate' />
                    </Col>
                    <Col className='d-flex justify-content-center' md='3'>
                        <img className='fs-certificate' src={python} alt='Data Structure and Algorithms with Python Certificate' />
                    </Col>
                    <Col className='d-flex justify-content-center' md='3'>
                        <img className='fs-certificate' src={sql} alt='SQL and Data Modeling with Python Certificate' />
                    </Col>
                    <Col className='d-flex justify-content-center' md='3'>
                        <img className='fs-certificate' src={devOps} alt='Modern Software Engineering with DevOps Certificate' />
                    </Col>
                </Row>


                <Row className='d-flex justify-content-center mt-5 mb-5'>
                    <Col className='d-flex justify-content-center' md='3'>
                        <img className='fs-certificate' src={BS} alt='Front-End Web Development: Bootstrap' />
                    </Col>
                    <Col className='d-flex justify-content-center' md='3'>
                        <img className='fs-certificate' src={react} alt='Front-End Web Development: React' />
                    </Col>
                    <Col className='d-flex justify-content-center' md='3'>
                        <img className='fs-certificate' src={RN} alt='Front End Web and Mobile Development Bootcamp' />
                    </Col>
                    <Col className='d-flex justify-content-center' md='3'>
                        <img className='fs-certificate' src={mongo} alt='Back-End Development: NodeJS, Express, MongoDB' />
                    </Col>
                </Row>
            </Container>
        </> */}