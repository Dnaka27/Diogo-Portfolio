import './App.css'
import { portfolioProjects, profile, skillGroups, socialLinks } from './data/portfolioData'
import AnimatedBackground from './components/AnimatedBackground'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ProjectsGrid from './components/ProjectsGrid'
import SkillsSection from './components/SkillsSection'
import ContactSection from './components/ContactSection'

const App = () => {
  return (
    <div className='app-shell'>
      <AnimatedBackground />
      <Navbar profile={profile} />
      <main>
        <HeroSection profile={profile} />
        <ProjectsGrid projects={portfolioProjects} />
        <SkillsSection profile={profile} skillGroups={skillGroups} />
        <ContactSection profile={profile} socialLinks={socialLinks} />
      </main>
    </div>
  )
}

export default App
