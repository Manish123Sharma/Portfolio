import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { motion } from 'framer-motion';
import Particle from '../Particle';

const SkillBar = ({ name, percentage, icon, delay }) => {
    const [width, setWidth] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    
    useEffect(() => {
        // Trigger animation when component mounts
        const timer = setTimeout(() => {
            setWidth(percentage);
            setIsVisible(true);
        }, 300);
        return () => clearTimeout(timer);
    }, [percentage]);

    return (
        <motion.div 
            className="skill-item"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.5, delay: delay }}
        >
            <div className="skill-header">
                <span className="skill-icon">{icon}</span>
                <span className="skill-name">{name}</span>
                <span className="skill-percentage">{percentage}%</span>
            </div>
            <div className="skill-bar-container">
                <motion.div 
                    className="skill-bar-fill" 
                    initial={{ width: 0 }}
                    animate={{ width: `${width}%` }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: delay + 0.2 }}
                >
                    <div className="skill-bar-glow"></div>
                </motion.div>
            </div>
        </motion.div>
    );
};

const SkillCard = ({ category, skills, delay }) => {
    return (
        <motion.div 
            className="skill-category-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: delay }}
        >
            <h3 className="skill-category-title">{category}</h3>
            <div className="skill-category-items">
                {skills.map((skill, index) => (
                    <SkillBar 
                        key={index}
                        name={skill.name}
                        percentage={skill.percentage}
                        icon={skill.icon}
                        delay={delay + index * 0.1}
                    />
                ))}
            </div>
        </motion.div>
    );
};

const Skills = () => {
    const skillCategories = [
        {
            category: "Frontend",
            skills: [
                { name: "React.js", percentage: 94, icon: "⚛️" },
                { name: "JavaScript", percentage: 95, icon: "📜" },
                { name: "HTML/CSS", percentage: 90, icon: "🎨" },
                { name: "Bootstrap", percentage: 88, icon: "🅰️" },
            ]
        },
        {
            category: "Backend",
            skills: [
                { name: "Node.js", percentage: 85, icon: "🟢" },
                { name: "MongoDB", percentage: 80, icon: "🍃" },
                { name: "Express.js", percentage: 82, icon: "🚂" },
                { name: "REST APIs", percentage: 88, icon: "🔗" },
            ]
        },
        {
            category: "Mobile & Tools",
            skills: [
                { name: "Flutter", percentage: 95, icon: "📱" },
                { name: "Firebase", percentage: 90, icon: "🔥" },
                { name: "Git/GitHub", percentage: 85, icon: "📂" },
                { name: "VS Code", percentage: 92, icon: "💻" },
            ]
        }
    ];

    return (
        <Container fluid className="about-section">
            <Particle />
            <Container>
                <motion.h1 
                    className="project-heading" 
                    style={{ textAlign: 'center', marginBottom: '50px' }}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    My <strong className="purple">Skills</strong>
                </motion.h1>
                <Row style={{ justifyContent: 'center' }}>
                    <Col md={12} lg={10}>
                        <div className="skills-grid">
                            {skillCategories.map((category, index) => (
                                <SkillCard 
                                    key={index}
                                    category={category.category}
                                    skills={category.skills}
                                    delay={index * 0.2}
                                />
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Skills;
