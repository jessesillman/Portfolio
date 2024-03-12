import { useRef } from 'react';
import { Card, Container, Row, Col, Form, Button } from 'react-bootstrap';

const ContactForm = () => {
  const formRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      name: event.target.elements.formBasicName.value,
      email: event.target.elements.formBasicEmail.value,
      message: event.target.elements.formBasicMessage.value,
    };
    
    fetch('https://api.render.com/deploy/srv-cno5tc7sc6pc73bbt2sg?key=7IzAvzR4Y78', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(formData),
})
    .then(response => {
      if (response.ok) {
        alert('Message sent successfully!');
        formRef.current.reset();
      } else {
        throw new Error('Network response was not ok.');
      }
    })
    .catch((error) => {
      console.error('Error:', error);
      alert('There was a problem sending your message.');
    });
  };

  return (
    <Container className="p-3">
      <Row>
        <Col md={12}>
          <Card className="mb-3">
            <Card.Header style={{ fontWeight: 'bold' }}>Contact me</Card.Header>
            <Card.Body>
              <Form ref={formRef} onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicMessage">
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" rows={3} placeholder="Enter your message" required />
                </Form.Group>

                <Button variant="outline-primary" type="submit">
                  Submit
                </Button>
              </Form>
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

export default ContactForm;
