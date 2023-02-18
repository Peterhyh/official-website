import { Container, Row, Col, Card } from 'reactstrap';
import { ProfileMessage } from '../features/aboutMe/ProfileContent';
import ProfileContent from '../features/aboutMe/ProfileContent';

const HomePage = () => {
    return (
        <>
            <div className='bg-image'></div>
            <ProfileContent />
        </>
    )
};

export default HomePage;