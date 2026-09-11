import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { motion, AnimatePresence } from 'framer-motion';
import agarwal from "../../assets/Agarwal_Logo.png";
import jain from "../../assets/Jain_Logo.png";
import maheshwari from "../../assets/Maheshwari_Logo.png";
import gtp from "../../assets/gtp.svg";
import ProjectCards from './ProjectCards';

const Projects = () => {
    const projects = [
        {
            imgPath: agarwal,
            title: "Agarwal2Agarwal Matrimony",
            description: "Agarwal2Agarwal.org Matrimony is a trusted matrimonial platform designed exclusively for the Agarwal community. The app helps individuals and families find compatible life partners through community-only profiles, advanced search filters, and several other features. I developed this app for the company, helping maintain strong cultural values and family-first matchmaking. \n Powered by Agarwal2Agarwal.org, this platform has been serving the community for many years, helping members connect with suitable matches who share similar cultural values, traditions, and family backgrounds.",
            demoLink: "https://play.google.com/store/apps/details?id=org.agarwal2agarwal.matrimony&hl=en_IN",
            techStack: ["Flutter", "Firebase", "Dart", "Api Integration"]
        },
        {
            imgPath: jain,
            title: "Jain2Jain Matrimony",
            description: "Jain2Jain.org Matrimony is a trusted matrimonial platform designed exclusively for the Jain community. The app helps individuals and families find compatible life partners through community-only profiles, advanced search filters, and several other features. I developed this app for the company, helping strengthen community matchmaking with familiar values and traditions. \n Powered by Jain2Jain.org, this platform has been serving the community for many years, helping members connect with suitable matches who share similar cultural values, traditions, and family backgrounds.",
            demoLink: "https://play.google.com/store/apps/details?id=org.jain2jain.matrimony&hl=en_IN",
            techStack: ["Flutter", "Firebase", "Dart", "Api Integration"]
        },
        {
            imgPath: maheshwari,
            title: "Maheshwari.org Matrimony",
            description: "Maheshwari.org Matrimony is a trusted matrimonial platform designed exclusively for the Maheshwari community. The app helps individuals and families find compatible life partners through community-only profiles, advanced search filters, and several other features. I developed this app for the company, helping connect families and partners with shared cultural values and traditions. \n Powered by Maheshwari.org, this platform has been serving the community for many years, helping members connect with suitable matches who share similar cultural values, traditions, and family backgrounds.",
            demoLink: "https://play.google.com/store/apps/details?id=org.maheshwari.matrimony&hl=en_IN",
            techStack: ["Flutter", "Firebase", "Dart", "Api Integration"]
        },
        {
            imgPath: gtp,
            title: "Good Times Partnership",
            description: "Welcome to Good Times Partnership – an engagement program for the UBL retail partners. The app is designed to encourage and reward the partners for their efforts in sales. The partners can participate by enrolling in the program on the app. \n Download now and start earning rewards for your performance smoothly!",
            demoLink: "https://play.google.com/store/apps/details?id=com.fourmm.GoodTimesPartnerUB&hl=en_IN",
            appLink: "https://apps.apple.com/in/app/good-times-partner/id6636486399",
            techStack: ["Flutter", "Dart", "REST APIs"]
        }
    ];

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
            <Container>
                <motion.h1 
                    className="project-heading"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    My Recent <strong className="purple">Works </strong>
                </motion.h1>

                <p style={{ color: "var(--text-secondary)", textAlign: 'center', marginBottom: '30px' }}>
                    Here are a few projects I've worked on recently.
                </p>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                        <AnimatePresence>
                            {projects.map((project, index) => (
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
                                            appLink={project.appLink}
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
