import React from 'react';
import Typewriter from "typewriter-effect";

const Type = () => {
    return (
        <Typewriter
            options={{
                strings: [
                    "Full Stack Developer",
                    "MERN Stack Developer",
                    "Flutter Developer",
                    "Problem Solver",
                    "Open Source Contributor",
                    "Freelancer",
                    "Mobile App Developer",
                    "Backend Developer"
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
                typeSpeed: 80,
            }}
        />
    );
}

export default Type;
