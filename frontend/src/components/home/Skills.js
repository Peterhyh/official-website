import { Parallax } from 'react-parallax';

const Skills = () => {
    return (
        <div className='skill-container'>
            <h1 className='skills-title'>Skills</h1>

            <card className='skill-card'>
                <h1 className='skill-card-title'>Frontend</h1>
                <div>
                    <dl>
                        <dt>HTML</dt>
                        <dt>CSS</dt>
                        <dt>JavaScript</dt>
                        <dt>React</dt>
                        <dt>React Native</dt>
                    </dl>
                </div>
            </card>

            <card className='skill-card'>
                <h1 className='skill-card-title'>Backend</h1>
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
            </card>

            <card className='skill-card'>
                <h1 className='skill-card-title'>Others</h1>
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
            </card>
        </div>
    )
};

export default Skills;