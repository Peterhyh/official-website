import SweetlyDental from '../app/assets/img/sweetlydental.png';
import ComputerSVG from '../app/assets/img/computer.svg';
import GitHubSVG from '../app/assets/img/github.svg';
import Blackjack from '../app/assets/img/blackjack.png';
import YouTubeSVG from '../app/assets/img/youtube.svg';
import Pharmacy from '../app/assets/img/pharmacy.png';

const ProjectDemoCards = () => {
    return (
        <div className='projects-container'>
            <div className='card-container'>
                <div className='image-container'>
                    <img src={SweetlyDental} alt='' />
                </div>
                <div className='card-title'>
                    <h3>SweetlyDental</h3>
                </div>
                <div className='card-body'>
                    <p>{'SweetlyDental is a fullstack website designed for a dentistry to promote their business and allows their patients/potential patients to easily setup an appointment. This application was built with MERN stack (MongoDB, Express, React, and Node.js) and deployed with AWS'}</p>
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

            <div className='card-container'>
                <div className='image-container'>
                    <img src={Blackjack} alt='' />
                </div>
                <div className='card-title'>
                    <h3>Blackjack CLI Game</h3>
                </div>
                <div className='card-body'>
                    <p>{'Blackjack CLI game was created using Python'}</p>
                </div>
                <div className='card-buttons'>
                    <a href='https://www.youtube.com/watch?v=_VLc779betI&ab_channel=PeterHuynh' target='_blank' rel='noopener'>
                        <img className='projects-button' src={YouTubeSVG} alt='Computer icon' />
                    </a>
                    <a color='primary' outline href='https://github.com/Peterhyh/BlackJack' target='_blank' rel='noopener'>
                        <img className='projects-button' src={GitHubSVG} alt='GitHub icon' />
                    </a>
                </div>
            </div>

            <div className='card-container'>
                <div className='image-container'>
                    <img src={Pharmacy} alt='' />
                </div>
                <div className='card-title'>
                    <h3>Pharmacy Database</h3>
                </div>
                <div className='card-body'>
                    <p>{'Blackjack CLI game was created using Python'}</p>
                </div>
                <div className='card-buttons'>
                    <a href='http://herbapharmacy.com' target='_blank' rel='noopener'>
                        <img className='projects-button' src={ComputerSVG} alt='Computer icon' />
                    </a>
                    <a color='primary' outline href='https://github.com/Peterhyh/prescripton-database-2.0' target='_blank' rel='noopener'>
                        <img className='projects-button' src={GitHubSVG} alt='GitHub icon' />
                    </a>
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