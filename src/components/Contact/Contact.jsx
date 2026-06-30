import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import emailjs from '@emailjs/browser';
import Particle from '../Particle';

const SERVICE_ID = 'mks_830';
const TEMPLATE_ID = 'template_avkz3ke';
const PUBLIC_KEY = '9I2eQqmVAsZAUsAss';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        emailjs.send(
            SERVICE_ID,
            TEMPLATE_ID,
            {
                name: formData.name,
                email: formData.email,
                message: formData.message,
                title: `Portfolio Contact from ${formData.name}`,
            },
            PUBLIC_KEY
        ).then(() => {
            setSubmitted(true);
            setLoading(false);
        }).catch(() => {
            setError('Something went wrong. Please try again or email me directly.');
            setLoading(false);
        });
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
                                        <h4>Message Sent!</h4>
                                        <p>Thanks for reaching out. I'll get back to you soon.</p>
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
                                        {error && (
                                            <p style={{ color: '#ff6b6b', textAlign: 'center', marginBottom: '12px' }}>{error}</p>
                                        )}
                                        <div className="text-center">
                                            <Button type="submit" className="contact-btn" disabled={loading}>
                                                {loading ? 'Sending...' : 'Send Message'}
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
