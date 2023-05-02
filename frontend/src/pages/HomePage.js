import Certificates from '../components/home/certificate/Certificates';
import ProfileContent from '../components/home/bio/ProfileContent';
import ProjectDemoCards from '../components/home/projects/ProjectDemoCards';
import Skills from '../components/home/skills/Skills';
import HomeBanner from '../components/home/banner/HomeBanner';


const HomePage = () => {
    return (
        <div>
            {/* <HomeBanner /> */}
            <ProfileContent />
            <Skills />
            <ProjectDemoCards />
            <Certificates />
        </div>
    )
};

export default HomePage;