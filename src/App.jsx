import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import Brand from "./components/Brand"
import Development from "./components/Development"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

export default function App() {
  return (
    <>
    <Navbar />
    <main>
      <Hero />
      <About />
      <Brand />
      <Development />
      <Contact />
    </main>
    <Footer />
    </>
  )
}