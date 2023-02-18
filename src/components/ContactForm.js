import { Formik, Form, Field } from 'formik';
import { Button, Label, Col, FormGroup, Card, Alert } from 'reactstrap';


const ContactForm = () => {
    const handleSubmit = (values, { resetForm }) => {
        console.log('Your values:', values);
        console.log('in JSON format:', JSON.stringify(values));
        resetForm();
    };

    return (


        <Card className='p-4 rounded-6 border-5' style={{ backgroundColor: '#1E1E1EC4' }}>
            <Formik
                initialValues={{
                    email: '',
                    subject: '',
                    message: ''
                }}
                onSubmit={handleSubmit}
            >
                <Form>
                    <FormGroup row>
                        <Label htmlFor='email'>
                            Email
                        </Label>
                        <Col md='7'>
                            <Field
                                name='email'
                                type='textarea'
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
                                type='textarea'
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
        </Card>


    )
};

export default ContactForm;