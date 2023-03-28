import { Col, Row, Card } from 'reactstrap';
import PhotographCard from './PhotographCard';
import { selectAllPhotographs } from './photographsSlice';

const PhotographsList = () => {
    const photographs = selectAllPhotographs();

    return (
        <Card className='p-4 rounded-6 border-5 m-5' style={{ backgroundColor: '#1E1E1EC4' }}>
            <Row style={{ justifyContent: 'center' }}>
                {photographs.map((photograph) => {
                    return (
                        <Col md='5' className='m-3' key={photograph.id} >
                            <PhotographCard photograph={photograph} />
                        </Col>
                    );
                })}
            </Row>
        </Card>
    )
};

export default PhotographsList;