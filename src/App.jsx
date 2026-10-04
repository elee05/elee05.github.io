import Navbar from './components/Navbar'
import Profile from './components/Profile'
import About from './components/About'
import Project from './components/Project'
import EquityReports from './components/EquityReports'
import projects from './projects'

export default function App() {
  return (
    <>
      <Navbar />
      <br /><br /><br /><br /><br /><br />
      <div id="main">
        <Profile />
        <About />
      </div>
      <EquityReports />
      <div id="projects">
        {projects.map((p) => (
          <Project key={p.name} {...p} />
        ))}
      </div>
      
    </>
  )
}
