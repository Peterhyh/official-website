import {Formik} from 'formik';

const initialValues = {
    email: '',
    message: ''
};


const ContactForm = () => {
    return(
        <Formik
            initialValues = {initialValues}
            validate = {validateForm}
            onSubmit = {handleSubmit}
        >
            {
                <form onSubmit={handleSubmit}>
                    <div>
                        <input 
                            value = {values.email}
                            name = 'email'
                            onChange = {handleChange}
                            placeholder = 'Your email'
                        />
                    </div>
                    <div>
                        <input
                            value = {values.message}
                            name = 'message'
                            onChange = {handleChange}
                            placeholder = 'Enter message...'
                        />
                    </div>
                </form>
            }
        </Formik>
    )
};

export default ContactForm;