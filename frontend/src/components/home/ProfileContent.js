


const ProfileContent = () => {

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            console.log(entry);
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        })
    })

    const hiddenElements = document.querySelectorAll('.hidden');

    hiddenElements.forEach(element => observer.observe(element));

    return (
        <>
            <section class='hidden'>
                <h1 class='bio-title'>About Me</h1>
                <p class='bio-description'>Hi there! My name is Peter Huynh and I graduated the backend and full stack programs
                    at Nucamp with honors. I have a great passion for coding and ready to put my skills to
                    the test in a professional setting. I also enjoy photography, automotives, 3D printing,
                    and building gaming PC's. I love figuring out how something works and being able to
                    replicate/build it myself and eventually make it better than the original. My favorite part
                    about the process is discovering an original idea of my own along the way.
                </p>
            </section>
        </>
    )

}

export default ProfileContent;