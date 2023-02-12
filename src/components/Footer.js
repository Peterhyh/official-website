import { Container, Row, Col } from 'reactstrap';

const Footer = () => {
    return (
        <footer className='site-footer'>
            <Container>
                <Row className='text-center'>
                    <Col xs='4' sm='4' className='left-footer'>

                        <h5>Social</h5>
                        <a
                            className='btn btn-social-icon btn-instagram'
                            href='http://instagram.com/Peterhyh'
                        >
                            <i className='fa fa-instagram' />
                        </a>

                        <a
                            className='btn btn-social-icon btn-linkedin'
                            href='https://www.linkedin.com/in/peterhyh/'
                        >
                            <i className='fa fa-linkedin' />
                        </a>

                        <a
                            className='btn btn-social-icon btn-twitter'
                            href='https://twitter.com/CodingNeatPete'
                        >
                            <i className='fa fa-twitter' />
                        </a>

                        <a
                            className='btn btn-social-icon btn-google'
                            href='https://www.youtube.com/channel/UC5196UiG5Nl8Y2hJBCk9xJQ'
                        >
                            <i className='fa fa-youtube' />
                        </a>
                    </Col>
                    <Col className='middle-footer mt-5' xs='4' sm='4'>
                        <h7>Developed by Peter Huynh</h7>
                    </Col>
                    <Col xs='4' sm='4'>
                        <a
                            role='button'
                            className='btn btn-link'
                            href='tel:+12065551234'
                        >
                            <i className='fa fa-phone' /> 469-831-9568
                        </a>
                        <br />
                        <a
                            role='button'
                            className='btn btn-link'
                            href='mailto:notreal@notreal.co'
                        >
                            <i className='fa fa-envelope-o' /> Peterhyh@yahoo.com
                        </a>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
};

export default Footer;