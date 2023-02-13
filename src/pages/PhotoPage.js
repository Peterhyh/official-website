import { Container } from 'reactstrap';
import PhotographsList from '../features/photograph/PhotographsList';
import SubHeader from '../components/SubHeader';


const PhotoPage = () => {

    return (
        <Container>
            <SubHeader current='Photography' />
            <PhotographsList />
        </Container>
    );
};

export default PhotoPage;