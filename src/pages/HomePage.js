import HomeBanner from '../components/home/HomeBanner';
import ProfileContent from '../features/aboutMe/ProfileContent';
import { Container, Row, Col } from 'reactstrap';

const HomePage = () => {
    return (
        <div>
            <HomeBanner />
            <ProfileContent />
        </div>
    )
};

export default HomePage;