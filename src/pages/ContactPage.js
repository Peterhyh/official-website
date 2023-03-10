import { Container } from 'reactstrap';
import SubHeader from '../components/SubHeader';
import ContactForm from '../components/ContactForm';

const ContactPage = () => {
    return (
        <Container >
            <SubHeader current='Contact Me' />
            <ContactForm />
        </Container>
    )
};

export default ContactPage;