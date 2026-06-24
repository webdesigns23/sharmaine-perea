import { useState } from "react"
import Loader from "./components/Loader"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import Brand from "./components/Brand"
import Development from "./components/Development"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

export default function App() {
  const [ loaded, setLoaded ] = useState(false);

  return (
    <>
    {!loaded && <Loader onComplete={() => setLoaded(true)} />}
    <div style={{ opacity: loaded ? 1 : 0, transition: 'opacity 0.5s ease' }}>
      <Navbar />
      <main>
        <Home />
        <About />
        <Brand />
        <Development />
        <Contact />
      </main>
      <Footer />
    </div>
    </>
  )
}