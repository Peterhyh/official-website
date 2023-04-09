import Certificates from '../components/home/Certificates';
import HomeBanner from '../components/home/HomeBanner';
import ProfileContent from '../components/home/ProfileContent';
import Projects from '../components/home/Projects';
import ContactForm from '../components/home/ContactForm';


const HomePage = () => {
    return (
        <div>
            <HomeBanner />
            <ProfileContent />
            <Projects />
            <Certificates />
            {/* <ContactForm /> */}
        </div>
    )
};

export default HomePage;