import SweetlyDental from '../../../app/assets/img/sweetlydental.png';
import ComputerSVG from '../../../app/assets/img/computer.svg';
import GitHubSVG from '../../../app/assets/img/github.svg';
import Blackjack from '../../../app/assets/img/blackjack.png';
import YouTubeSVG from '../../../app/assets/img/youtube.svg';
import Pharmacy from '../../../app/assets/img/pharmacy.png';
import './Projects.css';
import { Parallax } from 'react-scroll-parallax';

const ProjectDemoCards = () => {

    const projects = [
        {
            id: 0,
            title: 'Herb-A-Pharmacy Demo',
            img: Pharmacy,
            description: 'Fullstack MERN pharmacy database application allows you to store prescription information for patients. This application allows you to register as an authorized user to input patient information.'
        },
        {
            id: 1,
            title: 'Sweetly Dental Demo',
            img: SweetlyDental,
            description: 'Fullstack MERN pharmacy database application allows you to store prescription information for patients. This application allows you to register as an authorized user to input patient information.'
        },
    ];

    return (
        <div className='projects-container'>
            <Parallax translateX={['-1000px', '300px']}>
                <p className='project-title'>PROJECTS</p>
            </Parallax>

            {projects.map((project, i) => (
                <div className='projectCard'>
                    <div className='projectContent'>
                        <div className='projectDescriptionContainer'>
                            <div className='projectTitle'>
                                <h1>{project.title}</h1>
                            </div>
                            <div className='projectDescription'>
                                <p>{project.description}</p>
                            </div>
                        </div>
                        <div className='projectImage'>
                            <img src={project.img} alt='' />
                        </div>
                    </div>

                </div>

            ))}


        </div>
    )
};

export default ProjectDemoCards;

