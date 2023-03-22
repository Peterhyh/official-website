import { Container, Row } from 'reactstrap';

const Projects = () => {
    return (
        <Container>
            <Row className='row-content'>
                <h1 style={{ color: '#fff' }}>Blackjack CLI Game</h1>
                <div className='ratio ratio-16x9'>
                    <iframe src='https://www.youtube.com/embed/_VLc779betI' title='Blackjack' />
                </div>
            </Row>
        </Container>
    )
};

export default Projects;
