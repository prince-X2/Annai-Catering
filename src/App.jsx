import React from 'react'
import './App.css'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Work from './components/Work.jsx'
import Testimonals from './components/Testimonals.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <>
      <div className="App">
        <Home />
        <About />
        <Work />
        <Testimonals />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App;
