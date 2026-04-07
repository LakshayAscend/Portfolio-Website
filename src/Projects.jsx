import ProjectCard from "./Component/ProjectCard.jsx";

function Projects({ projects }) {
    return (
        <section className="project" id="projects">
            <div className="container">
                <div className="project-header">
                    <h2>Projects</h2>
                    <p>Here are some of my projects:</p>
                </div>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            image={project.image}
                            title={project.title}
                            description={project.description}
                            techstack={project.techstack}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;