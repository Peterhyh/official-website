import { Col, Row, Container } from 'reactstrap';
import PhotographCard from './PhotographCard';
import { selectAllPhotographs } from './photographsSlice';

const PhotographsList = () => {
    const photographs = selectAllPhotographs();

    return (
        <Container className='home-page'>
            <Row style={{ justifyContent: 'center' }}>
                {photographs.map((photograph) => {
                    return (
                        <Col md='5' className='m-3' key={photograph.id} >
                            <PhotographCard photograph={photograph} />
                        </Col>
                    );
                })}
            </Row>
        </Container>
    )
};

export default PhotographsList;