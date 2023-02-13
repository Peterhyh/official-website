import ProfilePic from '../features/aboutMe/ProfilePic';
import { Row, Col, Container } from 'reactstrap';
import SubHeader from '../components/SubHeader';

const AboutPage = () => {
    return (
        <Container>
            <SubHeader current='About Me' />
            <Row>
                <Col sm='6'>
                    <h3>About Me</h3>
                    <p>
                        My name is Peter Huynh and I learned how to create this website after
                        completing the software engineering program at Nucamp. During my time at Nucamp,
                        I experienced Python, SQL, DevOps, Bootstrap, React and React Native. I'm currently
                        looking for a job position as a fullstack engineer. Please feel free to email me
                        using the contact page.
                    </p>
                </Col>
                <Col sm='6'>
                    <ProfilePic />
                </Col>
            </Row>
        </Container>
    )
};

export default AboutPage;