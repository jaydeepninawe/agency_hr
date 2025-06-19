import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Services from  './pages/Services'
import Contact from  './pages/Contact'
import { Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'

function App() {
 

  return (
    <div className="pt-10"> {/* padding for fixed navbar */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer  className="mt-7"/>
    </div>
  )
}

export default App
