import { Container, Col, Row } from 'reactstrap';
import BmiCal from '../project/BmiCal';
import ProjectVideos from '../project/ProjectVideos';


const Projects = () => {
    return (
        <Container>
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