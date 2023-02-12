import { selectFeaturedPhotos, selectFeatDisplay } from '../photograph/photographsSlice';
import { Col, Row } from 'reactstrap';
import DisplayCard from './DisplayCard';

const DisplayList = () => {
    const featPhoto = [selectFeaturedPhotos(), selectFeatDisplay()];

    return (
        <Row>
            {featPhoto.map((item, idx) => {
                return (
                    <Col md className='m-1' key={idx}>
                        <DisplayCard featPhoto={item} />
                    </Col>
                );
            })}
        </Row>
    )
};

export default DisplayList;
