import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Particle from '../Particle';

const SkillBar = ({ name, percentage, icon }) => {
    const [width, setWidth] = useState(0);
    
    useEffect(() => {
        // Trigger animation after component mounts
        const timer = setTimeout(() => {
            setWidth(percentage);
        }, 300);
        return () => clearTimeout(timer);
    }, [percentage]);

    return (
        <div className="skill-item">
            <div className="skill-header">
                <span className="skill-icon">{icon}</span>
                <span className="skill-name">{name}</span>
                <span className="skill-percentage">{percentage}%</span>
            </div>
            <div className="skill-bar-container">
                <div 
                    className="skill-bar-fill" 
                    style={{ width: `${width}%` }}
                >
                    <div className="skill-bar-glow"></div>
                </div>
            </div>
        </div>
    );
};

const Skills = () => {
    const skills = [
        { name: "React.js", percentage: 94, icon: "⚛️" },
        { name: "Node.js", percentage: 85, icon: "🟢" },
        { name: "Flutter", percentage: 95, icon: "📱" },
        { name: "MongoDB", percentage: 80, icon: "🍃" },
        { name: "JavaScript", percentage: 95, icon: "📜" },
        { name: "Firebase", percentage: 90, icon: "🔥" },
    ];

    return (
        <Container fluid className="about-section">
            <Particle />
            <Container>
                <h1 className="project-heading" style={{ textAlign: 'center', marginBottom: '50px' }}>
                    My <strong className="purple">Skills</strong>
                </h1>
                <Row style={{ justifyContent: 'center' }}>
                    <Col md={10} lg={8}>
                        <div className="skills-container">
                            {skills.map((skill, index) => (
                                <SkillBar 
                                    key={index}
                                    name={skill.name}
                                    percentage={skill.percentage}
                                    icon={skill.icon}
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
