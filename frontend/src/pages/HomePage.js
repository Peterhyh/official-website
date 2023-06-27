import Certificates from '../features/home/certificate/Certificates';
import AboutMe from '../features/home/AboutMe/AboutMe';
import ProjectDemoCards from '../features/home/projects/ProjectDemoCards';
import Skills from '../features/home/skills/Skills';
import IntroSection from '../features/home/intro/IntroSection';
import { ParallaxProvider } from 'react-scroll-parallax';
import Contact from '../features/home/contact/Contact';
import ContactForm from '../components/ContactForm';


const HomePage = () => {
    return (
        <div>
            <ParallaxProvider>
                <IntroSection />
                <Skills />
                <ProjectDemoCards />
                <Certificates />
                <AboutMe />
                <Contact />
                <ContactForm />
            </ParallaxProvider>
        </div>
    )
};

export default HomePage;