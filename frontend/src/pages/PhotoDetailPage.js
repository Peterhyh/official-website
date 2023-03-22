import { useParams } from 'react-router-dom';
import { selectPhotoById } from '../features/photograph/photographsSlice';
import { Container, Row } from 'reactstrap';
import PhotographDetails from '../features/photograph/PhotographDetails';
import SubHeader from '../components/SubHeader';
import Header from '../components/Header';

const PhotoDetailPage = () => {
    const { photoId } = useParams();
    const photo = selectPhotoById(photoId);

    return (
        <Container>
            <Header />
            <SubHeader current={photo.name} detail={true} />
            <Row>
                <PhotographDetails photo={photo} />
            </Row>
        </Container>
    )
};

export default PhotoDetailPage;