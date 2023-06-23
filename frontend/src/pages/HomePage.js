import Certificates from '../components/home/certificate/Certificates';
import AboutMe from '../components/home/AboutMe/AboutMe';
import ProjectDemoCards from '../components/home/projects/ProjectDemoCards';
import Skills from '../components/home/skills/Skills';
import IntroSection from '../components/home/intro/IntroSection';
import { ParallaxProvider } from 'react-scroll-parallax';
import Contact from '../components/home/contact/Contact';


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
            </ParallaxProvider>
        </div>
    )
};

export default HomePage;