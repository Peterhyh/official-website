import SweetlyDental from '../../../app/assets/img/sweetlydental.png';
import ComputerSVG from '../../../app/assets/img/computer.svg';
import GitHubSVG from '../../../app/assets/img/github.svg';
import Blackjack from '../../../app/assets/img/blackjack.png';
import YouTubeSVG from '../../../app/assets/img/youtube.svg';
import Pharmacy from '../../../app/assets/img/pharmacy.png';
import './Projects.css';

const ProjectDemoCards = () => {
    return (
        <div className='projects-container'>
            <h1 className='project-title'>PROJECTS</h1>
            <div className='project-row'>
                <div className='project-card'>
                    <div className='image-container'>
                        <img src={SweetlyDental} alt='' />
                    </div>
                    <div className='card-body'>
                        <div className='card-title'>
                            <h3>SweetlyDental</h3>
                        </div>
                        <div>
                            <p>{'Fullstack website designed for a dentistry built with MERN'}</p>
                        </div>
                        <div className='card-buttons'>
                            <a href='http://sweetlydental.com' target='_blank' rel='noopener'>
                                <img className='projects-button' src={ComputerSVG} alt='Computer icon' />
                            </a>
                            <a color='primary' outline href='https://github.com/Peterhyh/dental-website' target='_blank' rel='noopener'>
                                <img className='projects-button' src={GitHubSVG} alt='GitHub icon' />
                            </a>
                        </div>
                    </div>
                </div>

                <div className='project-card'>
                    <div className='image-container'>
                        <img src={Blackjack} alt='' />
                    </div>
                    <div className='card-body'>
                        <div className='card-title'>
                            <h3>Blackjack CLI Game</h3>
                        </div>
                        <div>
                            <p>{'Blackjack CLI game was created using Python'}</p>
                        </div>
                        <div className='card-buttons'>
                            <a href='https://www.youtube.com/watch?v=_VLc779betI&ab_channel=PeterHuynh' target='_blank' rel='noopener'>
                                <img className='projects-button' src={YouTubeSVG} alt='Computer icon' />
                            </a>
                            <a href='https://github.com/Peterhyh/BlackJack' target='_blank' rel='noopener'>
                                <img className='projects-button' src={GitHubSVG} alt='GitHub icon' />
                            </a>
                        </div>
                    </div>
                </div>


                <div className='project-card'>
                    <div className='image-container'>
                        <img src={Pharmacy} alt='' />
                    </div>
                    <div className='card-body prescription-description'>
                        <div className='card-title'>
                            <h3>Herb-A-Pharmacy</h3>
                        </div>
                        <div>
                            <p>{'Fullstack MERN pharmacy database application allows you to store prescription information for patients. This application allows you to register as an authorized user to input patient information.'}</p>
                        </div>
                        <div className='card-buttons'>
                            <a href='http://herbapharmacy.com' target='_blank' rel='noopener'>
                                <img className='projects-button' src={ComputerSVG} alt='Computer icon' />
                            </a>
                            <a href='https://github.com/Peterhyh/prescripton-database-2.0' target='_blank' rel='noopener'>
                                <img className='projects-button' src={GitHubSVG} alt='GitHub icon' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
};

export default ProjectDemoCards;

{/* <div className='projects-button-container d-flex justify-content-center align-items-center justify-content-evenly'>
                            
                        </div>

<div className='projects-button-container d-flex justify-content-center align-items-center justify-content-evenly'>
                            
                        </div> */}