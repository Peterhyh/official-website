import { Container, Row, Col } from 'reactstrap';
import FS from '../../app/assets/img/honorFullStack.png';
import BE from '../../app/assets/img/backend.png';
import python from '../../app/assets/img/python.png';
import webDev from '../../app/assets/img/webDevFundamentals.png';
import sql from '../../app/assets/img/sql.png';
import devOps from '../../app/assets/img/devops.png';
import BS from '../../app/assets/img/bootstrap.png';
import react from '../../app/assets/img/react.png';
import RN from '../../app/assets/img/reactNative.png';
import mongo from '../../app/assets/img/mongodb.png';
import { useInView } from 'react-intersection-observer';





const Certificates = () => {

    const { ref: leftRef, inView: showLeft } = useInView();
    const { ref: rightRef, inView: showRight } = useInView();
    const { ref: middleRef, inView: showMiddle } = useInView();
    return (
        <Container>
            <Row>
                <Col className='certificates-section d-flex justify-content-center mt-3'>
                    <h1>Certificates</h1>
                </Col>
            </Row>


            <Row className='d-flex justify-content-center'>
                <Col className='d-flex justify-content-center m-3' md='4'>
                    <span ref={leftRef}>
                        <img className={`${'honor-certificate'} ${showLeft ? 'animate-left' : 'honor-certificate'}`} src={FS} alt='Full Stack Honor Certificate' />
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
    )
};

export default Certificates;