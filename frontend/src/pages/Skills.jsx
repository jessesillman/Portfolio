import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { useOutletContext } from 'react-router-dom';
import en from '../localization/en.json';
import fin from '../localization/fin.json';
import '../Skills.modules.css';

const localization = { en, fin };

const Skills = () => {
  const { language } = useOutletContext();
  const t = localization[language].Skills;

  return (
    <Container className="p-3">
      <Row className="mb-3">
        <Col md={12}>
          <Card>
          <Card.Header style={{ fontWeight: 'bold' }}>{t.title}</Card.Header>
            <Card.Body>
              <Card.Text>
                {t.description}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col md={12}>
          <Card>
            <Card.Header>{t.languages}</Card.Header>
            <Card.Body>
              {Object.values(t.languagesList).map((lang, idx) => (
                <Button key={lang + idx} variant="outline-primary" className="custom-outline-primary non-interactive" style={{ margin: '5px' }}>
                  {lang}
                </Button>
              ))}
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col md={12}>
          <Card>
            <Card.Header>{t.frontend}</Card.Header>
            <Card.Body>
              {Object.values(t.frontendList).map((item, idx) => (
                <Button key={item + idx} variant="outline-primary" className="custom-outline-primary non-interactive" style={{ margin: '5px' }}>
                  {item}
                </Button>
              ))}
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col md={12}>
          <Card>
            <Card.Header>{t.backend}</Card.Header>
            <Card.Body>
              {Object.values(t.backendList).map((item, idx) => (
                <Button key={item + idx} variant="outline-primary" className="custom-outline-primary non-interactive" style={{ margin: '5px' }}>
                  {item}
                </Button>
              ))}
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col md={12}>
          <Card>
            <Card.Header>{t.devops}</Card.Header>
            <Card.Body>
              {Object.values(t.devopsList).map((item, idx) => (
                <Button key={item + idx} variant="outline-primary" className="custom-outline-primary non-interactive" style={{ margin: '5px' }}>
                  {item}
                </Button>
              ))}
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col md={12}>
          <Card>
            <Card.Header>Networking certificates issued by Cisco</Card.Header>
            <Card.Body>
            <div className="d-flex flex-wrap">
                <a href="https://www.credly.com/badges/daa3893d-d70c-4e26-b2c3-52509eb95bd9/public_url" style={{ textDecoration: 'none', margin: '5px', marginBottom: '10px' }}>
                    <Button variant="outline-primary">Networking Essentials</Button>
                </a>
                <a href="https://www.credly.com/badges/08aaaa80-a8c3-4d22-92d7-8d1f5954db06/public_url" style={{ textDecoration: 'none', margin: '5px', marginBottom: '10px' }}>
                    <Button variant="outline-primary">CCNA: Introduction to Networks</Button>
                </a>
                <a href="https://www.credly.com/badges/6801c4f4-6208-4ecc-87c3-0140aefa7c97/public_url" style={{ textDecoration: 'none', margin: '5px', marginBottom: '10px' }}>
                    <Button variant="outline-primary">CCNA: Switching, Routing, and Wireless Essentials</Button>
                </a>
                <a href="https://www.credly.com/badges/03f2c42a-a674-4a3f-a88b-8a28a4f38f1e/public_url" style={{ textDecoration: 'none', margin: '5px', marginBottom: '10px' }}>
                    <Button variant="outline-primary">CCNA: Enterprise Networking, Security, and Automation</Button>
                </a>
            </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col md={12}>
          <Card>
            <Card.Header>Certificate issued by AWS Academy</Card.Header>
            <Card.Body>
              <div className="d-flex flex-wrap">
              <a href="https://www.credly.com/badges/d28a22d6-06e6-47d4-b42f-56abfb486887/public_url" style={{ textDecoration: 'none', margin: '5px', marginBottom: '10px' }}>
                <Button variant="outline-primary">Cloud Foundations</Button>
              </a>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col className="text-center mt-4">
          <p>&copy; {new Date().getFullYear()} Jesse Sillman - All rights reserved.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Skills;