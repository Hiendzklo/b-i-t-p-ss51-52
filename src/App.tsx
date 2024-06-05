import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Bt1+2/Home'
import About from './components/Bt1+2/About'
import Contact from './components/Bt1+2/Contact'
import Navbar from './components/Bt1+2/Navbar'
import About2 from './components/Bt3/About2'
import Contact2 from './components/Bt3/Contact2'
import Elements from './components/Bt3/Elements'
import Index from './components/Bt3/Index'
import Services from './components/Bt3/Services'
import Header from './components/Bt4/Header'
import HeroSection from './components/Bt4/HeroSection'
import HomePage from './components/Bt4/HomePage'
import AboutPage from './components/Bt4/AboutPage'
import Footer from './components/Bt4/Footer'
import Header2 from './components/Bt5/Header2'
import HeroSection2 from './components/Bt5/HeroSection2'
import HomePage2 from './components/Bt5/HomePage2'
import AboutPage2 from './components/Bt5/AboutPage2'
import Footer2 from './components/Bt5/Footer2'



export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          Bài 3
          <Route path="/about2" element={<About2 />} />
          <Route path="/contact2" element={<Contact2 />} />
          <Route path="/elements" element={<Elements />} />
          <Route path="/index" element={<Index />} />
          <Route path="/services" element={<Services />} />
          Bài4
          
          
            <Route path="/homepage" element={<HomePage />} />
            <Route path="/about3" element={<AboutPage />} />
          Bài5
          
            <Route path="/hompage2" element={<HomePage2 />} />
            <Route path="/about4" element={<AboutPage2 />} />
          
          
      </Routes>
      <Header />
      <HeroSection />
      <Footer />
      Bài 5
      <Header2 />
      <HeroSection2 />
      <Footer2 />      
    </div>
  )
}
