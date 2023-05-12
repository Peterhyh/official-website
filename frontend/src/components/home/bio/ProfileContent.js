
// import Typewriter from "typewriter-effect";
import './Bio.css';
import Signiture from '../../../app/assets/img/bsigniture.png';
import ProfilePic from '../../../app/assets/img/originalProfilePic.jpg';

const ProfileContent = () => {

    return (
        <div className='bio-container'>
            <h1 className='bio-title'>About Me</h1>
            <p className='bio-description'>
                Hi there! My name is Peter Huynh and I graduated the backend and full stack programs
                at Nucamp with honors. I have a great passion for coding and ready to put my skills to
                the test in a professional setting. I also enjoy photography, automotives, 3D printing,
                and building gaming PC's. I love figuring out how something works and being able to
                replicate/build it myself and eventually make it better than the original. My favorite part
                about the process is discovering an original idea of my own along the way.
            </p>
            <div className='profilePicContainer'>
                <div className='profile-picture'>
                    <img src={ProfilePic} alt='' />
                </div>
            </div>
        </div>
    )

}

export default ProfileContent;