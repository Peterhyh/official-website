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
            axios.post('https://localhost:3001/contact', {
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
                <Col md='7'>
                    <Card className='p-4 rounded-6 border-5' style={{ backgroundColor: '#1E1E1EC4' }}>
                        <Formik>
                            <Form onSubmit={formik.handleSubmit}>
                                <FormGroup row>
                                    <Label htmlFor='email'>
                                        Email
                                    </Label>
                                    <Col md='7'>
                                        <Field
                                            name='email'
                                            type='email'
                                            onChange={formik.handleChange}
                                            className='form-control'
                                            placeholder='Your email address'
                                        />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label htmlFor='subject'>
                                        Subject
                                    </Label>
                                    <Col md='8'>
                                        <Field
                                            name='subject'
                                            type='text'
                                            onChange={formik.handleChange}
                                            className='form-control'
                                            placeholder='Subject'
                                        />{' '}
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label htmlFor='message'>
                                        Message
                                    </Label>
                                    <Col>
                                        <Field
                                            name='message'
                                            as='textarea'
                                            rows='12'
                                            onChange={formik.handleChange}
                                            className='form-control'
                                            placeholder='message'
                                        />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Col className='btn float-right'>
                                        <Button
                                            type='submit'
                                            color='primary'
                                        >
                                            Send
                                        </Button>
                                    </Col>
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