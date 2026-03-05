import React, { useState } from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import PropTypes from "prop-types";
import '../../App.css';
import '../../index.css';

const ProjectCards = (props) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    return (
        <Card className="project-card-view">
            <div className="card-image-wrapper">
                {/* Lazy loading with skeleton */}
                {!imageLoaded && (
                    <div className="image-skeleton" style={{
                        height: '250px',
                        background: 'linear-gradient(90deg, rgba(0,217,255,0.1) 25%, rgba(199,112,240,0.1) 50%, rgba(0,217,255,0.1) 75%)',
                        backgroundSize: '200% 100%',
                        animation: 'shimmer 1.5s infinite'
                    }}></div>
                )}
                <Card.Img 
                    variant="top" 
                    src={props.imgPath} 
                    alt="card-img"
                    loading="lazy"
                    onLoad={() => setImageLoaded(true)}
                    style={{ opacity: imageLoaded ? 1 : 0 }}
                />
                <div className="card-overlay"></div>
            </div>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text
                    style={{
                        textAlign: "justify",
                        display: "-webkit-box",
                        WebkitLineClamp: 4,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        marginBottom: "15px",
                        flexGrow: 1
                    }}
                >
                    {props.description}
                </Card.Text>

                {/* Tech Stack Badges */}
                {props.techStack && (
                    <div className="tech-badges">
                        {props.techStack.map((tech, index) => (
                            <span key={index} className="tech-badge">{tech}</span>
                        ))}
                    </div>
                )}

                <div style={{ marginTop: "auto" }}>
                    <Button variant="primary" href={props.ghLink} target="_blank" className="project-btn">
                        <BsGithub /> &nbsp;
                        {props.isBlog ? "Blog" : "GitHub"}
                    </Button>
                    {"\n"}
                    {"\n"}
                    {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}
                    {!props.isBlog && props.demoLink && (
                        <Button
                            variant="primary"
                            href={props.demoLink}
                            target="_blank"
                            className="project-btn demo-btn"
                        >
                            <CgWebsite /> &nbsp;
                            {"Demo"}
                        </Button>
                    )}
                </div>
            </Card.Body>
        </Card>
    );
}

ProjectCards.propTypes = {
    imgPath: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    ghLink: PropTypes.string.isRequired,
    isBlog: PropTypes.bool,
    demoLink: PropTypes.string,
    maxLines: PropTypes.number,
    techStack: PropTypes.arrayOf(PropTypes.string)
};

export default ProjectCards;
