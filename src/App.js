//webpages
import Navbar from './components/navbar';
import Social from './components/social';
import Resume from './components/resume';
import Home from './components/home';
import About from './components/about';
import Skills from './components/skills';
import Projects from './components/projects';
import Contact from './components/contact';
import Footer from './components/footer';

//css file
import './index.css';

//bootstrap
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Experience from './components/experience';

function App() {
  return (
    <div style={{
      backgroundColor: '#0a1013',
      minHeight: '100vh',
      fontFamily: 'source-code-pro, Menlo, Monaco, Consolas, Courier New, monospace'
    }}>
      <div className="App">
        <div id="root"></div>
        <Navbar />
        <Social />
        <Resume />
        <Home />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;

