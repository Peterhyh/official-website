import { Formik, Form, Field, useFormik } from 'formik';
import { Button, Label, Col, FormGroup, Card, Container, Row } from 'reactstrap';
import axios from 'axios';


const ContactForm = () => {

    const formik = useFormik({
        initialValues: {
            email: '',
            subject: '',
            message: ''
        },
        onSubmit: (values) => {
            axios.post('http://54.164.33.95:8000/contact', {
                email: values.email,
                subject: values.subject,
                message: values.message
            })
                .then(response => {
                    response.json();

                })
                .catch(err => new Error(err));
        }
    });

    return (


        <Container>
            <Row>
                <Col className='contact-title p-5 d-flex justify-content-center'>
                    <h1>Contact</h1>
                </Col>
            </Row>
            <Row>
                <Col className='d-flex justify-content-center mb-5' >
                    <Card className='p-4 rounded-6 border-5' style={{ backgroundColor: '#1E1E1EC4' }}>
                        <Formik>
                            <Form onSubmit={formik.handleSubmit}>
                                <FormGroup row>
                                    <Label htmlFor='email'>
                                        Email
                                    </Label>

                                    <Field
                                        name='email'
                                        type='email'
                                        onChange={formik.handleChange}
                                        className='form-control'
                                        placeholder='Your email address'
                                    />

                                </FormGroup>
                                <FormGroup row>
                                    <Label htmlFor='subject'>
                                        Subject
                                    </Label>

                                    <Field
                                        name='subject'
                                        type='text'
                                        onChange={formik.handleChange}
                                        className='form-control'
                                        placeholder='Subject'
                                    />{' '}

                                </FormGroup>
                                <FormGroup row>
                                    <Label htmlFor='message'>
                                        Message
                                    </Label>

                                    <Field
                                        name='message'
                                        as='textarea'
                                        rows='12'
                                        onChange={formik.handleChange}
                                        className='form-control'
                                        placeholder='message'
                                    />

                                </FormGroup>
                                <FormGroup row>

                                    <Button
                                        type='submit'
                                        color='primary'
                                    >
                                        Send
                                    </Button>

                                </FormGroup>
                            </Form>
                        </Formik>
                    </Card >
                </Col>
            </Row>
        </Container>

    )
};

export default ContactForm;