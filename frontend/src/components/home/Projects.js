import { Container, Col, Row } from 'reactstrap';
import BmiCal from '../project/BmiCal';
import ProjectVideos from '../project/ProjectVideos';


const Projects = () => {
    return (
        <Container>
            <Row className='mini-projects p-5'>
                <Col className='d-flex justify-content-center'>
                    <h1>Projects</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <BmiCal />
                    <ProjectVideos />
                </Col>
            </Row>
        </Container>
    )
}

export default Projects;