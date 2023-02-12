import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

const DisplayCard = ({ featPhoto }) => {
    const { image, description, name } = featPhoto;
    return (
        <Card>
            <CardImg src={image} alt={name} style={{ height: 350 }} />
            <CardBody>
                <CardTitle>{name}</CardTitle>
                <CardText>{description}</CardText>
            </CardBody>
        </Card>
    )
};

export default DisplayCard;