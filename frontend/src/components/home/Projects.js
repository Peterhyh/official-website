import { Button, Label, FormGroup, Container, Col, Row } from 'reactstrap';
import { Formik, Form, Field, useFormik } from 'formik';
import axios from 'axios';
import { useState } from 'react';


const Projects = () => {

    const [bmi, setBmi] = useState("Enter weight and height below");

    const formik = useFormik({
        initialValues: {
            weight: '',
            height: ''
        },
        onSubmit: (values) => {
            console.log('---LOG1: ', values)
            axios.post('http://localhost:3001/bmi', {
                weight: values.weight,
                height: values.height
            })
                .then(response => {
                    console.log('---LOG2: ', response)
                    setBmi(JSON.stringify(response.data))
                })
                .catch(err => {
                    console.err(err)
                });
        }
    });

    return (
        <Container className='row-content'>
            <Row className='mini-projects mb-5'>
                <Col className='d-flex justify-content-center'>
                    <h1>Projects</h1>
                </Col>
            </Row>
            <Row className='mini-projects mb-5'>
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
                                    <Label htmlFor='weight'>
                                        {'Weight (lbs)'}
                                    </Label>
                                </Col>
                                <Col md='2'>
                                    <Field
                                        type='text'
                                        className='form-control'
                                        name='weight'
                                        placeholder='lbs'
                                        onChange={formik.handleChange}
                                        value={formik.values.weight}
                                    />
                                </Col>
                            </Row>
                        </FormGroup>
                        <FormGroup>
                            <Row className='d-flex justify-content-center'>
                                <Col md='3'>
                                    <Label htmlFor='height'>
                                        {'Height (inches)'}
                                    </Label>
                                </Col>
                                <Col md='2'>
                                    <Field
                                        type='text'
                                        className='form-control'
                                        name='height'
                                        placeholder='inches'
                                        onChange={formik.handleChange}
                                        value={formik.values.height}
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

export default Projects;