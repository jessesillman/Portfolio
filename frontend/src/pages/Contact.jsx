import { useRef } from 'react';
import { Card, Container, Row, Col, Form, Button } from 'react-bootstrap';
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faDiscord } from '@fortawesome/free-brands-svg-icons';
import { useOutletContext } from 'react-router-dom';
import en from '../localization/en.json';
import fin from '../localization/fin.json';

const localization = { en, fin };

const ContactForm = () => {
  const { language } = useOutletContext();
  const t = localization[language].Contact;
  const formRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(() => {
        alert(t.formSent || 'Message sent.');
        formRef.current.reset();
      }, (error) => {
        console.error('EmailJS error:', error);
        alert(t.formSendError || 'There was a problem sending your message.');
      });
  };

  return (
    <Container className="p-3">
      <Row>
        <Col md={12}>
          <Card className="mb-3">
            <Card.Header style={{ fontWeight: 'bold' }}>{t.contactTitle}</Card.Header>
            <Card.Body>
              <p><strong>{t.emailLabel}:</strong> <a href="mailto:jesse.sillman@yahoo.com">jesse.sillman@yahoo.com</a></p>
              <p><strong>{t.phoneLabel}:</strong> <a href="tel:+35840139866">+35840139866</a></p>
              <a href="https://github.com/jessesillman" target="_blank" rel="noopener noreferrer" className="me-3">
                      <FontAwesomeIcon icon={faGithub} size="2x" />
                    </a>
                    <a href="https://linkedin.com/in/jesse-sillman-5b6912269/" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faLinkedin} size="2x" />
                    </a>
                    <a href="https://discord.gg/nwqQmCJd" target="_blank" rel="noopener noreferrer" className="ms-3">
                      <FontAwesomeIcon icon={faDiscord} size="2x" />
                    </a>
            </Card.Body>
          </Card>
          <Card className="mb-3">
            <Card.Header style={{ fontWeight: 'bold' }}>{t.keepInTouch}</Card.Header>
            <Card.Body>
              <Form ref={formRef} onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label>{t.formName}</Form.Label>
                  <Form.Control name="name" type="text" placeholder={t.formNamePlaceholder} required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>{t.formEmail}</Form.Label>
                  <Form.Control name="email" type="email" placeholder={t.formEmailPlaceholder} required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicTitle">
                  <Form.Label>{t.formTitle}</Form.Label>
                  <Form.Control name="title" type="text" placeholder={t.formTitlePlaceholder} required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicMessage">
                  <Form.Label>{t.formMessage}</Form.Label>
                  <Form.Control name="message" as="textarea" rows={3} placeholder={t.formMessagePlaceholder} required />
                </Form.Group>

                <Button variant="primary" type="submit">
                  {t.formSubmit}
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
