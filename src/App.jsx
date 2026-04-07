import Header from "./Header.jsx"
import HeroSection from "./Hero-section.jsx"
import Projects from "./Projects.jsx"
import Skills from "./Skills.jsx"
import About from "./About.jsx"
import Contact from "./Contact.jsx"

function App() {
  const projectsData = [
    {
      image: "/project1.png",
      title: "EliteGym – Modern Fitness Landing Page",
      description: "A modern and responsive gym website built with React, featuring a bold hero section and clean component structure.",
      techstack: "React, CSS"
    },
    {
      image: "/project2.png",
      title: "Serenity Spa – Wellness Website",
      description: "A minimal and elegant spa website designed with React, focused on layout, typography, and user experience.",
      techstack: "React, CSS, JS"
    }
  ]
  return (
    <>
      <Header />
      <HeroSection />
      <Projects projects={projectsData} />
      <Skills />
      <About />
      <Contact />
    </>
  )
}

export default App
