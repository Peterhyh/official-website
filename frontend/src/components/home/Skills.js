import { Container, Row, Col, Card, CardHeader, CardBody } from 'reactstrap';

const Skills = () => {
    return (
        <Container>

            <Row className='p-5'>
                <Col className='d-flex justify-content-center'>
                    <h1 className='skills-title'>Skills</h1>
                </Col>
            </Row>

            <Row>
                <Col md='4'>
                    <Card className='bg-dark'>
                        <CardHeader className='text-white bg-dark'>Frontend</CardHeader>
                        <CardBody className='skills-cardbody d-flex justify-content-center align-items-center'>
                            <div>
                                <dl>
                                    <dt>HTML</dt>
                                    <dt>CSS</dt>
                                    <dt>JavaScript</dt>
                                    <dt>React</dt>
                                    <dt>React Native</dt>
                                </dl>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col md='4'>
                    <Card className='bg-dark'>
                        <CardHeader className='text-white'>Backend</CardHeader>
                        <CardBody className='skills-cardbody d-flex justify-content-center align-items-center'>
                            <div>
                                <dl>
                                    <dt>Python</dt>
                                    <dt>SQL</dt>
                                    <dt>NoSQL</dt>
                                    <dt>Postgres</dt>
                                    <dt>MongoDB</dt>
                                    <dt>Django</dt>
                                    <dt>Flask</dt>
                                    <dt>NodeJS</dt>
                                    <dt>Express</dt>
                                    <dt>Mongoose</dt>
                                    <dt>REST API</dt>
                                </dl>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col md='4'>
                    <Card className='bg-dark'>
                        <CardHeader className='text-white'>Others</CardHeader>
                        <CardBody className='skills-cardbody d-flex justify-content-center align-items-center'>
                            <div>
                                <dl>
                                    <dt>GitHub</dt>
                                    <dt>Git</dt>
                                    <dt>Docker</dt>
                                    <dt>Docker-Compose</dt>
                                    <dt>Docker Hub</dt>
                                    <dt>Postman</dt>
                                    <dt>Insomnia</dt>
                                    <dt>Studio 3T</dt>
                                    <dt>Android Studio</dt>
                                    <dt>VS Code</dt>
                                    <dt>AWS</dt>
                                    <dt>DevOps</dt>
                                </dl>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <Row className='row-content'>

            </Row>
        </Container>
    )
};

export default Skills;