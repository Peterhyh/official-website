import Certificates from '../components/home/certificate/Certificates';
import ProfileContent from '../components/home/ProfileContent';
import ProjectDemoCards from '../components/home/ProjectDemoCards';
import Skills from '../components/home/skills/Skills';


const HomePage = () => {
    return (
        <div>
            <ProfileContent />
            <Skills />
            <ProjectDemoCards />
            <Certificates />
        </div>
    )
};

export default HomePage;