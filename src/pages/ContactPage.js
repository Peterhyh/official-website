import { Container } from 'reactstrap';
import SubHeader from '../components/SubHeader';
import ContactForm from '../components/ContactForm';

const ContactPage = () => {
    return (
        <Container>
            <SubHeader current='Contact' />
            <h3>Contact Page</h3>
            <ContactForm />
        </Container>
    )
};

export default ContactPage;