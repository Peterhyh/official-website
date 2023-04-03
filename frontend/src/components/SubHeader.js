import { Col, Row, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

const SubHeader = ({ current, detail }) => {
    return (
        <Row>
            <Col>
                <Breadcrumb>
                    <BreadcrumbItem >
                        <Link className='home-bc' to='/'>Home</Link>
                    </BreadcrumbItem>
                    {detail && (
                        <BreadcrumbItem>
                            <Link to='/photo'>Photography</Link>
                        </BreadcrumbItem>
                    )}
                    <BreadcrumbItem style={{ color: '#fff' }} active>{current}</BreadcrumbItem>
                </Breadcrumb>
                <h2>{current}</h2>
                <hr />
            </Col>
        </Row>
    )
};

export default SubHeader;