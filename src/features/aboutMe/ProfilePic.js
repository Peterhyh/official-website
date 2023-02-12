import me from '../../app/assets/img/me.jpg';
import { Card, CardImg, CardBody, CardText, Row, Container, Col } from 'reactstrap';

const ProfilePic = () => {
    return (
        <Container>
            <Row style={{ justifyContent: 'center' }}>
                <Col md='5'>
                    <Card>
                        <CardImg src={me} alt='Photo of Peter Huynh' />
                        <CardBody>
                            <CardText>
                                My name is Peter Huynh
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
};

export default ProfilePic;