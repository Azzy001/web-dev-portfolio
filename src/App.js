//webpages
import Navbar from './components/navbar';
import Home from './components/home';
import About from './components/about';
import Skills from './components/skills';
import Projects from './components/projects';
import Contact from './components/contact';
import Footer from './components/footer';
import Social from './components/social';

//css file
import './index.css';

//bootstrap
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';

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
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;

