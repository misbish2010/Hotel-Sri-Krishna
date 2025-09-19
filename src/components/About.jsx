import React from 'react'

export default function About(){
  return (
    <section id="about" className="py-12">
      <div className="grid md:grid-cols-2 gap-8 items-center">

        <img
          src="/images/about/reception.jpeg"
          className="rounded-lg shadow"
          alt="Hotel Sri Krishna Reception"
        />

        <div>
          <h2 className="text-3xl font-serif mb-4">About Us</h2>
          <p className="text-gray-700 mb-4">Hotel Sri Krishna offers warm hospitality in Koraput. With comfortable rooms, authentic dining and proximity to local attractions, we ensure every guest leaves with fond memories.</p>

          <p className="text-gray-700 mb-4">Every aspect of our property has been thoughtfully crafted to ensure the utmost comfort and convenience.</p>

          <p className="text-gray-700 mb-4">We invite you to explore the perfect blend of luxury and comfort in your new home.</p>

          <a href="#contact" className="bg-royal text-white px-6 py-2 rounded">Contact Us</a>
        </div>
      </div>
    </section>
  )
}
