import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function MainHeader () {
    return(
        <Container fluid id= "main-header">
            <Row>
                <Col className= 'display-6'>
                <h1 >Le Roux Effronté</h1>
                </Col>
            </Row>
        </Container>
    )
}