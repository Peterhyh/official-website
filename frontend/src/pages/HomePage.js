import Certificates from '../components/home/Certificates';
import HomeBanner from '../components/home/HomeBanner';
import ProfileContent from '../components/home/ProfileContent';
import Projects from '../components/home/Projects';


const HomePage = () => {
    return (
        <div>
            <HomeBanner />
            <ProfileContent />
            <Certificates />
        </div>
    )
};

export default HomePage;