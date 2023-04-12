import { Container, Row, Col, Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';
import SweetlyDental from '../app/assets/img/sweetlydental.png';
import ComputerSVG from '../app/assets/img/computer.svg';
import GitHubSVG from '../app/assets/img/github.svg';
import Blackjack from '../app/assets/img/blackjack.png';
import YouTubeSVG from '../app/assets/img/youtube.svg';

const ProjectDemoCards = () => {
    return (
        <Container className='mb-5'>
            <Row>
                <Col className='col-md-6'>
                    <h2 class='text-white'>Dental Website:</h2>
                    <Card style={{ borderWidth: 0 }}>
                        <CardImg className='projects-card-img' varient="top" src={SweetlyDental} />
                        <CardBody className='project-cards'>
                            <CardTitle className='text-white'>SweetlyDental</CardTitle>
                            <CardText>
                                {'SweetlyDental is a fullstack website designed for a dentistry to promote their business and allows their patients/potential patients to easily setup an appointment. This application was built with MERN stack (MongoDB, Express, React, and Node.js) and deployed with AWS'}
                            </CardText>
                        </CardBody>
                        <div className='projects-button-container d-flex justify-content-center align-items-center justify-content-evenly'>
                            <a href='http://sweetlydental.com' target='_blank' rel='noopener'>
                                <img className='projects-button' src={ComputerSVG} alt='Computer icon' />
                            </a>
                            <a color='primary' outline href='https://github.com/Peterhyh/dental-website' target='_blank' rel='noopener'>
                                <img className='projects-button' src={GitHubSVG} alt='GitHub icon' />
                            </a>
                        </div>
                    </Card>
                </Col>
                <Col className='col-md-6'>
                    <h2 class='text-white'>Blackjack CLI Game:</h2>
                    <Card style={{ borderWidth: 0 }}>
                        <CardImg className='projects-card-img' varient="top" src={Blackjack} />
                        <CardBody className='project-cards'>
                            <CardTitle className='text-white'>Blackjack CLI Game</CardTitle>
                            <CardText>
                                {'Blackjack CLI game was created using Python'}
                            </CardText>
                        </CardBody>
                        <div className='projects-button-container d-flex justify-content-center align-items-center justify-content-evenly'>
                            <a href='https://www.youtube.com/watch?v=_VLc779betI&ab_channel=PeterHuynh' target='_blank' rel='noopener'>
                                <img className='projects-button' src={YouTubeSVG} alt='Computer icon' />
                            </a>
                            <a color='primary' outline href='https://github.com/Peterhyh/BlackJack' target='_blank' rel='noopener'>
                                <img className='projects-button' src={GitHubSVG} alt='GitHub icon' />
                            </a>
                        </div>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
};

export default ProjectDemoCards;