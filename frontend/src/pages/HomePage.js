import Certificates from '../components/home/certificate/Certificates';
import ProfileContent from '../components/home/bio/ProfileContent';
import ProjectDemoCards from '../components/home/projects/ProjectDemoCards';
import Skills from '../components/home/skills/Skills';
import IntroSection from '../components/home/intro/IntroSection';
import { ParallaxProvider } from 'react-scroll-parallax';


const HomePage = () => {
    return (
        <div>
            <ParallaxProvider>
                <IntroSection />
                <ProfileContent />
                <Skills />
                <ProjectDemoCards />
                <Certificates />
            </ParallaxProvider>
        </div>
    )
};

export default HomePage;