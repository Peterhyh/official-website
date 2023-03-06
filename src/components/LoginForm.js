import { Modal, ModalHeader, ModalBody, FormGroup, Label, Button } from 'reactstrap';
import { Formik, Form, Field } from 'formik';
import { useState } from 'react';

const LoginForm = () => {
    const [openModal, setOpenModal] = useState(false);

    const handleLogin = (values) => {
        const currentUser = {
            username: values.username,
            password: values.username
        }
        setOpenModal(false);
    };

    return (
        <>
            <Button
                outline
                onClick={() => setOpenModal(!openModal)}
            >
                Login
            </Button>
            <Modal isOpen={openModal}>
                <ModalHeader toggle={() => setOpenModal(!openModal)}>
                    Login
                </ModalHeader>
                <ModalBody>
                    <Formik
                        initialValues={{
                            username: '',
                            password: ''
                        }}
                        onSubmit={handleLogin}
                    >
                        <Form>
                            <FormGroup>
                                <Label className='login-modal' htmlFor='username'>
                                    Username
                                </Label>
                                <Field
                                    name='username'
                                    type='textarea'
                                    placeholder='Username'
                                    className='form-control'
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label className='login-modal' htmlFor='password'>
                                    Password
                                </Label>
                                <Field
                                    name='password'
                                    type='textarea'
                                    placeholder='Password'
                                    className='form-control'
                                />
                            </FormGroup>
                            <Button
                                type='submit'
                                color='primary'
                            >
                                Login
                            </Button>
                        </Form>
                    </Formik>
                </ModalBody>
            </Modal>
        </>
    )
};

export default LoginForm;