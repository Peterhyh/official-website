import Certificates from '../components/home/Certificates';
import HomeBanner from '../components/home/HomeBanner';
import ProfileContent from '../components/home/ProfileContent';
import Projects from '../components/home/Projects';
import ContactForm from '../components/home/ContactForm';
import Skills from '../components/home/Skills';


const HomePage = () => {
    return (
        <div>
            <ProfileContent />
            <HomeBanner />

            <Skills />
            <Projects />
            <Certificates />
            {/* <ContactForm /> */}
        </div>
    )
};

export default HomePage;