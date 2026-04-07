import { Monitor, Bot, Palette, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

function Skills() {
  const skillGroups = [
    {
      title: "Web Development",
      icon: <Monitor className="skill-icon" size={24} />,
      category: "category-web",
      skills: ["React", "HTML", "CSS", "JavaScript", "Tailwind", "Wordpress"]
    },
    {
      title: "AI Automation",
      icon: <Bot className="skill-icon" size={24} />,
      category: "category-ai",
      skills: ["n8n", "AI Workflows", "API Integrations", "Chatbot Flows"]
    },
    {
      title: "Design",
      icon: <Palette className="skill-icon" size={24} />,
      category: "category-design",
      skills: ["Figma", "Web UI Design", "Landing Pages", "Component Systems"]
    },
    {
      title: "Tools & Platforms",
      icon: <Briefcase className="skill-icon" size={24} />,
      category: "category-tools",
      skills: ["WordPress", "Git/GitHub", "Vercel", "Netlify"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section className="skills" id="skills">
      <div className="container skills-content">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Skills</h2>
          <p className="skills-subtitle">Technologies & tools I use to build products</p>
        </motion.div>

        <motion.div
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillGroups.map((group, i) => (
            <motion.div
              key={i}
              className={`skill-card ${group.category}`}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                transition: { duration: 0.2 }
              }}
            >
              <div className="skill-card-header">
                <div className="skill-icon-outer">
                  {group.icon}
                </div>
                <h3>{group.title}</h3>
              </div>

              <div className="skill-tags">
                {group.skills.map((s, idx) => (
                  <motion.span
                    key={idx}
                    className="skill-tag"
                    whileHover={{ scale: 1.1, backgroundColor: "var(--highlight-color, #ff5733)" }}
                  >{s}</motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;