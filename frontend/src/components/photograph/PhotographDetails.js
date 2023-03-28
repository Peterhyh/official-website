import { Col, Card, CardImg } from 'reactstrap';


const PhotographDetails = ({ photo }) => {
    const { image, name } = photo;
    return (
        <Col>
            <Card>
                <CardImg top src={image} alt={name} />
            </Card>
        </Col>
    );
};

export default PhotographDetails;