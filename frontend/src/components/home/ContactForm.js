import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button, Label, Col, FormGroup, Card, Container, Row } from 'reactstrap';
import axios from 'axios';
import { validateContactForm } from '../../utils/validateContactForm';


const ContactForm = () => {

    const handleSubmit = (values, { resetForm }) => {
        axios.post('/backend/insert', {
            email: values.email,
            subject: values.subject,
            message: values.message
        })
            .then(() => {
                alert('success post')
            })
            .catch(err => new Error(err));
        resetForm();
        document.location.reload();
    };

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
                        <Formik
                            initialValues={{
                                email: '',
                                subject: '',
                                message: ''
                            }}
                            validate={validateContactForm}
                            onSubmit={handleSubmit}
                        >
                            <Form>
                                <FormGroup row>
                                    <Label htmlFor='email'>
                                        Email
                                    </Label>
                                    <Field
                                        name='email'
                                        type='email'
                                        className='form-control'
                                        placeholder='Your email address'
                                    />
                                    <ErrorMessage name='email'>
                                        {(msg) => <p className='text-danger'>{msg}</p>}
                                    </ErrorMessage>
                                </FormGroup>
                                <FormGroup row>
                                    <Label htmlFor='subject'>
                                        Subject
                                    </Label>
                                    <Field
                                        name='subject'
                                        type='text'
                                        className='form-control'
                                        placeholder='Subject'
                                    />
                                    <ErrorMessage name='subject'>
                                        {(msg) => <p className='text-danger'>{msg}</p>}
                                    </ErrorMessage>
                                </FormGroup>
                                <FormGroup row>
                                    <Label htmlFor='message'>
                                        Message
                                    </Label>
                                    <Field
                                        name='message'
                                        as='textarea'
                                        rows='12'
                                        className='form-control'
                                        placeholder='Message'
                                    />
                                    <ErrorMessage name='message'>
                                        {(msg) => <p className='text-danger'>{msg}</p>}
                                    </ErrorMessage>
                                </FormGroup>
                                <FormGroup row>
                                    <Button type='submit' color='primary'>Send</Button>
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