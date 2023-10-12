import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function MainHeader () {
    return(
        <Container fluid style={{
            backgroundColor: '#313759',
            height: '15%',
            color: '#D9CCB4'
        }}>
            <Row id='main-header'>
                <Col className='text-center'>
                <h1 className='display-4'>Le Roux Effronté</h1>
                <h5 className='display-7'>348 East Main Street Lexington, KY<br /><br />Hours of Operation: 11am - 8pm</h5>
                </Col>
            </Row>
        </Container>
    )
}