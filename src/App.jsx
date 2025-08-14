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

const App = () => {
    const [load, setLoad] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoad(false);
        }, 1200);

        return () => clearTimeout(timer);
    }, []);


    return (
        <Router>
            <Pre load={load} />
            <div className="App" id={load ? "no-scroll" : "scroll"}>
                <NavBar />
                <ScrollToTop />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path="/project" element={<Projects />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/resume" element={<Resume />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
