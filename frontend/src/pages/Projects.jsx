import { useState } from 'react';
import { Card, Container, Row, Col, Modal } from 'react-bootstrap';
import '../Skills.modules.css';

const Projects = () => {
    const [show, setShow] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');

    const handleClose = () => setShow(false);
    const handleShow = (image) => {
        setSelectedImage(image);
        setShow(true);
    };

    return (
        <Container className="p-3">
            <Row className="mb-3">
                <Col md={12}>
                    <Card>
                        <Card.Header style={{ fontWeight: 'bold' }}>Projects</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                More projects will be updated in this page soon. Feel free to check out my <a href="https://github.com/jessesillman" target="_blank" rel="noopener noreferrer">GitHub profile</a> in the meantime.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                    <Card className="mb-3">
                        <Card.Header style={{ fontWeight: 'bold' }}>Weather Station for ESP32 (IoT)</Card.Header>
                        <Card.Body>
                            <Card.Text>
                            This project involved developing a scalable weather station using an ESP32 microcontroller for real-time data collection. It includes a Go-based API, an MQTT broker, 
                            and InfluxDB-Grafana for data storage and visualization. The system is automated with a single startup script for easy deployment.
                            </Card.Text>
                            < br />
                            <div style={{ display: 'flex', overflowX: 'auto' }}>
                                <img
                                    src="/weather-station-hardware(1).jpeg"
                                    alt="Weather Station"
                                    style={{ maxHeight: '200px', marginRight: '10px', cursor: 'pointer' }}
                                    onClick={() => handleShow('/weather-station-hardware(1).jpeg')}
                                />
                                <img
                                    src="/system-architecture.png"
                                    alt="System Architecture"
                                    style={{ maxHeight: '200px', marginRight: '10px', cursor: 'pointer' }}
                                    onClick={() => handleShow('/system-architecture.png')}
                                />
                                <img
                                    src="/grafana-example.jpeg"
                                    alt="Grafana Example"
                                    style={{ maxHeight: '200px', marginRight: '10px', cursor: 'pointer' }}
                                    onClick={() => handleShow('/grafana-example.jpeg')}
                                />
                            </div>
                            < br />
                            <Card.Text>
                            <a href="https://github.com/martimolanes/Iot-Stuff" target="_blank" rel="noopener noreferrer">GitHub</a>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                    <Card className="mb-3">
                        <Card.Header style={{ fontWeight: 'bold' }}>Face Mask Detector (Machine Learning)</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                This project involved preprocessing image dataset from Kaggle, converting annotations into YOLO format, and filtering images for single-person detections.
                                YOLOv11 was used for real-time detection of face masks, and a custom Connvolutional Neural Network (CNN) and RetinaNet were trained to classify masked
                                and unmasked faces.
                            </Card.Text>
                            < br />
                            <div style={{ display: 'flex', overflowX: 'auto' }}>
                                <img
                                    src="/yoloresult2.png"
                                    alt="YOLO Result 2"
                                    style={{ maxHeight: '200px', marginRight: '10px', cursor: 'pointer' }}
                                    onClick={() => handleShow('/yoloresult2.png')}
                                />
                                <img
                                    src="/yoloresult1.png"
                                    alt="YOLO Result 1"
                                    style={{ maxHeight: '200px', marginRight: '10px', cursor: 'pointer' }}
                                    onClick={() => handleShow('/yoloresult1.png')}
                                />
                                <img
                                    src="/customCNN1.png"
                                    alt="Custom CNN"
                                    style={{ maxHeight: '200px', marginRight: '10px', cursor: 'pointer' }}
                                    onClick={() => handleShow('/customCNN1.png')}
                                />
                            </div>
                            < br />
                            <Card.Text>
                            <a href="/REPORTML.pdf" target="_blank" rel="noopener noreferrer">Report</a>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                    <Card className="mb-3">
                        <Card.Header style={{ fontWeight: 'bold' }}>Simple Task/Activity Manager (FullStack)</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                This project involved creating a web application using React for the frontend, styled with Bootstrap, and backend built with Node.js, Express, and
                                PostgreSQL for the database. The project also involved creating a RESTful API for CRUD operations.
                            </Card.Text>
                            < br />
                            <div style={{ display: 'flex', overflowX: 'auto' }}>
                                <img
                                    src="/taskmanager1.png"
                                    alt="Task Manager 1"
                                    style={{ maxHeight: '200px', marginRight: '10px', cursor: 'pointer' }}
                                    onClick={() => handleShow('/taskmanager1.png')}
                                />
                                <img
                                    src="/taskmanager2.png"
                                    alt="Task Manager 2"
                                    style={{ maxHeight: '200px', marginRight: '10px', cursor: 'pointer' }}
                                    onClick={() => handleShow('/taskmanager2.png')}
                                />
                                <img
                                    src="/taskmanager3.png"
                                    alt="Task Manager 3"
                                    style={{ maxHeight: '200px', marginRight: '10px', cursor: 'pointer' }}
                                    onClick={() => handleShow('/taskmanager3.png')}
                                />
                                <img
                                    src="/taskmanager4.png"
                                    alt="Task Manager 4"
                                    style={{ maxHeight: '200px', maxWidth: '700px', marginRight: '10px', cursor: 'pointer' }}
                                    onClick={() => handleShow('/taskmanager4.png')}
                                />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                    <Card className="mb-3">
                        <Card.Header style={{ fontWeight: 'bold' }}>Fitness Tracker Application with Tkinter Python</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                This project involved creating a fitness tracker application using Tkinter in Python. The application allows users to track their workouts, calculate
                                calories burned and bmi, and set a meal plan. The aim was to get acquainted with GUI programming in Python.


                            </Card.Text>
                            < br />
                            <div style={{ display: 'flex', overflowX: 'auto' }}>
                                <img
                                    src="/ossmain.png"
                                    alt="Fitness Tracker 1"
                                    style={{ maxHeight: '200px', marginRight: '10px', cursor: 'pointer' }}
                                    onClick={() => handleShow('/ossmain.png')}
                                />
                                <img
                                    src="/osscalories.png"
                                    alt="Fitness Tracker 2"
                                    style={{ maxHeight: '200px', marginRight: '10px', cursor: 'pointer' }}
                                    onClick={() => handleShow('/osscalories.png')}
                                />
                                <img
                                    src="/ossworkout.png"
                                    alt="Fitness Tracker 3"
                                    style={{ maxHeight: '200px', marginRight: '10px', cursor: 'pointer' }}
                                    onClick={() => handleShow('/taskmanager3.png')}
                                />
                                <img
                                    src="/bmicalculator.png"
                                    alt="Fitness Tracker 4"
                                    style={{ maxHeight: '200px', marginRight: '10px', cursor: 'pointer' }}
                                    onClick={() => handleShow('/bmicalculator.png')}
                                />
                                <img
                                    src="/dietplan.png"
                                    alt="Fitness Tracker 5"
                                    style={{ maxHeight: '200px', marginRight: '10px', cursor: 'pointer' }}
                                    onClick={() => handleShow('/dietplan.png')}
                                />
                                <img
                                    src="/tutorials.png"
                                    alt="Fitness Tracker 6"
                                    style={{ maxHeight: '200px', marginRight: '10px', cursor: 'pointer' }}
                                    onClick={() => handleShow('/tutorials.png')}
                                />
                            </div>
                            < br />
                            <Card.Text>
                            <a href="https://github.com/jessesillman/OSSProject" target="_blank" rel="noopener noreferrer">GitHub</a>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                    <Card className="mb-3">
                        <Card.Header style={{ fontWeight: 'bold' }}>Simple mobile app projects using Java on Android Studio</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                These projects involved creating simple mobile applications using Java on Android Studio. The applications include a simple calculator with intent operations, image viewer, and a media player. The aim was to get acquainted
                                with android development and Java programming.


                            </Card.Text>
                            < br />
                            <div style={{ display: 'flex', overflowX: 'auto' }}>
                                <img
                                    src="/imageviewer.png"
                                    alt="Image Viewer"
                                    style={{ maxHeight: '200px', marginRight: '10px', cursor: 'pointer' }}
                                    onClick={() => handleShow('/imageviewer.png')}
                                />
                                <img
                                    src="/mediaplayer.png"
                                    alt="Media Player"
                                    style={{ maxHeight: '200px', marginRight: '10px', cursor: 'pointer' }}
                                    onClick={() => handleShow('/mediaplayer.png')}
                                />
                                <img
                                    src="/intent.png"
                                    alt="Intent"
                                    style={{ maxHeight: '200px', marginRight: '10px', cursor: 'pointer' }}
                                    onClick={() => handleShow('/intent.png')}
                                />
                            </div>
                            < br />
                            <Card.Text>
                                GitHub: 
                                <a href="https://github.com/jessesillman/IntentJava" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px' }}>IntentJava</a> | 
                                <a href="https://github.com/jessesillman/ImageViewerJava" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px' }}>ImageViewerJava</a> | 
                                <a href="https://github.com/jessesillman/MediaPlayerJava" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px' }}>MediaPlayerJava</a>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                    <Card className="mb-3">
                        <Card.Header style={{ fontWeight: 'bold' }}>The demonstration of GitLab CI/CD and Azure with container images</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                This video demonstrates how to set up a GitLab CI/CD pipeline to build and push a container image to the Azure Container Registry. 
                            </Card.Text>
                            < br />
                            <div className="video-container" style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', maxWidth: '100%', background: '#000', marginBottom: '10px' }}>
                                <iframe
                                    src="https://www.youtube.com/embed/M_MH6tnjRAU"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    title="GitLab CI/CD and Azure Demonstration"
                                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                                ></iframe>
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

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Image Preview</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ textAlign: 'center' }}>
                    <img src={selectedImage} alt="Selected" style={{ width: '100%' }} />
                </Modal.Body>
            </Modal>
        </Container>
    );
};

export default Projects;