import { motion } from 'framer-motion';

function ProjectCard(props) {
    return (
        <motion.div
            className="project-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{
                y: -10,
                scale: 1.02,
                transition: { duration: 0.2 }
            }}
        >
            <img src={props.image} alt="project image" />
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <span>{props.techstack}</span>
        </motion.div>
    );
}

export default ProjectCard;