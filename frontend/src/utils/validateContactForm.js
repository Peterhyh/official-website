export const validateContactForm = (values) => {
    const errors = {};

    //email check
    if (!values.email) {
        errors.email = 'Required'
    }
    else if (!values.email.includes('@')) {
        errors.email = 'Email should contain a @'
    }

    //subject check
    if (!values.subject) {
        errors.subject = 'Required'
    }

    //message check
    if (!values.message) {
        errors.message = 'Required'
    }

    return errors;
};