import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import ecomapp from "../../assets/two.png";
import music from "../../assets/Music_app_1.jpg";
import chatify from "../../assets/chatify.png";
import Particle from '../Particle';
import ProjectCards from './ProjectCards';
import '../../App.css';
import '../../index.css';

const Projects = () => {
    return (
        <Container fluid className="project-section">
            <Particle />
            <Container>
                <h1 className="project-heading">
                    My Recent <strong className="purple">Works </strong>
                </h1>
                <p style={{ color: "white" }}>
                    Here are a few projects I've worked on recently.
                </p>
                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                    <Col md={4} className="project-card">
                        <ProjectCards
                            imgPath={chatify}
                            isBlog={false}
                            title="Electronics Mart"
                            description="A full-featured electronics e-commerce platform with secure user and admin functionality, including authentication, product browsing/search/filtering, cart management. The admin panel offers 2FAand a dashboard with analytics on users, sales, and orders."
                            ghLink="https://github.com/Manish123Sharma/E-Mart"
                            demoLink="https://electronicsmartapi.github.io/"
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCards
                            imgPath={music}
                            isBlog={false}
                            title="Music App"
                            description="A sleek music streaming app using the iTunes API for real-time music discovery, search, and playback. Features include album art display, a custom audio player with full controls, responsive UI, lazy loading, and optimized API handling."
                            ghLink="https://github.com/Manish123Sharma/Projects/tree/main/music_app"
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCards
                            imgPath={ecomapp}
                            isBlog={false}
                            title="E-Commerce Mobile Application"
                            description="A Flutter-based multi-role (Buyer-Seller) e-commerce app with Firebase backend and REST APIs. Buyers can browse/order products, checkout with Razorpay, and track orders, while sellers can manage products and revenue with real-time updates and FCM alerts."
                            ghLink="https://github.com/Manish123Sharma/Projects/tree/main/e_commerce_app_1"
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Projects;
