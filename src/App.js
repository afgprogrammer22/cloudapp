import React from 'react'
import './index.css';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero';
import About from './components/About';
import Support from './components/Support';
import Platforms from './components/Platforms';
import Pricing from './components/Pricing.jsx';
import Footer from './components/Footer.jsx';

const App = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <About />
        <Support />
        <Platforms />
        <Pricing />
        <Footer />
    </div>
  )
}

export default App
