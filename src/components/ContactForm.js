import { Formik, Form, Field } from 'formik';
import { Button, Label, Col, FormGroup } from 'reactstrap';

const initialValues = {
    email: '',
    message: ''
};

const handleSubmit = (values) => {
    console.log(values);
};

const ContactForm = () => {
    return (
        <Formik
            initialValues={{
                email: '',
                message: ''
            }}
        >
            <Form>
                <FormGroup row>
                    <Label htmlFor='email' md='7'>
                        <Field
                            name='agree'
                            type='checkbox'
                            row='5'
                            className='form-control'
                            placeholder='email'
                        />{' '}
                        Email
                    </Label>
                    <Col>

                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label htmlFor='message' md='10'>
                        <Field
                            name='message'
                            as='textarea'
                            rows='12'
                            className='form-control'
                            placeholder='message'
                        />
                        Message
                    </Label>
                    <Col>

                    </Col>

                </FormGroup>
            </Form>
        </Formik>
    )
};

export default ContactForm;