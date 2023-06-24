import './intro.css';
import { useRef, useEffect, useState } from 'react';

const IntroSection = () => {
    const [showName, setShowName] = useState(false);
    const [showJobTitle, setShowJobTitle] = useState(false);

    const nameRef = useRef();
    const jobTitleRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            if (entry.isIntersecting) {
                setShowName(true);
            } else {
                return null;
            };
        });
        observer.observe(nameRef.current);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            if (entry.isIntersecting) {
                setShowJobTitle(true);
            } else {
                return null;
            };
        });
        observer.observe(jobTitleRef.current);
    }, []);

    return (
        <div className='introSectionContainer'>
            <div className='introNameContainer'>
                <h1 ref={nameRef} className={`${showName ? 'animateIntroName' : 'hideIntroName'} `}>Peter Huynh</h1>
            </div>
            <div className='introJobTitleContainer'>
                <h3 ref={jobTitleRef} className={`${showJobTitle ? 'animateIntroJobTitle' : 'hideIntroJobTitle'}`}>FULL STACK DEVELOPER</h3>
            </div>
        </div>
    )
};

export default IntroSection;