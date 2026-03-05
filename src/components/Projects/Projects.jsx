import React, { useState } from 'react';
import { Container, Row, Col, Button, ButtonGroup } from "react-bootstrap";
import { motion, AnimatePresence } from 'framer-motion';
import ecomapp from "../../assets/two.png";
import music from "../../assets/Music_app_1.jpg";
import clubhive from "../../assets/emotion.png";
import emart from "../../assets/leaf.png";
import Particle from '../Particle';
import ProjectCards from './ProjectCards';

const Projects = () => {
    const [filter, setFilter] = useState('all');

    const projects = [
        {
            imgPath: clubhive,
            title: "ClubHive",
            description: "Full-stack event management platform with secure authentication, role-based access, and integrated payment processing. Features event browsing, filtering, RSVP functionality, chat groups, and Google Maps integration for location visualization.",
            ghLink: "https://github.com/Manish123Sharma/ClubHive-Web",
            techStack: ["React", "Node.js", "MongoDB", "Payment Gateway"],
            category: "fullstack"
        },
        {
            imgPath: emart,
            title: "Electronics Mart",
            description: "Full-featured electronics e-commerce platform with secure authentication, product browsing, search, filtering, and cart management. Admin panel includes 2FA and comprehensive dashboard with analytics on users, sales, and orders.",
            ghLink: "https://github.com/Manish123Sharma/E-Mart",
            demoLink: "https://electronicsmartapi.github.io/",
            techStack: ["React", "Node.js", "MongoDB", "Firebase"],
            category: "fullstack"
        },
        {
            imgPath: music,
            title: "Music App",
            description: "Sleek music streaming app using iTunes API for real-time discovery, search, and playback. Features include album art display, custom audio player with full controls, responsive UI, lazy loading, and optimized API handling.",
            ghLink: "https://github.com/Manish123Sharma/Projects/tree/main/music_app",
            techStack: ["Flutter", "iTunes API", "Dart"],
            category: "mobile"
        },
        {
            imgPath: ecomapp,
            title: "E-Commerce Mobile App",
            description: "Flutter-based multi-role e-commerce app with Firebase backend and REST APIs. Features product browsing, Razorpay checkout, order tracking for buyers, and product/revenue management for sellers with real-time FCM notifications.",
            ghLink: "https://github.com/Manish123Sharma/Projects/tree/main/e_commerce_app_1",
            techStack: ["Flutter", "Firebase", "Razorpay", "REST API"],
            category: "mobile"
        }
    ];

    const categories = [
        { key: 'all', label: 'All Projects' },
        { key: 'fullstack', label: 'Full Stack' },
        { key: 'mobile', label: 'Mobile' }
    ];

    const filteredProjects = filter === 'all' 
        ? projects 
        : projects.filter(p => p.category === filter);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5
            }
        }
    };

    return (
        <Container fluid className="project-section">
            <Particle />
            <Container>
                <motion.h1 
                    className="project-heading"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    My Recent <strong className="purple">Works </strong>
                </motion.h1>
                
                {/* Filter Buttons */}
                <motion.div 
                    style={{ 
                        textAlign: 'center', 
                        marginBottom: '40px' 
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    <ButtonGroup>
                        {categories.map(cat => (
                            <Button
                                key={cat.key}
                                variant={filter === cat.key ? 'primary' : 'outline-light'}
                                onClick={() => setFilter(cat.key)}
                                className="filter-btn"
                                style={{
                                    background: filter === cat.key 
                                        ? 'linear-gradient(135deg, #00d9ff 0%, #c770f0 100%)' 
                                        : 'transparent',
                                    border: '1px solid rgba(0, 217, 255, 0.3)',
                                    padding: '8px 20px',
                                    margin: '0 5px',
                                    borderRadius: '20px',
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                {cat.label}
                            </Button>
                        ))}
                    </ButtonGroup>
                </motion.div>

                <p style={{ color: "white", textAlign: 'center', marginBottom: '30px' }}>
                    Here are a few projects I've worked on recently.
                </p>
                
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                        <AnimatePresence>
                            {filteredProjects.map((project, index) => (
                                <Col md={6} lg={4} className="project-card" key={index}>
                                    <motion.div
                                        variants={itemVariants}
                                        layout
                                    >
                                        <ProjectCards
                                            imgPath={project.imgPath}
                                            isBlog={false}
                                            title={project.title}
                                            description={project.description}
                                            ghLink={project.ghLink}
                                            demoLink={project.demoLink}
                                            techStack={project.techStack}
                                        />
                                    </motion.div>
                                </Col>
                            ))}
                        </AnimatePresence>
                    </Row>
                </motion.div>
            </Container>
        </Container>
    );
}

export default Projects;
