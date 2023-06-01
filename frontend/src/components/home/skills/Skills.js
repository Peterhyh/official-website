import './Skills.css';
import { Parallax } from 'react-scroll-parallax';
import HTML from '../../../app/assets/img/html.svg';
import CSS from '../../../app/assets/img/css.svg';

const Skills = () => {

    return (
        <div className='skill-container'>
            <Parallax translateX={['1000px', '-300px']}>
                <p className='skills-title'>SKILLS</p>
            </Parallax>
            <Parallax
                translateX={[0, 100]}
                easing={'easeOutQuad'}
            >
                <img className='skillIcon' src={HTML} alt='HTML' />
                <img className='skillIcon' src={CSS} alt='CSS' />
            </Parallax>
        </div>
    )
};

export default Skills;

{/* <div className='skill-row'>
                <div className='skill-card'>
                    <h1>Frontend</h1>
                    <div>
                        <dl>
                            <dt>HTML</dt>
                            <dt>CSS</dt>
                            <dt>JavaScript</dt>
                            <dt>React</dt>
                            <dt>React Native</dt>
                        </dl>
                    </div>
                </div>

                <div className='skill-card'>
                    <h1>Backend</h1>
                    <div>
                        <dl>
                            <dt>Python</dt>
                            <dt>SQL</dt>
                            <dt>NoSQL</dt>
                            <dt>Postgres</dt>
                            <dt>MongoDB</dt>
                            <dt>Django</dt>
                            <dt>Flask</dt>
                            <dt>NodeJS</dt>
                            <dt>Express</dt>
                            <dt>Mongoose</dt>
                            <dt>REST API</dt>
                        </dl>
                    </div>
                </div>

                <div className='skill-card'>
                    <h1>Others</h1>
                    <div>
                        <dl>
                            <dt>GitHub</dt>
                            <dt>Git</dt>
                            <dt>Docker</dt>
                            <dt>Docker-Compose</dt>
                            <dt>Docker Hub</dt>
                            <dt>Postman</dt>
                            <dt>Insomnia</dt>
                            <dt>Studio 3T</dt>
                            <dt>Android Studio</dt>
                            <dt>VS Code</dt>
                            <dt>AWS</dt>
                            <dt>DevOps</dt>
                        </dl>
                    </div>
                </div>
            </div> */}