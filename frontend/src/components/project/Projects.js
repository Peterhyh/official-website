import { Container, Row, Col } from 'reactstrap';

const Projects = () => {
    return (
        <Container>
            <Row className='d-flex justify-content-center row-content'>
                <h1 className='d-flex justify-content-center' style={{ color: '#fff' }}>Prescription Database</h1>
                <Col className='m-2' md='7'>
                    <div className='ratio ratio-16x9'>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/azkBBHNs6n4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </Col>
            </Row>
            <Row className='d-flex justify-content-center m-5'>
                <h1 className='d-flex justify-content-center' style={{ color: '#fff' }}>Blackjack CLI Game</h1>
                <Col className='m-2' md='7'>
                    <div className='ratio ratio-16x9'>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/_VLc779betI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </Col>
            </Row>
        </Container>
    )
};

export default Projects;
