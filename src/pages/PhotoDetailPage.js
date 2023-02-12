import { useParams } from 'react-router-dom';
import { selectPhotoById } from '../features/photograph/photographsSlice';
import { Container, Row } from 'reactstrap';
import PhotographDetails from '../features/photograph/PhotographDetails';

const PhotoDetailPage = () => {
    const { photoId } = useParams();
    const photo = selectPhotoById(photoId);

    return (
        <Container>
            <Row>
                <PhotographDetails photo={photo} />
            </Row>
        </Container>
    )
};

export default PhotoDetailPage;