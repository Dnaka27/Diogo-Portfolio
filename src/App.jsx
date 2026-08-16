import './App.css'
import {
  certificates,
  portfolioProjects,
  profile,
  skillGroups,
  socialLinks,
} from './data/portfolioData'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ProjectsGrid from './components/ProjectsGrid'
import SkillsSection from './components/SkillsSection'
import ContactSection from './components/ContactSection'

const App = () => {
  return (
    <div className='sheet'>
      <Navbar profile={profile} />
      <main>
        <HeroSection profile={profile} />
        <ProjectsGrid projects={portfolioProjects} />
        <SkillsSection
          profile={profile}
          skillGroups={skillGroups}
          certificates={certificates}
        />
        <ContactSection profile={profile} socialLinks={socialLinks} />
      </main>
      <footer className='sheet-foot'>
        <div className='wrap sheet-foot-inner'>
          <span>Sheet 1 of 1</span>
          <span>Drawn with React + GSAP</span>
          <span>© 2026 Diogo Oike Kanefuku</span>
        </div>
      </footer>
    </div>
  )
}

export default App
