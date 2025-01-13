import { Card, Container, Row, Col, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faDiscord } from '@fortawesome/free-brands-svg-icons';

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
                {/* Image for small screens: Shown before the header */}
                <Col xs={12} className="d-md-none text-center">
                  <Image 
                    src={profilePictureUrl}
                    className="mb-3" 
                    style={{ maxWidth: '100%', height: 'auto' }} 
                  />
                </Col>

                {/* Text section */}
                <Col md={7} className="d-flex align-items-center">
                  <div>
                    <Card.Title className="text-start fs-2">Hello, my name is Jesse!</Card.Title>
                    <Card.Text className="text-start">
                      I am an enthusiastic IT-engineer student based in Finland, 
                      who has a strong foundation in modern network technologies, 
                      IoT applications, and programming. I am currently seeking and 
                      an internship as part of my studies, and am also
                      to job opportunities in the IT field.
                    </Card.Text>
                    <button type="button" className="btn btn-outline-primary mt-3" onClick={openCV}>
                      View my CV
                    </button>
                    <br/>
                    <Card.Text className="text-start mt-3">
                      <b>If you would like to view my current transcript of studies, please feel free to contact me directly.</b>
                    </Card.Text>
                    <br/>
                    <a href="https://github.com/jessesillman" target="_blank" rel="noopener noreferrer" className="me-3">
                      <FontAwesomeIcon icon={faGithub} size="2x" />
                    </a>
                    <a href="https://linkedin.com/in/jesse-sillman-5b6912269/" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faLinkedin} size="2x" />
                    </a>
                    <a href="https://discord.gg/nwqQmCJd" target="_blank" rel="noopener noreferrer" className="ms-3">
                      <FontAwesomeIcon icon={faDiscord} size="2x" />
                    </a>
                  </div>
                </Col>

                {/* Image for larger screens: Remains in its original place */}
                <Col md={5} className="d-none d-md-block justify-content-end align-items-center">
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
