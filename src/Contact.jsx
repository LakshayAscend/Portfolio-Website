import React from 'react';
import { Mail, MessageSquare, User, Twitter, Linkedin, Instagram, Github, Youtube, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {

    return (
        <section className="contact" id="contact">
            <div className="container">
                <motion.div
                    className="contact-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2>Hire Me</h2>
                    <p>Have a project in mind? Let's connect! I'd love to hear from you.</p>
                </motion.div>

                <div className="contact-grid">
                    {/* Left Column: Info Card */}
                    <motion.div
                        className="contact-info-card"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="info-item">
                            <div className="icon-wrapper">
                                <Mail size={24} />
                            </div>
                            <div className="info-text">
                                <h3>Email Me</h3>
                                <p>Feel free to drop me an email.</p>
                                <div className="email-badge">
                                    <span>lakshay@example.com</span>
                                </div>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="icon-wrapper">
                                <MessageSquare size={24} />
                            </div>
                            <div className="info-text">
                                <h3>Connect on Socials</h3>
                                <p>Reach out to me on social media.</p>
                                <div className="social-links">
                                    {[
                                        { Icon: Twitter, size: 20 },
                                        { Icon: Linkedin, size: 20 },
                                        { Icon: Instagram, size: 20 },
                                        { Icon: Youtube, size: 25 },
                                        { Icon: Github, size: 20 }
                                    ].map((social, idx) => (
                                        <motion.a
                                            key={idx}
                                            href="#"
                                            className="social-link"
                                            whileHover={{ scale: 1.2, rotate: 5 }}
                                            whileTap={{ scale: 0.9 }}
                                        >
                                            <social.Icon size={social.size} />
                                        </motion.a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Form Card */}
                    <motion.div
                        className="contact-form-card"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        whileHover={{ boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                    >
                        <form className="contact-form">
                            <div className="input-group">
                                <User size={20} className="input-icon" />
                                <input type="text" name="name" placeholder="Name" required />
                            </div>
                            <div className="input-group">
                                <Mail size={20} className="input-icon" />
                                <input type="email" name="email" placeholder="Email" required />
                            </div>
                            <div className="input-group textarea-group">
                                <MessageSquare size={20} className="input-icon" />
                                <textarea name="message" placeholder="What's on your mind?" rows="4" required></textarea>
                            </div>
                            <motion.button
                                type="submit"
                                className="submit-btn"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <span>Send Message</span>
                            </motion.button>
                        </form>
                    </motion.div>
                </div>

                <motion.div
                    className="contact-footer"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                >
                    <p>Alternatively, you can fill out the form and I'll get back to you shortly.</p>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
