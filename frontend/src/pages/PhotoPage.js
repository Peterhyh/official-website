import { Container } from 'reactstrap';
import PhotographsList from '../features/photograph/PhotographsList';
import SubHeader from '../components/SubHeader';
import Header from '../components/Header';


const PhotoPage = () => {

    return (
        <Container>
            <Header />
            <SubHeader current='Photography' />
            <PhotographsList />
        </Container>
    );
};

export default PhotoPage;