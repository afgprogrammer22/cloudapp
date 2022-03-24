import React from 'react'
import './index.css';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero';
import About from './components/About';


const App = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <About />
    </div>
  )
}

export default App
