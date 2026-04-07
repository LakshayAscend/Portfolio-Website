import React from 'react';
import myImage from "./assets/myimage.png";
import { motion } from 'framer-motion';

function About() {
    return (
        <section className="about" id="about">
            <div className="container about-content">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    whileHover={{ scale: 1.05 }}
                    className="about-image-container"
                >
                    <img
                        src={myImage}
                        alt="Lakshay"
                        className="about-img"
                    />
                </motion.div>

                <motion.div
                    className="about-text"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2>About</h2>
                    <p>
                        I'm <strong>Lakshay</strong> — a freelancer who design clean UI
                        and build modern React websites.
                    </p>
                    <p>
                        I also create <strong>automation</strong> workflows with <strong>N8N + AI</strong>
                        to help businesses save time and scale faster.
                    </p>
                    <p>
                        I focus on simple, fast, and premium-looking results
                        with smooth UX and clean code.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}

export default About;
