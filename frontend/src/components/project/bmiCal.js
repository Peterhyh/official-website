import { Button, Label, FormGroup, Container, Col, Row } from 'reactstrap';
import { Formik, Form, Field, useFormik } from 'formik';
import { useState } from 'react';


const BmiCal = () => {

    const [bmi, setBmi] = useState("Enter weight and height below");

    const formik = useFormik({
        initialValues: {
            inches: '',
            pounds: ''
        },
        onSubmit: (values) => {
            const calculate = Math.round(((values.pounds * 703) / Math.pow(values.inches, 2)) * 100) / 100;
            setBmi(`BMI: ${calculate} kg/m2`)
        }
    });

    return (
        <Container>
            <Row className='mini-projects'>
                <Col>
                    <h2>BMI Calculator:</h2>
                </Col>
            </Row>
            <Container className='bmi-container p-5 mb-5' >
                <Row className='m-5'>
                    <Col className='d-flex justify-content-center align-items-center' md='12'>
                        <h1 className='bmi-cal-title p-3' >{bmi}</h1>
                    </Col>
                </Row>
                <Formik>
                    <Form onSubmit={formik.handleSubmit}>
                        <FormGroup>
                            <Row className='d-flex justify-content-center'>
                                <Col md='3'>
                                    <Label htmlFor='pounds'>
                                        {'Weight (lbs)'}
                                    </Label>
                                </Col>
                                <Col md='2'>
                                    <Field
                                        type='text'
                                        className='form-control'
                                        name='pounds'
                                        placeholder='lbs'
                                        onChange={formik.handleChange}
                                        value={formik.values.pounds}
                                    />
                                </Col>
                            </Row>
                        </FormGroup>
                        <FormGroup>
                            <Row className='d-flex justify-content-center'>
                                <Col md='3'>
                                    <Label htmlFor='inches'>
                                        {'Height (inches)'}
                                    </Label>
                                </Col>
                                <Col md='2'>
                                    <Field
                                        type='text'
                                        className='form-control'
                                        name='inches'
                                        placeholder='inches'
                                        onChange={formik.handleChange}
                                        value={formik.values.inches}
                                    />
                                </Col>
                            </Row>
                        </FormGroup>
                        <Row>
                            <Col className='d-flex justify-content-center align-items-center mt-4'>
                                <Button type='submit' color='primary'>
                                    Calculate
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </Formik>
            </Container>
        </Container>
    )
}

export default BmiCal;