import { useEffect } from 'react'
import { motion } from 'framer-motion' // Updated import
import './App.css'
import Home from './Home'
import TrustedBy from './TrustedBy'
import Features from './Features'
import Main2 from './Main2'
import Testimonials from './Testimonials'
import Footer from './Footer'
import Pricing from './Pricing'
import FAQ from './FAQ'

function App() {
  // Animation settings - slides up and fades in
  const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 }, // "once: true" means it won't re-animate when scrolling back up
    transition: { duration: 0.8, ease: "easeOut" }
  };

  return (
    <div className="app-container">
      <Home /> {/* Usually, we don't animate the hero/home so it's visible immediately */}

      <motion.div {...fadeUp}><TrustedBy /></motion.div>
      <motion.div {...fadeUp}><Features /></motion.div>
      <motion.div {...fadeUp}><Main2 /></motion.div>
      <motion.div {...fadeUp}><Testimonials /></motion.div>
      <motion.div {...fadeUp}><Pricing /></motion.div>
      <motion.div {...fadeUp}><FAQ /></motion.div>

      <Footer />
    </div>
  )
}

export default App