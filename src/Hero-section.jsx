import React from 'react'
import avatar from "./assets/avatar.jpg";
import { Snowfall } from 'react-snowfall';
import { motion } from 'framer-motion';

function HeroSection() {
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="hero" id="home">
            <Snowfall
                snowflakeCount={35}
                speed={[0.4, 1]}
                radius={[0.5, 1.5]}
            />
            <div className="container hero-content">
                <motion.div
                    className="hero-text"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h1>Hi, I’m <span className="highlight">Lakshay</span> 👋</h1>
                    <p>I design and build modern web interfaces. Passionate about creating seamless user experiences.</p>

                    <div className="hero-actions">
                        <button className="btn primary" onClick={() => { scrollToSection("projects") }}>View Projects</button>
                        <button className="btn secondary" onClick={() => { scrollToSection("contact") }}>Contact Me</button>
                    </div>
                </motion.div>

                <motion.div
                    className="hero-image-container"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    whileHover={{ scale: 1.05 }}
                >
                    <img
                        src={avatar}
                        alt="Lakshay - Developer"
                        className="hero-img"
                    />
                    <div className="hero-img-bg"></div>
                </motion.div>
            </div>
        </section>
    );
}

export default HeroSection;
