import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import '../Skills.modules.css';

const Projects = () => {
    return (
        <Container className="p-3">
      <Row className="mb-3">
        <Col md={12}>
          <Card>
          <Card.Header style={{ fontWeight: 'bold' }}>Projects</Card.Header>
            <Card.Body>
              <Card.Text>
                My projects will be updated in this page soon. Feel free to check out my <a href="https://github.com/jessesillman" target="_blank" rel="noopener noreferrer">GitHub profile</a> in the meantime.
              </Card.Text>
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

export default Projects;