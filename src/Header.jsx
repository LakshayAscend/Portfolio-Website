import React, { useState } from 'react'
function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMenuOpen(false); // Close menu on navigation
    };
    return (
        <header className="header">
            <div className="header-content">
                <a href="#" className="logo">Lakshay<span className="dot">.</span></a>

                <button
                    className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
                    onClick={toggleMenu}
                    aria-label="Toggle Menu"
                >
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>

                <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
                    <ul className="nav-links">
                        <li><a href="#home" className="nav-link active" onClick={() => setIsMenuOpen(false)}>Home</a></li>
                        <li><a href="#projects" className="nav-link" onClick={() => setIsMenuOpen(false)}>Projects</a></li>
                        <li><a href="#skills" className="nav-link" onClick={() => setIsMenuOpen(false)}>Skills</a></li>
                        <li><a href="#about" className="nav-link" onClick={() => setIsMenuOpen(false)}>About</a></li>
                        <li className="mobile-only">
                            <button className="btn primary small" onClick={() => scrollToSection("contact")}>Hire Me</button>
                        </li>
                    </ul>
                </nav>

                <button className="btn primary small desktop-only" onClick={() => { scrollToSection("contact") }} >Hire Me</button>
            </div>
        </header>
    );
}

export default Header;