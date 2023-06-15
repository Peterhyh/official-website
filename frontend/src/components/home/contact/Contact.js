import { Parallax } from 'react-scroll-parallax';
import './contact.css';
import EMAIL from '../../../app/assets/img/email.svg';
import GITHUB from '../../../app/assets/img/github.svg';
import LINKEDIN from '../../../app/assets/img/linkedin.svg';
import INSTAGRAM from '../../../app/assets/img/instagram.svg';


const Contact = () => {
    return (
        <div className='contactContainer'>
            <Parallax translateX={['-1000px', '300px']}>
                <p className='certificate-title'>CONTACT</p>
            </Parallax>

            <div className='contactIconsContainer'>
                <a href='mailto:peterhuynh@peterhyh.com' target='_blank' rel='noopener'>
                    <img src={EMAIL} alt='' />
                </a>
                <a href='https://github.com/Peterhyh' target='_blank' rel='noopner'>
                    <img src={GITHUB} alt='' />
                </a>
                <a href='https://www.linkedin.com/in/peterhyh/' target='_blank' rel='noopener'>
                    <img src={LINKEDIN} alt='' />
                </a>
                <a href='https://www.instagram.com/peterhyh/?hl=en' target='_blank' rel='noopener'>
                    <img src={INSTAGRAM} alt='' />
                </a>
            </div>

        </div>
    )
};

export default Contact;