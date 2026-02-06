import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import ecomapp from "../../assets/two.png";
import music from "../../assets/Music_app_1.jpg";
import clubhive from "../../assets/chatify.png"; // Replace with actual ClubHive image
import emart from "../../assets/chatify.png"; // Replace with actual E-Mart image
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
                    <Col md={6} lg={4} className="project-card">
                        <ProjectCards
                            imgPath={clubhive}
                            isBlog={false}
                            title="ClubHive"
                            description="Full-stack event management platform with secure authentication, role-based access, and integrated payment processing. Features event browsing, filtering, RSVP functionality, chat groups, and Google Maps integration for location visualization."
                            ghLink="https://github.com/Manish123Sharma/ClubHive-Web"
                        />
                    </Col>
                    <Col md={6} lg={4} className="project-card">
                        <ProjectCards
                            imgPath={emart}
                            isBlog={false}
                            title="Electronics Mart"
                            description="Full-featured electronics e-commerce platform with secure authentication, product browsing, search, filtering, and cart management. Admin panel includes 2FA and comprehensive dashboard with analytics on users, sales, and orders."
                            ghLink="https://github.com/Manish123Sharma/E-Mart"
                            demoLink="https://electronicsmartapi.github.io/"
                        />
                    </Col>
                    <Col md={6} lg={4} className="project-card">
                        <ProjectCards
                            imgPath={music}
                            isBlog={false}
                            title="Music App"
                            description="Sleek music streaming app using iTunes API for real-time discovery, search, and playback. Features include album art display, custom audio player with full controls, responsive UI, lazy loading, and optimized API handling."
                            ghLink="https://github.com/Manish123Sharma/Projects/tree/main/music_app"
                        />
                    </Col>
                    <Col md={6} lg={4} className="project-card">
                        <ProjectCards
                            imgPath={ecomapp}
                            isBlog={false}
                            title="E-Commerce Mobile App"
                            description="Flutter-based multi-role e-commerce app with Firebase backend and REST APIs. Features product browsing, Razorpay checkout, order tracking for buyers, and product/revenue management for sellers with real-time FCM notifications."
                            ghLink="https://github.com/Manish123Sharma/Projects/tree/main/e_commerce_app_1"
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Projects;