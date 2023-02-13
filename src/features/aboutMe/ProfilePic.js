import me from '../../app/assets/img/me.jpg';
import { Card, CardImg, Row, Container, Col } from 'reactstrap';

const ProfilePic = () => {
    return (
        <Container>
            <Row style={{ justifyContent: 'center' }}>
                <Col md='5'>
                    <Card>
                        <CardImg src={me} alt='Photo of Peter Huynh' />
                    </Card>
                </Col>
            </Row>
        </Container>
    )
};

export default ProfilePic;