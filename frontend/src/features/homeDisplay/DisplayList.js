import { selectFeaturedPhotos, selectFeatDisplay } from '../photograph/photographsSlice';
import { Col, Row } from 'reactstrap';
import AnimatedDisplayCard from './AnimatedDisplayCard';

const DisplayList = () => {
    const featPhoto = [selectFeaturedPhotos(), selectFeatDisplay()];

    return (
        <Row>
            {featPhoto.map((item, idx) => {
                return (
                    item && (
                        <Col md className='m-1' key={idx}>
                            <AnimatedDisplayCard featPhoto={item} />
                        </Col>
                    )
                );
            })}
        </Row>
    )
};

export default DisplayList;
