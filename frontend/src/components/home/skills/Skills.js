import './Skills.css';
import { Parallax } from 'react-scroll-parallax';
import HTML from '../../../app/assets/img/html.svg';
import CSS from '../../../app/assets/img/css.svg';
import REACT from '../../../app/assets/img/react.svg';
import JS from '../../../app/assets/img/javascript.svg';
import DOCKER from '../../../app/assets/img/docker.svg';
import EXPRESS from '../../../app/assets/img/express.svg';
import GITHUB from '../../../app/assets/img/github.svg';
import MONGO from '../../../app/assets/img/mongodb.svg';
import GIT from '../../../app/assets/img/git.svg';
import PYTHON from '../../../app/assets/img/python.svg';

const Skills = () => {

    return (
        <div className='skill-container'>
            <Parallax translateX={['1000px', '-300px']} >
                <p className='skills-title'>SKILLS</p>
            </Parallax>
            <div className='skillIconContainer'>
                <img className='skillIcon' src={HTML} alt='HTML' />
                <img className='skillIcon' src={CSS} alt='CSS' />
                <img className='skillIcon' src={REACT} alt='REACT' />
                <img className='skillIcon' src={JS} alt='JavaScript' />
                <img className='skillIcon' src={DOCKER} alt='DOCKER' />
                <img className='skillIcon' src={EXPRESS} alt='EXPRESS' />
                <img className='skillIcon' src={GITHUB} alt='GITHUB' />
                <img className='skillIcon' src={MONGO} alt='MONGO' />
                <img className='skillIcon' src={GIT} alt='GIT' />
                <img className='skillIcon' src={PYTHON} alt='PYTHON' />
            </div>
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