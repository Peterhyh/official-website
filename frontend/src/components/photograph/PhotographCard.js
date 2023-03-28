import { Card, CardImg } from 'reactstrap';
import { Link } from 'react-router-dom';

const PhotographCard = ({ photograph }) => {
    const { id, name, image } = photograph;
    return (
        <Link to={`${id}`}>
            <Card>
                <CardImg width='100%' src={image} alt={name} />
            </Card>
        </Link>
    );
};


export default PhotographCard;