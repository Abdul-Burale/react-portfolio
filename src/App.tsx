import './index.css'
import Hero from './components/Hero'
import Projects from './components/Projects'
function App() {

  return (
    <>
    <div className="full-background">
      <div className="relative overflow-y-auto max-h-screen">
      <Hero />
      <Projects />
      </div>
    </div>
    
    </>
  )
}

export default App