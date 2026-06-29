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
            year: "May 2026 - Present",
            title: "Software Developer I",
            company: "Binary Chai",
            description: "Developing and deploying cross-platform Flutter applications for Android & iOS. Building REST APIs with Node.js, implementing FCM for push notifications, and managing state with GetX, Provider, and BLoC.",
            icon: "💼"
        },
        {
            year: "Nov 2025 - May 2026",
            title: "Flutter Developer",
            company: "RS Matrimonial",
            description: "Developed a cross-platform matrimonial app for iOS and Android using Flutter and Dart. Integrated REST APIs, FCM, and Riverpod state management with MVC architecture.",
            icon: "📱"
        },
        {
            year: "Aug 2023 - Oct 2024",
            title: "Flutter Developer",
            company: "Tritan Solutions",
            description: "Built E-commerce and Trading mobile apps serving 10,000+ users. Implemented WebSockets for real-time stock/crypto prices with <200ms latency, handling 50,000+ concurrent data streams.",
            icon: "🚀"
        },
        {
            year: "Apr 2023 - May 2023",
            title: "Flutter Developer",
            company: "Trapthedeal",
            description: "Developed 2 cross-platform mobile apps with Flutter and Dart. Integrated Firebase Auth, Firestore, AWS Cloud Services (S3, Lambda, EC2), and 15+ RESTful APIs.",
            icon: "📱"
        },
        {
            year: "Jan 2023 - Mar 2023",
            title: "Frontend Developer",
            company: "Trapthedeal",
            description: "Designed 10+ responsive web interfaces using HTML5, CSS3, JavaScript (ES6), and Bootstrap. Improved page load performance by 35% and increased user engagement by 30%.",
            icon: "🌐"
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
