import { Container } from 'reactstrap';
import SubHeader from '../components/SubHeader';
import ContactForm from '../components/ContactForm';
import Header from '../components/Header';

const ContactPage = () => {
    return (
        <Container >
            <Header />
            <SubHeader current='Contact Me' />
            <ContactForm />
        </Container>
    )
};

export default ContactPage;