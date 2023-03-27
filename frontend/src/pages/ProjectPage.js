import Projects from '../components/project/Projects';
import { Container } from 'reactstrap';
import Header from '../components/Header';

const ProjectPage = () => {
    return (
        <Container>
            <Header />
            <Projects />
        </Container>
    )
};

export default ProjectPage;