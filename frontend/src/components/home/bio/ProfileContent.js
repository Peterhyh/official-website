import './Bio.css';
import { Parallax } from 'react-scroll-parallax';


const ProfileContent = () => {

    return (

        <div className='bio-container'>
            <Parallax translateX={['-1000px', '300px']}>
                <p className='bioTitle'>ABOUT ME</p>
            </Parallax>
            <p className='bio-description'>
                A full stack developer with a great passion for coding and building the best user experience.
                I also enjoy automotives, 3D printing, building gaming PC's, and programming with Arduino.
                I love discovering how something works and being able to replicate/build it myself and eventually
                make it better than the original. My favorite part about the learning process is discovering
                an original idea of my own along the way.
            </p>
        </div>
    )

}

export default ProfileContent;