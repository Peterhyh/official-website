import { Container, Col, Row } from 'reactstrap';


const ProfileContent = () => {

    return (
        <Container className='row-content' >
            <Row>
                <Col className='d-flex justify-content-center'>
                    <h1 class='text-white'>About Me</h1>
                </Col>
            </Row>
            <Row className='d-flex justify-content-center align-items-center'>
                <Col className='d-flex justify-content-center align-items-center mt-5' xs='10' >
                    <div>
                        <span className='intro' >
                            Hi there! My name is Peter Huynh and I graduated the backend and full stack programs
                            at Nucamp with honors. I have a great passion for coding and ready to put my skills to
                            the test in a professional setting. I also enjoy photography, automotives, 3D printing,
                            and building gaming PC's. I love figuring out how something works and being able to
                            replicate/build it myself and eventually make it better than the original. My favorite part
                            about the process is discovering an original idea of my own along the way.
                        </span>
                    </div>
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