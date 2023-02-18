import me from '../../app/assets/img/me.jpg';
import { Card, Col, Row, CardBody, CardTitle, CardText } from 'reactstrap';

const ProfileContent = () => {
    return (
        <Card className='about_me mt-5' style={{ backgroundColor: '#1E1E1EC4' }}>
            <CardBody className='p-5'>
                <Row className='d-flex align-items-center'>
                    <Col className='d-flex justify-content-center m-3' md='7'>
                        <Card className='profile_message border-5 border-dark p-4' style={{ backgroundColor: '#61625DC4' }}>
                            <CardTitle>
                                About Me
                            </CardTitle>
                            <CardText>
                                My name is Peter Huynh and I learned how to create this website after
                                completing the software engineering program at Nucamp. During my time at Nucamp,
                                I experienced Python, SQL, DevOps, Bootstrap, React and React Native. I'm currently
                                looking for a job position as a fullstack engineer. Please feel free to email me
                                using the contact page.
                            </CardText>
                        </Card>
                    </Col>
                    <Col className='d-flex justify-content-center m-3' sm md='4'>
                        <img className='rounded' src={me} alt='Photo of Peter Huynh' />
                    </Col>
                </Row>
            </CardBody>
        </Card >
    )
}



export default ProfileContent;