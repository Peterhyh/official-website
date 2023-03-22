import { Container, Row, Col } from 'reactstrap';
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
    return (
        <footer className='site-footer'>
            <Container>
                <Row>
                    <Col className='footer-social d-flex justify-content-center m-1'>
                        <h5>Social</h5>
                    </Col>
                </Row>
                <Row>
                    <Col className='d-flex justify-content-center'>

                        <SocialIcon className='m-1' network='instagram' url='http://instagram.com/Peterhyh' bgColor='white' />

                        <SocialIcon className='m-1' network='linkedin' url='https://www.linkedin.com/in/peterhyh/' bgColor='white' />

                        <SocialIcon className='m-1' network='twitter' url='https://twitter.com/CodingNeatPete' bgColor='white' />

                        <SocialIcon className='m-1' network='youtube' url='https://www.youtube.com/channel/UC5196UiG5Nl8Y2hJBCk9xJQ' bgColor='white' />

                    </Col>
                </Row>
                <Row >
                    <Col className='d-flex justify-content-center mt-3'>
                        <h7>Developed by Peter Huynh</h7>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
};

export default Footer;