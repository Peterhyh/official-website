import { Container, Col, Row } from 'reactstrap';
import ProjectDemoCards from '../ProjectDemoCards';

const Projects = () => {
    return (
        <Container className='row-content'>
            <Row className='mini-projects p-5'>
                <Col className='d-flex justify-content-center'>
                    <h1>Projects</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <ProjectDemoCards />
                </Col>
            </Row>
        </Container>
    )
}

export default Projects;