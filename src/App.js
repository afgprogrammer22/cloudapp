import React from 'react'
import './index.css';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero';
import About from './components/About';
import Support from './components/Support';


const App = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <About />
        <Support />
    </div>
  )
}

export default App
