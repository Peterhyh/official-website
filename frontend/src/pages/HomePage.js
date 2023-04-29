import Certificates from '../components/home/certificate/Certificates';
import ProfileContent from '../components/home/bio/ProfileContent';
import ProjectDemoCards from '../components/home/projects/ProjectDemoCards';
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