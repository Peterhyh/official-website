import { useState, useEffect } from 'react';


const ProfileContent = () => {

    const [slideIn, setSlideIn] = useState(false);

    useEffect(() => {

        aboutme.forEach(element => observer.observe(element));
    },);

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setSlideIn(true);
            } else {
                setSlideIn(false);
            }
        })
    })

    const aboutme = document.querySelectorAll('.aboutme');



    return (
        <div className='bio-container'>
            <h1 className={slideIn ? 'aboutme-show' : 'aboutme'}>About Me</h1>
            <p className='bio'>Hi there! My name is Peter Huynh and I graduated the backend and full stack programs
                at Nucamp with honors. I have a great passion for coding and ready to put my skills to
                the test in a professional setting. I also enjoy photography, automotives, 3D printing,
                and building gaming PC's. I love figuring out how something works and being able to
                replicate/build it myself and eventually make it better than the original. My favorite part
                about the process is discovering an original idea of my own along the way.
            </p>
        </div>
    )

}

export default ProfileContent;