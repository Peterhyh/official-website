import SweetlyDental from '../../../app/assets/img/sweetlydental.png';
import ComputerSVG from '../../../app/assets/img/computer.svg';
import GitHubSVG from '../../../app/assets/img/github.svg';
import Pharmacy from '../../../app/assets/img/pharmacy.png';
import './Projects.css';
import { Parallax } from 'react-scroll-parallax';

const ProjectDemoCards = () => {

    const projects = [
        {
            id: 0,
            title: 'Herb-A-Pharmacy Demo',
            img: Pharmacy,
            description: 'Fullstack MERN pharmacy database application with Google "Places", "Maps", and "Geocoding" API. This application allows users to register as an authorized user to gain access to the application, create prescription data, register new patients if the patient is not already in the database, and retrieve entered data.',
            url: 'http://herbapharmacy.com',
            github: 'https://github.com/Peterhyh/prescripton-database-2.0',
        },
        {
            id: 1,
            title: 'Sweetly Dental Demo',
            img: SweetlyDental,
            description: 'A Fullstack MERN dental website that offers the dentistry to communicate and setup appointments with existing/new patients',
            url: 'http://sweetlydental.com',
            github: 'https://github.com/Peterhyh/dental-website',
        },
    ];

    return (
        <div className='projects-container'>
            <Parallax translateX={['-1000px', '300px']}>
                <p className='project-title'>PROJECTS</p>
            </Parallax>

            {projects.map((project, i) => (
                <div className='projectCard'>

                    <div className='projectTitle'>
                        <h1>{project.title}</h1>
                    </div>
                    <div className='projectContent'>

                        <div className='projectDescriptionContainer'>
                            <div className='projectDescription'>
                                <p>{project.description}</p>
                            </div>
                            <div className='projectIconContainer'>
                                <a href={project.github} target="_blank" rel="noopener">
                                    <img src={GitHubSVG} alt='Directing to source code on GitHub' />
                                </a>
                                <a href={project.url} target="_blank" rel="noopener">
                                    <img src={ComputerSVG} alt='Directing to project website' />
                                </a>
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

