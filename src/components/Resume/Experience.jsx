import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { motion } from 'framer-motion';
import Particle from '../Particle';

// Animation hook component
const AnimatedSection = ({ children, delay = 0 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay }}
        >
            {children}
        </motion.div>
    );
};

const TimelineItem = ({ year, title, company, description, icon, delay }) => {
    return (
        <motion.div 
            className="timeline-item"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay }}
        >
            <div className="timeline-dot"></div>
            <div className="timeline-content">
                <span className="timeline-year">{year} {icon}</span>
                <h3 className="timeline-title">{title}</h3>
                <h4 className="timeline-company">{company}</h4>
                <p className="timeline-description">{description}</p>
            </div>
        </motion.div>
    );
};

const Experience = () => {
    const experiences = [
        {
            year: "2024 - Present",
            title: "Software Developer",
            company: "RS Matrimonial",
            description: "Building and maintaining full-stack applications for a matrimonial platform. Working with React, Node.js, and MongoDB to create scalable solutions.",
            icon: "💼"
        },
        {
            year: "2023 - 2024",
            title: "Full Stack Developer (Freelance)",
            company: "Self-employed",
            description: "Delivered multiple web and mobile applications for clients. Specialized in MERN stack and Flutter development with integrated payment solutions.",
            icon: "🚀"
        },
        {
            year: "2022 - 2023",
            title: "Flutter Developer",
            company: "Maheshwari.org",
            description: "Developed and maintained mobile applications for the organization. Implemented new features and optimized app performance.",
            icon: "📱"
        }
    ];

    const education = [
        {
            year: "2019 - 2023",
            title: "B.Tech in Computer Science",
            company: "The NorthCap University",
            description: "Graduated with distinction. Focused on software engineering, web technologies, and mobile app development.",
            icon: "🎓"
        },
        {
            year: "2017 - 2019",
            title: "Higher Secondary Education",
            company: "CBSE Board",
            description: "Science stream with focus on Mathematics and Computer Science.",
            icon: "📚"
        }
    ];

    return (
        <Container fluid className="about-section">
            <Particle />
            <Container>
                <motion.h1 
                    className="project-heading" 
                    style={{ textAlign: 'center', marginBottom: '60px' }}
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    My <strong className="purple">Journey</strong>
                </motion.h1>

                <Row>
                    <Col md={6}>
                        <AnimatedSection>
                            <h2 className="section-title" style={{ color: '#00d9ff', marginBottom: '30px' }}>
                                💼 Work Experience
                            </h2>
                            <div className="timeline">
                                {experiences.map((exp, index) => (
                                    <TimelineItem 
                                        key={index}
                                        year={exp.year}
                                        title={exp.title}
                                        company={exp.company}
                                        description={exp.description}
                                        icon={exp.icon}
                                        delay={index * 0.2}
                                    />
                                ))}
                            </div>
                        </AnimatedSection>
                    </Col>
                    <Col md={6}>
                        <AnimatedSection delay={0.3}>
                            <h2 className="section-title" style={{ color: '#c770f0', marginBottom: '30px', marginTop: '30px' }}>
                                🎓 Education
                            </h2>
                            <div className="timeline">
                                {education.map((edu, index) => (
                                    <TimelineItem 
                                        key={index}
                                        year={edu.year}
                                        title={edu.title}
                                        company={edu.company}
                                        description={edu.description}
                                        icon={edu.icon}
                                        delay={index * 0.2}
                                    />
                                ))}
                            </div>
                        </AnimatedSection>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Experience;
