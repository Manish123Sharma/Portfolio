import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';
import homeLogo from "../../assets/home-main.svg";
import Particle from '../Particle';
import Home2 from './Home2';
import Type from './Type';

const Home = () => {
    const navigate = useNavigate();
    
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                duration: 0.8
            }
        }
    };

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                duration: 1,
                delay: 0.5
            }
        },
        hover: {
            y: [-5, 5, -5],
            transition: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    return (
        <section>
            <Container fluid className="home-section" id="home">
                <Particle />
                <Container className="home-content">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <Row>
                            <Col md={7} className="home-header">
                                <motion.h1 
                                    style={{ paddingBottom: 15 }} 
                                    className="heading"
                                    variants={itemVariants}
                                >
                                    Hi There!{" "}
                                    <span className="wave" role="img" aria-labelledby="wave">
                                        👋🏻
                                    </span>
                                </motion.h1>

                                <motion.h1 
                                    className="heading-name"
                                    variants={itemVariants}
                                >
                                    I'M
                                    <strong className="main-name"> MANISH KUMAR SHARMA</strong>
                                </motion.h1>

                                <motion.div 
                                    style={{ padding: 50, textAlign: "left" }}
                                    variants={itemVariants}
                                >
                                    <Type />
                                </motion.div>

                                {/* CTA Buttons */}
                                <motion.div 
                                    style={{ 
                                        paddingTop: 20, 
                                        display: 'flex', 
                                        gap: '20px',
                                        flexWrap: 'wrap'
                                    }}
                                    variants={itemVariants}
                                >
                                    <button 
                                        onClick={() => navigate('/project')}
                                        className="cta-button"
                                        style={{
                                            background: 'linear-gradient(135deg, #00d9ff 0%, #c770f0 100%)',
                                            border: 'none',
                                            padding: '12px 30px',
                                            fontSize: '1.1rem',
                                            fontWeight: 600,
                                            borderRadius: '30px',
                                            cursor: 'pointer',
                                            color: 'white'
                                        }}
                                    >
                                        View My Work
                                    </button>
                                    <button 
                                        onClick={() => navigate('/contact')}
                                        className="cta-button-secondary"
                                        style={{
                                            background: 'transparent',
                                            border: '2px solid #00d9ff',
                                            padding: '10px 28px',
                                            fontSize: '1.1rem',
                                            fontWeight: 600,
                                            borderRadius: '30px',
                                            color: '#00d9ff',
                                            cursor: 'pointer',
                                            transition: 'all 0.3s ease'
                                        }}
                                    >
                                        Contact Me
                                    </button>
                                </motion.div>
                            </Col>
                            <Col md={5} style={{ paddingBottom: 20 }}>
                                <motion.img
                                    src={homeLogo}
                                    alt="home pic"
                                    className="img-fluid"
                                    style={{ maxHeight: "450px" }}
                                    variants={imageVariants}
                                    initial="hidden"
                                    animate="visible"
                                    whileHover="hover"
                                />
                            </Col>
                        </Row>
                    </motion.div>
                </Container>
            </Container>
            <Home2 />
        </section>
    );
}

export default Home;
