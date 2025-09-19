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
// style={{ backgroundImage: "url('/images/background/annie-spratt-xTaOPMa6wAE-unsplash.jpg')" }}>
                 // style={{ backgroundImage: "url('/images/background/autumn-studio-221wufG10eg-unsplash.jpg')" }}>
                 // style={{ backgroundImage: "url('/images/background/bernard-hermant-1nDW7BjBj1s-unsplash.jpg')" }}>
                 // style={{ backgroundImage: "url('/images/background/luke-chesser-3rWagdKBF7U-unsplash.jpg')" }}>
                 // style={{ backgroundImage: "url('/images/background/max-fuchs-Nm6ojlDO-5c-unsplash.jpg')" }}>
                  //style={{ backgroundImage: "url('/images/background/resul-mentes-DbwYNr8RPbg-unsplash')" }}>
                 // style={{ backgroundImage: "url('/images/background/repeating-triangles.svg')" }}>
export default function App(){
  return (
      <div className="min-h-screen bg-stone-50 text-gray-900">

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
