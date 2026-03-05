import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';
import laptopImg from "../../assets/about.png";
import Particle from '../Particle';
import AboutCard from './AboutCard';
import TechStack from './TechStack';
import ToolStack from './ToolStack';
import Github from './Github';

const About = () => {
    const navigate = useNavigate();
    
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6
            }
        }
    };

    return (
        <Container fluid className="about-section">
            <Particle />
            <Container>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <Row style={{ justifyContent: "center", padding: "10px" }}>
                        <Col
                            md={7}
                            style={{
                                justifyContent: "center",
                                paddingTop: "30px",
                                paddingBottom: "50px",
                            }}
                        >
                            <motion.h1 
                                style={{ fontSize: "2.1em", paddingBottom: "20px" }}
                                variants={itemVariants}
                            >
                                Know Who <strong className="purple">I'M</strong>
                            </motion.h1>
                            <motion.div variants={itemVariants}>
                                <AboutCard />
                            </motion.div>
                            
                            {/* Hire Me CTA */}
                            <motion.div 
                                style={{ 
                                    marginTop: '30px', 
                                    textAlign: 'center' 
                                }}
                                variants={itemVariants}
                            >
                                <button 
                                    onClick={() => navigate('/contact')}
                                    className="hire-me-btn"
                                    style={{
                                        background: 'linear-gradient(135deg, #00d9ff 0%, #c770f0 100%)',
                                        border: 'none',
                                        padding: '15px 40px',
                                        fontSize: '1.2rem',
                                        fontWeight: 600,
                                        borderRadius: '30px',
                                        boxShadow: '0 5px 20px rgba(0, 217, 255, 0.3)',
                                        transition: 'all 0.3s ease',
                                        cursor: 'pointer',
                                        color: 'white'
                                    }}
                                >
                                    Hire Me 💼
                                </button>
                            </motion.div>
                        </Col>
                        <Col
                            md={5}
                            style={{ paddingTop: "120px", paddingBottom: "50px" }}
                            className="about-img"
                        >
                            <motion.img 
                                src={laptopImg} 
                                alt="about" 
                                className="img-fluid"
                                variants={itemVariants}
                                initial="hidden"
                                animate="visible"
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 100 }}
                            />
                        </Col>
                    </Row>

                    <motion.h1 
                        className="project-heading"
                        variants={itemVariants}
                    >
                        Professional <strong className="purple">Skillset </strong>
                    </motion.h1>
                    <motion.div variants={itemVariants}>
                        <TechStack />
                    </motion.div>
                    
                    <motion.h1 
                        className="project-heading"
                        variants={itemVariants}
                    >
                        <strong className="purple">Tools</strong> I use
                    </motion.h1>
                    <motion.div variants={itemVariants}>
                        <ToolStack />
                    </motion.div>
                    
                    <motion.div variants={itemVariants}>
                        <Github />
                    </motion.div>
                </motion.div>
            </Container>
        </Container>
    );
}

export default About;
