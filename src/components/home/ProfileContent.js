import me from '../../app/assets/img/me.jpg';
import { Container, Col, Row } from 'reactstrap';
import { useEffect, useRef, useState, useMemo } from 'react';

const ProfileContent = () => {
    const [showContent, setShowContent] = useState(false);

    const targetRef = useRef(null);

    const cb = entries => {
        const [entry] = entries;
        setShowContent(entry.isIntersecting);
    };

    const options = useMemo(() => {
        return {
            root: null,
            rootMargin: '0px',
            threshold: 0.3
        }
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(cb, options);
        const currentTarget = targetRef.current;
        if (currentTarget) {
            observer.observe(currentTarget);
        }

        return () => {
            if (currentTarget) {
                observer.unobserve(currentTarget);
            }
        }
    }, [targetRef, options]);

    return (
        <Container className='profile-container mt-3 row-content' useRef={targetRef}>
            <Row >
                <Col className='d-flex justify-content-center' >
                    <img className='profile-pic' src={me} alt='A photograph of Peter Huynh' />
                </Col>
            </Row>
            <Row>
                <Col className='mt-2'>
                    <p className='profile-intro d-flex justify-content-center'>
                        Hi there! My name is Peter Huynh and I graduated Nucamps
                        full-stack and backend engineering programs in March 2023.
                    </p>
                </Col>
            </Row>
        </Container >
    )
}



export default ProfileContent;





// <Card className='about_me mt-5' style={{ backgroundColor: '#1E1E1EC4' }}>
        //     <CardBody className='p-5'>
        //         <Row className='d-flex align-items-center'>
        //             <Col className='d-flex justify-content-center m-3' md='7'>
        //                 <Card className='profile_message border-5 border-dark p-4' style={{ backgroundColor: '#61625DC4' }}>
        //                     <CardTitle>
        //                         About Me
        //                     </CardTitle>
        //                     <CardText>
        //                         My name is Peter Huynh and I learned how to create this website after
        //                         completing the software engineering program at Nucamp. During my time at Nucamp,
        //                         I experienced Python, SQL, DevOps, Bootstrap, React and React Native. I'm currently
        //                         looking for a job position as a fullstack engineer. Please feel free to email me
        //                         using the contact page.
        //                     </CardText>
        //                 </Card>
        //             </Col>
        //             <Col className='d-flex justify-content-center m-3' sm md='4'>
        //                 <img className='rounded' src={me} alt='Photo of Peter Huynh' />
        //             </Col>
        //         </Row>
        //     </CardBody>
        // </Card >