import About from './components/About'
import Contact from './components/Contact'
import Education from './components/Education'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'

export default function App() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-2xl px-4 sm:px-6">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
