import { useParams } from 'react-router-dom';
import { selectPhotoById } from '../features/photograph/photographsSlice';
import { Container, Row } from 'reactstrap';
import PhotographDetails from '../features/photograph/PhotographDetails';
import SubHeader from '../components/SubHeader';

const PhotoDetailPage = () => {
    const { photoId } = useParams();
    const photo = selectPhotoById(photoId);

    return (
        <Container>
            <SubHeader current={photo.name} detail={true} />
            <Row>
                <PhotographDetails photo={photo} />
            </Row>
        </Container>
    )
};

export default PhotoDetailPage;