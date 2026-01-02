import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import ProjectsSection from './components/projects/ProjectsSection'
import Contact from './components/contatos/Contact'
import Footer from './components/footer/Footer'
import About from './components/about/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header/>
      <Hero/>
      <ProjectsSection/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
