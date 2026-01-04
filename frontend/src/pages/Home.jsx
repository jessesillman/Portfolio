import { Card, Container, Row, Col, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faDiscord } from '@fortawesome/free-brands-svg-icons';
import { useOutletContext } from 'react-router-dom';
import en from '../localization/en.json';
import fin from '../localization/fin.json';

const localization = { en, fin };

const openCV = () => {
  window.open('/CV2025.pdf', '_blank');
};

const Home = () => {
  const { language } = useOutletContext();
  const t = localization[language].Home;
  const profilePictureUrl = '/jesseportfolio.jpg';

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
                    <Card.Title className="text-start fs-2">{t.greeting}</Card.Title>
                    <Card.Text className="text-start">
                      {t.introduction}
                    </Card.Text>
                    <button type="button" className="btn btn-outline-primary mt-3 me-2" onClick={openCV}>
                      {t.cv}
                    </button>
                    <button type="button" className="btn btn-outline-primary mt-3 me-2" onClick={() => window.open('https://www.credly.com/users/jesse-sillman')}>
                      {t.cisco}
                    </button>
                    <button type="button" className="btn btn-outline-primary mt-3" onClick={() => window.open('https://www.credly.com/users/jesse-sillman.529aa756')}>
                      {t.aws}
                    </button>

                    <br/>
                    <Card.Text className="text-start mt-3">
                      <b>{t.transcript}</b>
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
