import { Col, Card, CardImg, CardBody, CardText } from 'reactstrap';


const PhotographDetails = ({ photo }) => {
    const { description, image, name } = photo;
    return (
        <Col>
            <Card>
                <CardImg top src={image} alt={name} />
                <CardBody className='card-body'>
                    <CardText className='card-text'>{description}</CardText>
                </CardBody>
            </Card>
        </Col>
    );
};

export default PhotographDetails;