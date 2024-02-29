import { Card, Container, Row, Col, Image,} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const openCV = () => {
    window.open('/CVEnglish_JesseSillman.pdf', '_blank');
  };

const Home = () => {
  const profilePictureUrl = '/jesseautumn.jpg';

  return (
    <Container className="p-3">
      <Row>
        <Col md={12}>
          <Card className="mb-3">
            <Card.Body>
              <Row>
                {/* Text on the left, centered vertically */}
                <Col md={7} className="d-flex align-items-center">
                  <div>
                  <Card.Title className="text-start fs-2">Hello, my name is Jesse!</Card.Title>
                    <Card.Text className="text-start">
                      I am an enthusiastic IT-engineer student based in Finland, 
                      who has a strong foundation in modern network technologies, 
                      IoT applications, and programming.
                    </Card.Text>
                    <button type="button" className="btn btn-outline-primary mt-3" onClick={openCV}>
                        View my CV
                    </button>
                    <br/>
                    <br/>
                    <a href="https://github.com/jessesillman" target="_blank" rel="noopener noreferrer" className="me-3">
                      <FontAwesomeIcon icon={faGithub} size="2x" />
                    </a>
                    <a href="https://linkedin.com/in/jesse-sillman-5b6912269/" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faLinkedin} size="2x" />
                    </a>
                    </div>
                </Col>
                
                {/* Image on the right */}
                <Col md={5} className="d-flex justify-content-end align-items-center">
                  <Image 
                    src={profilePictureUrl}
                    className="mb-3" 
                    style={{ maxWidth: '100%', height: 'auto' }} 
                  />
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* Footer */}
      <Row>
        <Col className="text-center mt-4">
          <p>&copy; {new Date().getFullYear()} Jesse Sillman - All rights reserved.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
