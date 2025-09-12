import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Highlights from './components/Highlights'
import Rooms from './components/Rooms'
import Gallery from './components/Gallery'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'
import Testimonials from "./components/Testimonials";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function App(){
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <Highlights />
          <Rooms />
          <Gallery />
          <About />
          <Testimonials />
          <Contact />
        </div>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
