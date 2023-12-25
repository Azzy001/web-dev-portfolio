import React, { useState, useEffect } from 'react';
import image1 from '../images/navbar/vault-1.gif';

const Navbar = () => {
    // State to track the active section
    const [activeSection, setActiveSection] = useState('section-1');

    // Function to scroll to a specific section
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
            setActiveSection(sectionId);
        }
    };

    useEffect(() => {
        // Function to handle intersection changes for sections
        const handleIntersection = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        // Create an Intersection Observer with a callback and root margin
        const sectionObserver = new IntersectionObserver(handleIntersection, {
            rootMargin: '0px 0px -50px 0px', // Adjust the root margin as needed
        });

        // Observe each section by their IDs
        ['section-1', 'section-2', 'section-3', 'section-4', 'section-5'].forEach((sectionId) => {
            const section = document.getElementById(sectionId);
            if (section) {
                sectionObserver.observe(section);
            }
        });

        // Clean up: Disconnect the observer when the component is unmounted
        return () => {
            sectionObserver.disconnect();
        };
    }, []); // Empty dependency array to run the effect only once on mount

    // Render the navigation component
    return (
        <nav className="topnavbar">
            <div className="sections">
                <ul>
                    <img src={image1} alt="" />
                    <li><a href="#section-1"
                        onClick={() => scrollToSection('section-1')}
                        className={activeSection === 'section-1' ? 'active' : ''}>
                        Home</a></li>

                    <li><a href="#section-2"
                        onClick={() => scrollToSection('section-2')}
                        className={activeSection === 'section-2' ? 'active' : ''}>
                        About</a></li>

                    <li><a href="#section-3"
                        onClick={() => scrollToSection('section-3')}
                        className={activeSection === 'section-3' ? 'active' : ''}>
                        Skills</a></li>

                    <li><a href="#section-4"
                        onClick={() => scrollToSection('section-4')}
                        className={activeSection === 'section-4' ? 'active' : ''}>
                        Projects</a></li>

                    <li><a href="#section-5"
                        onClick={() => scrollToSection('section-5')}
                        className={activeSection === 'section-5' ? 'active' : ''}>
                        Contact</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;


