import React, { useState, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate
} from "react-router-dom";
import Pre from './components/Pre';
import NavBar from './components/Navbar';
import "./index.css";
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import ScrollToTop from './components/ScrollToTop';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import About from './components/About/About';
import Resume from './components/Resume/Resume';
import Experience from './components/Resume/Experience';
import Contact from './components/Contact/Contact';
import Skills from './components/Skills/Skills';
import { ThemeProvider } from './context/ThemeContext';

const App = () => {
    const [load, setLoad] = useState(true);
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoad(false);
        }, 1200);

        return () => clearTimeout(timer);
    }, []);

    // Scroll progress handler
    useEffect(() => {
        const handleScroll = () => {
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight - windowHeight;
            const scrollTop = window.scrollY;
            const progress = (scrollTop / documentHeight) * 100;
            setScrollProgress(progress);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    return (
        <ThemeProvider>
            <Router>
                {/* Scroll Progress Bar */}
                <div 
                    className="scroll-progress-bar" 
                    style={{ width: `${scrollProgress}%` }}
                />
                <Pre load={load} />
                <div className="App" id={load ? "no-scroll" : "scroll"}>
                    <NavBar />
                    <ScrollToTop />
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path="/project" element={<Projects />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/resume" element={<Experience />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/skills" element={<Skills />} />
                        <Route path="*" element={<Navigate to="/" />} />
                    </Routes>
                </div>
            </Router>
        </ThemeProvider>
    );
}

export default App;
