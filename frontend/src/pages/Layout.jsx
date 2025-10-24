import { Outlet, Link } from "react-router-dom";
import { Nav, Navbar, Container, Dropdown } from 'react-bootstrap';
import { useState } from 'react';
import en from '../localization/en.json';
import fin from '../localization/fin.json';

const localization = { en, fin };

const Layout = () => {
  const [language, setLanguage] = useState('en');
  const t = localization[language].Navbar;

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">Jesse Sillman</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">{t.home}</Nav.Link>
              <Nav.Link as={Link} to="/skills">{t.skills}</Nav.Link>
              <Nav.Link as={Link} to="/projects">{t.projects}</Nav.Link>
              <Nav.Link as={Link} to="/contact">{t.contact}</Nav.Link>
              <Dropdown align="end" className="ms-3">
                <Dropdown.Toggle variant="link" id="dropdown-language" style={{ color: "black", textDecoration: "none" }}>
                
                  {language.toUpperCase()}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => setLanguage('en')}>English</Dropdown.Item>
                  <Dropdown.Item onClick={() => setLanguage('fin')}>Suomi</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
      <Container className="mt-3">
        <Outlet context={{ language, setLanguage }} />
      </Container>
    </>
  );
};

export default Layout;
