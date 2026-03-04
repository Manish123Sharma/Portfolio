import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Particle from '../Particle';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Create mailto link with form data
        const subject = `Portfolio Contact from ${formData.name}`;
        const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
        window.location.href = `mailto:mksharma256001@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        setSubmitted(true);
    };

    return (
        <Container fluid className="about-section">
            <Particle />
            <Container>
                <h1 className="project-heading" style={{ textAlign: 'center', marginBottom: '40px' }}>
                    Get In <strong className="purple">Touch</strong>
                </h1>
                <Row style={{ justifyContent: 'center' }}>
                    <Col md={8} lg={6}>
                        <div className="contact-card">
                            <p style={{ textAlign: 'center', color: 'rgba(255,255,255,0.7)', marginBottom: '30px' }}>
                                Have a project in mind or want to collaborate? Feel free to reach out!
                            </p>
                            <Form onSubmit={handleSubmit}>
                                {submitted ? (
                                    <div className="success-message">
                                        <h4>Thank you for your message! 📧</h4>
                                        <p>Your email client should have opened. If not, please email me directly at:</p>
                                        <a href="mailto:mksharma256001@gmail.com" className="email-link">mksharma256001@gmail.com</a>
                                    </div>
                                ) : (
                                    <>
                                        <Form.Group className="mb-4">
                                            <Form.Control
                                                type="text"
                                                placeholder="Your Name"
                                                name="name"
                                                value={formData.name}
                                                onChange={(e) => setFormData({...formData, name: e.target.value})}
                                                required
                                                className="contact-input"
                                            />
                                        </Form.Group>
                                        <Form.Group className="mb-4">
                                            <Form.Control
                                                type="email"
                                                placeholder="Your Email"
                                                name="email"
                                                value={formData.email}
                                                onChange={(e) => setFormData({...formData, email: e.target.value})}
                                                required
                                                className="contact-input"
                                            />
                                        </Form.Group>
                                        <Form.Group className="mb-4">
                                            <Form.Control
                                                as="textarea"
                                                rows={5}
                                                placeholder="Your Message"
                                                name="message"
                                                value={formData.message}
                                                onChange={(e) => setFormData({...formData, message: e.target.value})}
                                                required
                                                className="contact-input"
                                            />
                                        </Form.Group>
                                        <div className="text-center">
                                            <Button type="submit" className="contact-btn">
                                                Send Message
                                            </Button>
                                        </div>
                                    </>
                                )}
                            </Form>
                        </div>
                    </Col>
                </Row>
                
                <Row style={{ justifyContent: 'center', marginTop: '50px' }}>
                    <Col md={12} style={{ textAlign: 'center' }}>
                        <h3 style={{ color: 'white', marginBottom: '20px' }}>Other Ways to Connect</h3>
                        <div className="social-links">
                            <a 
                                href="https://github.com/Manish123Sharma" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="social-link"
                                style={{ color: 'white', textDecoration: 'none' }}
                            >
                                GitHub
                            </a>
                            <a 
                                href="https://www.linkedin.com/in/mks001/" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="social-link"
                                style={{ color: 'white', textDecoration: 'none' }}
                            >
                                LinkedIn
                            </a>
                            <a 
                                href="https://instagram.com/mks_830" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="social-link"
                                style={{ color: 'white', textDecoration: 'none' }}
                            >
                                Instagram
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Contact;
